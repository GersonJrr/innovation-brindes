import Navbar from '../Components/NavBar';
import { ProdutosLista } from './Produtos/Components/ProdutosLista';
import Paginacao from './Produtos/Components/Paginacao';
import { useProdutos } from '../Hooks/useProdutos';
import style from './Produtos/Style/ProdutoCard.module.css';
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
      <div className={style.TamanhoTela}>
        <ProdutosLista produtos={produtos} carregando={carregando} />
      </div>
      <div className={style.EspacoPaginacao}>
        <Paginacao
          paginaAtual={paginaAtual}
          totalPaginas={totalPaginas}
          onPaginaChange={carregarProdutos}
          carregando={carregando}
        />
      </div>
      <Footer/>
    </>
  );
}
