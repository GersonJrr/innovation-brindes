import React from 'react';
import { Produto } from '@/Interface/Produto';
import { ProdutoCard } from './ProdutoCard';

type ProdutosListaProps = {
  produtos: Produto[];
  carregando?: boolean;
};

export function ProdutosLista({ produtos, carregando = false }: ProdutosListaProps) {
  if (carregando) {
    return <p className="text-center text-gray-500 mt-8">Carregando produtos...</p>;
  }

  if (produtos.length === 0) {
    return <p className="text-center text-gray-500 mt-8">Nenhum produto encontrado.</p>;
  }

  return (
    <ul
      className="
        list-none p-0
        grid gap-8
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
      "
    >
      {produtos.map((produto) => (
        <ProdutoCard key={produto.codigo_produto} produto={produto} />
      ))}
    </ul>
  );
}
