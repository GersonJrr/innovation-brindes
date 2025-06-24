import React, { useEffect } from 'react';
import styles from '../Style/Toast.module.css';

type ToastProps = {
  message: string;
  onClose: () => void;
  duration?: number; 
};

export default function Toast({ message, onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className={styles.toast}>
      {message}
    </div>
  );
}
