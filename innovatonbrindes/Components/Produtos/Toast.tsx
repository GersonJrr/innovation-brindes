import React, { useEffect } from 'react';

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
    <div
      className="
        fixed bottom-5 right-5
        bg-verdeToast text-branco
        px-5 py-3
        rounded-md
        shadow-lg
        font-semibold
        z-[9999]
        animate-slide-in
      "
      role="alert"
      aria-live="assertive"
    >
      {message}
    </div>
  );
}
