import React from 'react';
import CarrinhoItem from './CarrinhoItem';
import { useCart } from '../../Context/CartContext';

export default function CarrinhoLista() {
  const { carrinho } = useCart();

  if (carrinho.length === 0) {
    return (
      <p className="text-center text-xl text-gray-500">
        🛒 Seu carrinho está vazio.
      </p>
    );
  }

  return (
    <div className="bg-[#f9f9f9] p-4 rounded-lg max-h-[70vh] overflow-y-auto">
      {carrinho.map((item) => (
        <CarrinhoItem key={item.id} item={item} />
      ))}
    </div>
  );
}
