import React from 'react';
import styles from '../Style/Paginacao.module.css';

interface PaginacaoProps {
  paginaAtual: number;
  totalPaginas: number;
  onPaginaChange: (novaPagina: number) => void;
  carregando?: boolean;
}

export default function Paginacao({
  paginaAtual,
  totalPaginas,
  onPaginaChange,
  carregando = false,
}: PaginacaoProps) {
  const obterPaginasVisiveis = (): (number | string)[] => {
    const paginas: (number | string)[] = [];

    if (totalPaginas <= 5) {
      for (let i = 1; i <= totalPaginas; i++) {
        paginas.push(i);
      }
    } else {
      paginas.push(1);

      if (paginaAtual > 3) paginas.push('...');

      const start = Math.max(2, paginaAtual - 1);
      const end = Math.min(totalPaginas - 1, paginaAtual + 1);

      for (let i = start; i <= end; i++) {
        paginas.push(i);
      }

      if (paginaAtual < totalPaginas - 2) paginas.push('...');
      
      if (!paginas.includes(totalPaginas)) paginas.push(totalPaginas);
    }

    return paginas;
  };

  const paginas = obterPaginasVisiveis();

  return (
    <div className={styles.container}>
      <button
        onClick={() => onPaginaChange(paginaAtual - 1)}
        disabled={paginaAtual <= 1 || carregando}
        className={styles.botao}
      >
        Anterior
      </button>

      {paginas.map((pagina, index) =>
        pagina === '...' ? (
          <span key={`ellipsis-${index}`} className={styles.ellipsis}>
            ...
          </span>
        ) : (
          <button
            key={pagina}
            onClick={() => onPaginaChange(Number(pagina))}
            disabled={paginaAtual === pagina || carregando}
            className={`${styles.botao} ${
              paginaAtual === pagina ? styles.ativo : ''
            } ${carregando ? styles.desabilitado : ''}`}
            aria-current={paginaAtual === pagina ? 'page' : undefined}
          >
            {pagina}
          </button>
        )
      )}

      <button
        onClick={() => onPaginaChange(paginaAtual + 1)}
        disabled={paginaAtual >= totalPaginas || carregando}
        className={styles.botao}
      >
        {carregando ? 'Carregando...' : 'Próxima'}
      </button>
    </div>
  );
}
