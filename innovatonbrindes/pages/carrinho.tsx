import Navbar from '@/Components/NavBar';
import CarrinhoContainer from '../Components/Carrinho/CarrinhoContainer';
import SectionCarrinho from '../Components/Carrinho/SectionCarrinho';
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
