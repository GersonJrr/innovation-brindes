import React, { useState, useEffect } from 'react';
import { Produto } from '../../Interface/Produto';
import { useCart } from '../../Context/CartContext';
import { CorHex, parseRgbCores } from '../../Utils/parseRgbCores';
import { buscarCoresPorProdutoId } from '../../Services/produtosService';
import Toast from './Toast';

type ProdutoCardProps = {
  produto: Produto;
};

export function ProdutoCard({ produto }: ProdutoCardProps) {
  const { adicionarProduto } = useCart();
  const [cores, setCores] = useState<CorHex[]>([]);
  const [loading, setLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState('');

  const precoMinimo = produto.preco_dias?.reduce(
    (min, item) => (Number(item.preco) < min ? Number(item.preco) : min),
    Infinity
  );

  useEffect(() => {
    async function carregarCores() {
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
    }
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
    <div className="flex flex-col items-center w-full max-w-[300px] h-[600px] mx-auto sm:mx-0">
      <header className="mb-2 w-full">
        <h2
          title={produto.nome}
          className="font-bold h-5 overflow-hidden text-ellipsis whitespace-nowrap"
        >
          {produto.nome}
        </h2>
        <p
          title={produto.codigo_produto.toString()}
          className="text-sm h-5 overflow-hidden text-ellipsis whitespace-nowrap text-center"
        >
          {produto.codigo_produto}
        </p>
      </header>
      
      <article
        role="listitem"
        className="border border-gray-300 rounded-lg p-4 flex flex-col items-center text-center bg-branco shadow-sm min-h-[400px] w-full"
      >
        <img
          src={produto.img_home_produto}
          alt={produto.nome}
          className="w-full max-w-[220px] object-contain mb-4 rounded"
        />

        <div className="produtoInfo mb-4 w-full text-left">
          <div className="min-h-[60px] mb-2">
            <p
              title={produto.descricao}
              className="text-gray-600 text-sm line-clamp-3 leading-5"
            >
              {produto.descricao || <span className="invisible">Espaço reservado</span>}
            </p>
          </div>
          
          <p className="mb-2">
            <strong>Cores:</strong>{' '}
            {loading ? (
              <span className="text-gray-400">Carregando cores...</span>
            ) : cores.length > 0 ? (
              <div className="absolute h-[75px] mt-3">
                <div className="grid grid-cols-5 gap-[5px]">
                  {cores.map((cor, index) => (
                    <span
                      key={index}
                      title={`${cor.name} - ${cor.hex}`}
                      aria-label={`Cor ${cor.name}`}
                      className="w-4 h-4 rounded-full border border-gray-300 inline-block"
                      style={{ backgroundColor: cor.hex }}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <span className="text-gray-400">Único</span>
            )}
          </p>

          <div className="flex flex-col items-end text-right mt-auto">
            <span className="text-xs text-gray-600 mb-0.5">a partir de</span>
            <span className="font-semibold text-2xl text-gray-700 mb-0.5">
              R$ {precoMinimo.toFixed(2).replace('.', ',')}
            </span>
            <span className="text-xs text-gray-400">gerado pela melhor oferta</span>
          </div>
        </div>

        {toastMessage && (
          <Toast
            message={toastMessage}
            onClose={() => setToastMessage('')}
            duration={3000}
          />
        )}
      </article>

      <button
        onClick={handleAdicionarCarrinho}
        aria-label={`Adicionar ${produto.nome} ao carrinho`}
        className="
          w-full h-8
          bg-verde
          text-branco
          font-bold
          rounded
          mt-3
          transition-transform
          hover:scale-[1.03]
          sm:text-sm
          xs:text-sm
        "
      >
        CONFIRA
      </button>
    </div>
  );
}