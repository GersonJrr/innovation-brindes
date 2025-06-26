import Link from 'next/link';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useCart } from '@/Context/CartContext';

export default function Navbar() {
  const { carrinho } = useCart();

  const quantidadeItens = carrinho.reduce(
    (total, item) => total + item.quantidade,
    0
  );

  const today = new Date();
  const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const dayName = days[today.getDay()];
  const dateString = today.toLocaleDateString('pt-BR');

  return (
    <nav className="w-full max-w-[100vw] h-[90px] bg-verde flex justify-between items-center px-10 shadow-md">
      <div className="flex-shrink-0">
        <Link href="/">
          <img src="/logo.png" alt="logo" className="w-[190px] max-[1068px]:w-[140px] max-[480px]:w-[129px]" />
        </Link>
      </div>

      <ul className="list-none flex gap-[30px] items-center m-0 p-0 max-[1068px]:gap-[15px] max-[480px]:gap-[20px]">
        <li>
          <a href="#">
            <MdEmail className="text-branco text-[29px] hover:scale-125 transition-transform max-[1068px]:text-[22px] max-[480px]:text-[25px]" />
          </a>
        </li>

        <li>
          <a href="#">
            <FaPhoneAlt className="text-branco text-[23px] hover:scale-125 transition-transform max-[1068px]:text-[18px] max-[480px]:text-[21px]" />
          </a>
        </li>

        <li className="relative">
          <Link href="/carrinho">
            <div className="relative flex items-center">
              <FaCartShopping className="text-branco text-[23px] hover:scale-125 transition-transform max-[1068px]:text-[18px] max-[480px]:text-[21px]" />
              {quantidadeItens > 0 && (
                <span className="absolute top-[-10px] right-[-10px] bg-branco text-[var(--verde-color)] text-xs px-[6px] py-[3px] rounded-full font-bold">
                  {quantidadeItens}
                </span>
              )}
            </div>
          </Link>
        </li>

        <li className="flex items-center gap-[15px] text-branco max-[480px]:hidden">
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-[5px] border-branco max-[1068px]:w-[45px] max-[1068px]:h-[45px] max-[1068px]:border-[3px]">
            <img src="/user.png" alt="User" className="w-full h-full object-cover" />
          </div>
          <div className="text-start text-[13px] max-w-[200px] max-[1068px]:text-[11px]">
            <span className="block text-[18px] max-[1068px]:text-[16px]">Ana Carol Machado</span>
            <span className="block">{dayName}, {dateString}</span>
          </div>
        </li>
      </ul>
    </nav>
  );
}
