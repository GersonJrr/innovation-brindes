import React, { useState, useEffect } from 'react';
import { Produto } from '../../../Interface/Produto';
import styles from '../Style/ProdutoCard.module.css';
import buttonStyle from '../Style/ButtonConfira.module.css';
import { useCart } from '../../../Context/CartContext';
import { CorHex, parseRgbCores } from '../../../Utils/parseRgbCores';
import { buscarCoresPorProdutoId } from '../../../Services/produtosService';
import Toast from '../Components/Toast'; 

type ProdutoCardProps = {
  produto: Produto;
};

export function ProdutoCard({ produto }: ProdutoCardProps) {
  const { adicionarProduto } = useCart();
  const [cores, setCores] = useState<CorHex[]>([]);
  const [loading, setLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState('');

  const precoMinimo = produto.preco_dias?.reduce((min, item) => {
    return Number(item.preco) < min ? Number(item.preco) : min;
  }, Infinity);

  useEffect(() => {
    const carregarCores = async () => {
      try {
        setLoading(true);
        const coresApi = await buscarCoresPorProdutoId(produto.codigo_produto);
        setCores(coresApi);
      } catch (error) {
        console.error('Erro ao carregar cores da API, usando fallback:', error);
        const fallback = parseRgbCores(produto.rgb_cores || '');
        setCores(fallback);
      } finally {
        setLoading(false);
      }
    };

    carregarCores();
  }, [produto]);

  const handleAdicionarCarrinho = () => {
    adicionarProduto({
      id: produto.codigo_produto,
      nome: produto.nome,
      imagem: produto.img_home_produto,
      preco: precoMinimo,
      quantidade: 1,
    });

    setToastMessage(`✅ Produto ${produto.nome} adicionado ao carrinho!`);
  };

  return (
    <>
      <div>
        <div className={styles.titulo}>
          <h2>{produto.nome}</h2>
          <p>{produto.codigo_produto}</p>
        </div>

        <li className={styles.produtoItem}>
          <img
            src={produto.img_home_produto}
            alt={produto.nome}
            className={styles.produtoImagem}
          />
          <div className={styles.produtoInfo}>
            <p title={produto.descricao}>{produto.descricao}</p>
            <p>
              <strong>Cores:</strong>{' '}
              {loading ? (
                <span className={styles.loadingText}>Carregando cores...</span>
              ) : cores.length > 0 ? (
                <div className={styles.coresContainer}>
                  <span className={styles.coresContent}>
                    {cores.map((cor, index) => (
                      <span
                        key={index}
                        className={styles.corCirculo}
                        title={`${cor.name} - ${cor.hex}`}
                        style={{ backgroundColor: cor.hex }}
                      />
                    ))}
                  </span>
                </div>
              ) : (
                <span className={styles.semCor}>Único</span>
              )}
            </p>
            <div className={styles.precoContainer}>
              <span>a partir de </span>
              <span>R$ {precoMinimo.toFixed(2).replace('.', ',')}</span>
              <span> gerado pela melhor oferta</span>
            </div>
          </div>
        </li>

        <button onClick={handleAdicionarCarrinho} className={buttonStyle.botao}>
          CONFIRA
        </button>
      </div>

      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage('')}
          duration={3000}
        />
      )}
    </>
  );
}
