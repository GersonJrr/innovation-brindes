import Navbar from '@/Components/NavBar';
import CarrinhoContainer from './Carrinho/Components/CarrinhoContainer';
import SectionCarrinho from './Carrinho/Components/SectionCarrinho';
import Footer from '@/Components/Footer';

export default function CarrinhoPage() {
  return (
    <>
      <Navbar />
      <SectionCarrinho />
      <CarrinhoContainer />
      <Footer />
    </>
  );
}
