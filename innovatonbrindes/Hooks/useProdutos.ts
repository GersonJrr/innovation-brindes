import { useState, useEffect } from 'react';
import { Produto } from '@/Interface/Produto';
import { buscarProdutos } from '@/Services/produtosService';

export function useProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [carregando, setCarregando] = useState(false);

  const carregarProdutos = async (pagina: number) => {
    try {
      setCarregando(true);
      const { produtos, totalPaginas } = await buscarProdutos(pagina);
      setProdutos(produtos);
      setTotalPaginas(totalPaginas);
      setPaginaAtual(pagina);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    carregarProdutos(1);
  }, []);

  return {
    produtos,
    paginaAtual,
    totalPaginas,
    carregando,
    carregarProdutos,
  };
}
