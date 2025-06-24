import Link from 'next/link';
import styles from '../styles/NavBar.module.css';
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
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="logo.png" alt="logo" className={styles.logoImage} />
        </Link>
      </div>

      <ul className={styles.navLinks}>
        <li>
          <a href="#">
            <MdEmail className={styles.icon} />
          </a>
        </li>

        <li>
          <a href="#">
            <FaPhoneAlt className={styles.iconCel} />
          </a>
        </li>

        <li className={styles.carrinhoContainer}>
          <Link href="/carrinho">
            <div className={styles.carrinhoIcon}>
              <FaCartShopping className={styles.iconCel} />
              {quantidadeItens > 0 && (
                <span className={styles.badge}>{quantidadeItens}</span>
              )}
            </div>
          </Link>
        </li>

        <li className={styles.avatarContainer}>
          <div className={styles.avatar}>
            <img src="user.png" alt="User" />
          </div>
          <div className={styles.dateInfo}>
            <span className={styles.nome}>Ana Carol Machado</span>
            <span>{dayName}, {dateString}</span>
          </div>
        </li>
      </ul>
    </nav>
  );
}
