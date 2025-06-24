import { Produto } from '@/Interface/Produto';
import { parseRgbCores, CorHex } from '../Utils/parseRgbCores';

const API_URL = 'https://apihomolog.innovationbrindes.com.br/api/site/v2/busca';

type BuscarProdutosResponse = {
  produtos: Produto[];
  totalPaginas: number;
};

export const buscarProdutos = async (pagina: number, limite = 20): Promise<BuscarProdutosResponse> => {
  const offset = (pagina - 1) * limite;

  const response = await fetch(`${API_URL}/busca-todos-produtos-dev?limit=${limite}&offset=${offset}`);

  if (!response.ok) {
    throw new Error('Erro ao buscar produtos');
  }

  const data = await response.json();

  return {
    produtos: data.dados as Produto[],
    totalPaginas: data.last_page as number,
  };
};



export async function buscarCoresPorProdutoId(produtoId: number): Promise<CorHex[]> {
  const url = `https://apihomolog.innovationbrindes.com.br/api/site/v2/produto/${produtoId}`;
  
  const response = await fetch(url);
  if (!response.ok) throw new Error('Erro ao buscar cores do produto');
  
  const data = await response.json();
  return parseRgbCores(data.rgb_cores);
}

