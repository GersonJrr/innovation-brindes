import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from '../style/Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children, type = 'button', ...props }: ButtonProps) {
  return (
    <button className={styles.button} type={type} {...props}>
      {children}
    </button>
  );
}

