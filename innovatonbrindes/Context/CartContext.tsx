import { createContext, useContext, useEffect, useReducer, ReactNode } from 'react';
import Cookies from 'js-cookie';

export type ProdutoCarrinho = {
  id: number;
  nome: string;
  imagem: string;
  preco: number;
  quantidade: number;
};

type Action =
  | { type: 'ADICIONAR'; payload: ProdutoCarrinho }
  | { type: 'DIMINUIR'; payload: number }
  | { type: 'REMOVER'; payload: number }
  | { type: 'LIMPAR' }
  | { type: 'ATUALIZAR_QUANTIDADE'; payload: { id: number; quantidade: number } }; // ✅ Novo

type CartContextType = {
  carrinho: ProdutoCarrinho[];
  adicionarProduto: (produto: ProdutoCarrinho) => void;
  diminuirQuantidade: (id: number) => void;
  removerProduto: (id: number) => void;
  limparCarrinho: () => void;
  atualizarQuantidade: (id: number, quantidade: number) => void; // ✅ Novo
};

function cartReducer(state: ProdutoCarrinho[], action: Action): ProdutoCarrinho[] {
  switch (action.type) {
    case 'ADICIONAR': {
      const existe = state.find(item => item.id === action.payload.id);
      if (existe) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantidade: item.quantidade + action.payload.quantidade }
            : item
        );
      }
      return [...state, action.payload];
    }

    case 'DIMINUIR': {
      return state
        .map(item =>
          item.id === action.payload
            ? { ...item, quantidade: item.quantidade - 1 }
            : item
        )
        .filter(item => item.quantidade > 0);
    }

    case 'REMOVER':
      return state.filter(item => item.id !== action.payload);

    case 'LIMPAR':
      return [];

    case 'ATUALIZAR_QUANTIDADE': {
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantidade: action.payload.quantidade }
          : item
      );
    }

    default:
      return state;
  }
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [carrinho, dispatch] = useReducer(cartReducer, []);

  // Carregar carrinho do localStorage ou cookie
  useEffect(() => {
    try {
      const carrinhoSalvo = localStorage.getItem('carrinho');
      const cookie = Cookies.get('carrinho');
      const dados = carrinhoSalvo || cookie;

      if (dados) {
        const parsed = JSON.parse(dados);
        if (Array.isArray(parsed)) {
          dispatch({ type: 'LIMPAR' });
          parsed.forEach((item: ProdutoCarrinho) => {
            dispatch({ type: 'ADICIONAR', payload: item });
          });
        }
      }
    } catch (e) {
      console.error('Erro ao carregar carrinho:', e);
    }
  }, []);

  // Salvar carrinho no localStorage e cookie
  useEffect(() => {
    const timeout = setTimeout(() => {
      const dados = JSON.stringify(carrinho);
      localStorage.setItem('carrinho', dados);
      Cookies.set('carrinho', dados, { expires: 7 });
    }, 300);

    return () => clearTimeout(timeout);
  }, [carrinho]);

  const adicionarProduto = (produto: ProdutoCarrinho) => {
    dispatch({ type: 'ADICIONAR', payload: produto });
  };

  const diminuirQuantidade = (id: number) => {
    dispatch({ type: 'DIMINUIR', payload: id });
  };

  const removerProduto = (id: number) => {
    dispatch({ type: 'REMOVER', payload: id });
  };

  const limparCarrinho = () => {
    dispatch({ type: 'LIMPAR' });
  };

  const atualizarQuantidade = (id: number, quantidade: number) => {
    if (quantidade >= 1) {
      dispatch({ type: 'ATUALIZAR_QUANTIDADE', payload: { id, quantidade } });
    }
  };

  return (
    <CartContext.Provider
      value={{
        carrinho,
        adicionarProduto,
        diminuirQuantidade,
        removerProduto,
        limparCarrinho,
        atualizarQuantidade, // ✅ Exportado
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart precisa estar dentro de um CartProvider');
  }
  return context;
}
