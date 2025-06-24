import React from 'react';
import styles from '../Style/CarrinhoLista.module.css';
import CarrinhoItem from './CarrinhoItem';
import { useCart } from '../../../Context/CartContext';

export default function CarrinhoLista() {
  const { carrinho } = useCart();

  if (carrinho.length === 0) {
    return <p className={styles.vazio}>🛒 Seu carrinho está vazio.</p>;
  }

  return (
    <div className={styles.listaItens}>
      {carrinho.map((item) => (
        <CarrinhoItem key={item.id} item={item} />
      ))}
    </div>
  );
}
