import React from 'react';
import CarrinhoLista from './CarrinhoLista';
import CarrinhoResumo from './CarrinhoResumo';

export default function CarrinhoContainer() {
  return (
    <div className="max-w-[1200px] mx-auto my-8 px-4 font-['Plus Jakarta Sans','Roboto',sans-serif]">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
        <CarrinhoLista />
        <CarrinhoResumo />
      </div>
    </div>
  );
}
