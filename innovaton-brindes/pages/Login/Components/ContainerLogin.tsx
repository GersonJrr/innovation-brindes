import styles from '../style/Container.module.css';
import React, { ReactNode } from 'react';

interface ContainerLoginProps {
  children: ReactNode;
}

export default function ContainerLogin({ children }: ContainerLoginProps) {
  return <div className={styles.container}>{children}</div>;
}
