import React from 'react';
import { useCart } from '@/Context/CartContext';

export default function ResumoPedido() {
  const { carrinho, limparCarrinho } = useCart();

  const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  return (
    <div className="bg-[#f9f9f9] p-8 rounded-lg shadow-md h-fit flex flex-col gap-6 text-[#2a7a37]">
      <h2 className="text-2xl font-bold mb-4">Resumo do Pedido</h2>

      <div className="flex justify-between text-xl font-bold">
        <span>Total:</span>
        <span className="text-[#1b4d20]">R$ {total.toFixed(2).replace('.', ',')}</span>
      </div>

      <button
        onClick={limparCarrinho}
        className="bg-[#ddd] text-[#555] font-semibold py-3 px-4 rounded-md hover:bg-[#bbb] transition-colors"
      >
        Limpar Carrinho
      </button>

      <button
        className="bg-[#2a7a37] text-white font-semibold py-3 px-4 rounded-md hover:bg-[#1e5524] transition-colors"
      >
        Finalizar Compra
      </button>
    </div>
  );
}
