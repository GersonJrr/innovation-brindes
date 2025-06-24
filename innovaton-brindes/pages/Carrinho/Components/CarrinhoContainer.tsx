import React from 'react';
import styles from '../Style/CarrinhoContainer.module.css';
import CarrinhoLista from './CarrinhoLista';
import CarrinhoResumo from '../Components/CarrinhoResumo';

export default function CarrinhoContainer() {
  return (
    <div className={styles.carrinhoContainer}>
      <div className={styles.carrinhoGrid}>
        <CarrinhoLista />
        <CarrinhoResumo />
      </div>
    </div>
  );
}
