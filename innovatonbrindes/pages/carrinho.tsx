import Navbar from '@/Components/NavBar';
import CarrinhoContainer from '../Components/Carrinho/Components/CarrinhoContainer';
import SectionCarrinho from '../Components/Carrinho/Components/SectionCarrinho';
import Footer from '@/Components/Footer';

export default function CarrinhoPage() {
  return (
    <>
      <Navbar/>
      <SectionCarrinho/>
      <CarrinhoContainer/>
      <Footer/>
    </>
  );
}
