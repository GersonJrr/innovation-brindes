import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'enviado' | 'erro'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email.trim() === '' || !email.includes('@')) {
      setStatus('erro');
      return;
    }

    setStatus('enviado');
    setEmail('');
  };

  return (
    <footer className="bg-verde text-branco text-center px-4 py-8 mt-20">
      <div className="max-w-md mx-auto">
        <h3 className="text-xl font-semibold mb-2">Receba nossas promoções!</h3>
        <p className="text-base mb-4">
          Cadastre seu e-mail para ficar por dentro das novidades.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap justify-center gap-2 mb-4 max-[480px]:flex-col max-[480px]:items-stretch"
        >
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-2 text-base rounded outline-none flex-1 min-w-[250px] max-w-full focus:shadow-[0_0_5px_verdeEscuro]"
          />
          <button
            type="submit"
            className="bg-verdeEscuro hover:bg-verdeEscuroHover text-branco font-bold px-6 py-2 rounded transition-colors duration-300 w-auto max-[480px]:w-full"
          >
            Enviar
          </button>
        </form>

        {status === 'enviado' && (
          <p className="text-[#a6f5a7] mb-4">Obrigado por se cadastrar!</p>
        )}
        {status === 'erro' && (
          <p className="text-[#f77a7a] mb-4">Por favor, insira um e-mail válido.</p>
        )}

        <p className="text-sm opacity-70 mt-4">
          &copy; {new Date().getFullYear()} Innovation Brindes. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
