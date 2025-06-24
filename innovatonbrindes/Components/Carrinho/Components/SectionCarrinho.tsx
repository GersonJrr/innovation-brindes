import style from '../Style/SectionCarrinho.module.css';

export default function SectionCarrinho() {
  return (
    <div className={style.container}>
      <h1>Carrinho</h1>
      <div className={style.divStyle}>
        <a href="/produtos">
            <span>Home</span>
        </a>
        <span className={style.arrow} />
        <span>Carrinho</span>
      </div>
    </div>
  );
}
