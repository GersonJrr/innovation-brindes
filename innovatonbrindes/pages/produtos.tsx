import Navbar from '../Components/NavBar';
import { ProdutosLista } from '../Components/Produtos/ProdutosLista';
import Paginacao from '../Components/Produtos/Paginacao';
import { useProdutos } from '../Hooks/useProdutos';
import Footer from '@/Components/Footer';

export default function Catalogo() {
  const {
    produtos,
    paginaAtual,
    totalPaginas,
    carregando,
    carregarProdutos,
  } = useProdutos();

  return (
    <>
      <Navbar />
      <div className="max-w-[1600px] mx-auto mt-12 px-4">
        <ProdutosLista produtos={produtos} carregando={carregando} />
      </div>

      <div className="mb-5">
        <Paginacao
          paginaAtual={paginaAtual}
          totalPaginas={totalPaginas}
          onPaginaChange={carregarProdutos}
          carregando={carregando}
        />
      </div>

      <Footer />
    </>
  );
}
