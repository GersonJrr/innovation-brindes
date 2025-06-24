import React from 'react';
import styles from '../Style/ProdutosLista.module.css';
import { Produto } from '@/Interface/Produto';
import { ProdutoCard } from '../Components/ProdutoCard';

type ProdutosListaProps = {
  produtos: Produto[];
  carregando?: boolean;
};

export function ProdutosLista({ produtos, carregando = false }: ProdutosListaProps) {

  if (carregando) {
    return <p className={styles.loading}>Carregando produtos...</p>;
  }

  if (produtos.length === 0) {
    return <p className={styles.vazio}>Nenhum produto encontrado.</p>;
  }

  return (
    <ul className={styles.produtoLista}>
      {produtos.map(produto => (
        <ProdutoCard key={produto.codigo_produto} produto={produto} />
      ))}
    </ul>
  );
}
