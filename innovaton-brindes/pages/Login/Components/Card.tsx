import React, { ReactNode } from 'react';
import styles from '../style/Card.module.css';

interface CardLoginProps {
  children: ReactNode;
}

export default function CardLogin({ children }: CardLoginProps) {
  return <div className={styles.card}>{children}</div>;
}
