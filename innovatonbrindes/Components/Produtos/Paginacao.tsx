import React from 'react';

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
    <div className="mt-12 text-center">
      <button
        onClick={() => onPaginaChange(paginaAtual - 1)}
        disabled={paginaAtual <= 1 || carregando}
        className={`
          mx-1 px-3 py-1 border rounded
          border-[#c8e89f] bg-verde text-branco text-base
          transition-transform duration-200
          disabled:opacity-60 disabled:cursor-not-allowed
          hover:scale-105 hover:cursor-pointer
          ${carregando || paginaAtual <= 1 ? 'hover:scale-100 hover:cursor-not-allowed' : ''}
        `}
      >
        Anterior
      </button>

      {paginas.map((pagina, index) =>
        pagina === '...' ? (
          <span key={`ellipsis-${index}`} className="mx-1 inline-block text-branco">
            ...
          </span>
        ) : (
          <button
            key={pagina}
            onClick={() => onPaginaChange(Number(pagina))}
            disabled={paginaAtual === pagina || carregando}
            aria-current={paginaAtual === pagina ? 'page' : undefined}
            className={`
              mx-1 px-3 py-1 border rounded
              border-[#c8e89f] text-base
              transition-transform duration-200
              ${paginaAtual === pagina
                ? 'font-bold bg-gray-300 cursor-default hover:scale-100'
                : 'bg-verde text-branco cursor-pointer hover:scale-105'}
              ${carregando ? 'opacity-60 cursor-not-allowed hover:scale-100' : ''}
            `}
          >
            {pagina}
          </button>
        )
      )}

      <button
        onClick={() => onPaginaChange(paginaAtual + 1)}
        disabled={paginaAtual >= totalPaginas || carregando}
        className={`
          mx-1 px-3 py-1 border rounded
          border-[#c8e89f] bg-verde text-branco text-base
          transition-transform duration-200
          disabled:opacity-60 disabled:cursor-not-allowed
          hover:scale-105 hover:cursor-pointer
          ${carregando || paginaAtual >= totalPaginas ? 'hover:scale-100 hover:cursor-not-allowed' : ''}
        `}
      >
        {carregando ? 'Carregando...' : 'Próxima'}
      </button>
    </div>
  );
}
