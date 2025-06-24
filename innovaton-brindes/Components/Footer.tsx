import React, { useState } from 'react';
import styles from '../styles/Footer.module.css';

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
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h3>Receba nossas promoções!</h3>
        <p>Cadastre seu e-mail para ficar por dentro das novidades.</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.inputEmail}
            required
          />
          <button type="submit" className={styles.btnEnviar}>
            Enviar
          </button>
        </form>

        {status === 'enviado' && (
          <p className={styles.sucesso}>Obrigado por se cadastrar!</p>
        )}
        {status === 'erro' && (
          <p className={styles.erro}>Por favor, insira um e-mail válido.</p>
        )}

        <p className={styles.copy}>&copy; {new Date().getFullYear()} Innovation Brindes. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
