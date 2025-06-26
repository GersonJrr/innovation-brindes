export default function SectionCarrinho() {
  return (
    <div
      className="relative w-full max-w-[1920px] h-[300px] flex flex-col justify-center items-center
                 text-verde text-center px-5 bg-[url('/SectionCart.svg')] bg-cover bg-center
                 font-['Plus Jakarta Sans','Roboto',sans-serif]
                 max-[1024px]:h-[250px]
                 max-[768px]:h-[200px]
                 max-[480px]:h-[140px] max-[480px]:bg-none max-[480px]:bg-[#f5f5f5]"
    >
      <h1
        className="text-[48px] font-bold m-0 text-[var(--verde-color)]
                   max-[1024px]:text-[36px]
                   max-[768px]:text-[28px]
                   max-[480px]:text-[24px]"
      >
        Carrinho
      </h1>

      <div
        className="mt-2 text-[18px] flex items-center gap-2 text-[var(--verde-color)]
                   max-[1024px]:text-[16px]
                   max-[768px]:text-[14px] max-[768px]:gap-[6px]
                   max-[480px]:text-[12px] max-[480px]:gap-[4px]"
      >
        <a
          href="/produtos"
          className="hover:underline transition-opacity duration-300 cursor-pointer text-inherit"
        >
          <span>Home</span>
        </a>

        <span
          className="inline-block bg-black
                     max-[1024px]:w-[20px] max-[1024px]:h-[20px]
                     max-[768px]:w-[16px] max-[768px]:h-[16px]
                     max-[480px]:w-[12px] max-[480px]:h-[12px]"
          style={{
            maskImage:
              "url('data:image/svg+xml;utf8,<svg fill=\\'white\\' xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 24 24\\'><path d=\\'M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z\\'/></svg>')",
            WebkitMaskImage:
              "url('data:image/svg+xml;utf8,<svg fill=\\'white\\' xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 24 24\\'><path d=\\'M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z\\'/></svg>')",
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            maskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            WebkitMaskSize: 'contain',
          }}
        ></span>

        <span className="cursor-default">Carrinho</span>
      </div>
    </div>
  );
}
