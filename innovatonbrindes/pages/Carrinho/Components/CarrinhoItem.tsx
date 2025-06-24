import React from 'react';
import styles from '../Style/CarrinhoItem.module.css';
import { ProdutoCarrinho, useCart } from '../../../Context/CartContext';
import { formatarPreco } from '../../../Utils/formatarPreco';

type Props = {
  item: ProdutoCarrinho;
};

export default function CarrinhoItem({ item }: Props) {
  const {
    adicionarProduto,
    diminuirQuantidade,
    removerProduto,
    atualizarQuantidade, 
  } = useCart();

  const aumentar = () => adicionarProduto({ ...item, quantidade: 1 });
  const diminuir = () => diminuirQuantidade(item.id);
  const remover = () => removerProduto(item.id);

  const handleChangeQuantidade = (e: React.ChangeEvent<HTMLInputElement>) => {
    const novaQuantidade = Math.max(1, Number(e.target.value));
    if (!isNaN(novaQuantidade)) {
      atualizarQuantidade(item.id, novaQuantidade);
    }
  };

  return (
    <div className={styles.carrinhoItem}>
      <img
        src={item.imagem}
        alt={item.nome}
        className={styles.itemImagem}
      />
      <div className={styles.itemDetalhes}>
        <h3 className={styles.itemNome}>{item.nome}</h3>
        <p className={styles.itemPreco}>Preço: R$ {formatarPreco(item.preco)}</p>
      </div>
      <div className={styles.itemQuantidade}>
        <button className={styles.btnQtd} onClick={diminuir}>-</button>

        <input
          type="number"
          min={1}
          value={item.quantidade}
          onChange={handleChangeQuantidade}
          className={styles.inputQtd}
        />

        <button className={styles.btnQtd} onClick={aumentar}>+</button>
      </div>
      <p className={styles.itemSubtotal}>
        Subtotal: R$ {formatarPreco(item.preco * item.quantidade)}
      </p>
      <button className={styles.btnRemover} onClick={remover}>
        &times;
      </button>
    </div>
  );
}
