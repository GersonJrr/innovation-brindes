import React from 'react';
import { ProdutoCarrinho, useCart } from '../../Context/CartContext';
import { formatarPreco } from '../../Utils/formatarPreco';

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
    <div className="grid grid-cols-[80px_1fr_100px_130px_100px_40px] items-center gap-4 mb-5 p-4 border-b border-gray-300 bg-white rounded-md
                    max-[1024px]:grid-cols-[60px_1fr_80px_100px_80px_30px]
                    max-[600px]:grid-cols-[60px_1fr_auto]
                    max-[600px]:[grid-template-areas:'imagem_nome_remover''imagem_quantidade_subtotal''imagem_preco_subtotal'] max-[600px]:gap-2">

      <img
        src={item.imagem}
        alt={item.nome}
        className="w-[80px] h-[80px] object-contain rounded-md bg-white
                  max-[1024px]:w-[60px] max-[1024px]:h-[60px]
                  max-[600px]:[grid-area:imagem]"
      />

      <div className="text-gray-800 text-base max-[600px]:[grid-area:nome]">
        <h3 className="m-0 font-semibold">{item.nome}</h3>
      </div>

      <p className="font-semibold text-[#2a7a37] max-[600px]:text-sm max-[600px]:[grid-area:preco]">
        Preço: R$ {formatarPreco(item.preco)}
      </p>

      <div className="flex items-center gap-2 max-[600px]:[grid-area:quantidade]">
        <button
          onClick={diminuir}
          className="w-[25px] h-[22px] bg-[#2a7a37] hover:bg-[#1e5524] text-white font-bold rounded cursor-pointer
                     max-[1024px]:w-[24px] max-[1024px]:h-[24px]"
        >
          -
        </button>
        <input
          type="number"
          min={1}
          value={item.quantidade}
          onChange={handleChangeQuantidade}
          className="w-[45px] h-[28px] border border-gray-300 rounded text-center text-base outline-none"
        />
        <button
          onClick={aumentar}
          className="w-[25px] h-[22px] bg-[#2a7a37] hover:bg-[#1e5524] text-white font-bold rounded cursor-pointer
                     max-[1024px]:w-[24px] max-[1024px]:h-[24px]"
        >
          +
        </button>
      </div>

      <p className="font-semibold text-[#2a7a37] max-[600px]:text-base max-[600px]:[grid-area:subtotal]">
        Subtotal: R$ {formatarPreco(item.preco * item.quantidade)}
      </p>

      <button
        onClick={remover}
        className="text-red-600 text-2xl hover:text-[#a02525] cursor-pointer max-[1024px]:text-xl max-[600px]:text-lg max-[600px]:[grid-area:remover]"
      >
        &times;
      </button>
    </div>
  );
}
