import React from 'react';
import styles from '../Style/CarrinhoResumo.module.css';
import { useCart } from '@/Context/CartContext';

export default function ResumoPedido() {
  const { carrinho, limparCarrinho } = useCart();

  const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  return (
    <div className={styles.resumoContainer}>
      <h2>Resumo do Pedido</h2>
      <div className={styles.totalLinha}>
        <span>Total:</span>
        <span className={styles.totalValor}>R$ {total.toFixed(2).replace('.', ',')}</span>
      </div>
      <button className={styles.btnLimpar} onClick={limparCarrinho}>
        Limpar Carrinho
      </button>
      <button className={styles.btnCheckout}>
        Finalizar Compra
      </button>
    </div>
  );
}
