import React from 'react';
import styles from '../style/Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
  return (
    <input
      className={styles.input}
      {...props}
    />
  );
}
