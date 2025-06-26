import React, { ReactNode } from 'react';

interface CardLoginProps {
  children: ReactNode;
}

export default function CardLogin({ children }: CardLoginProps) {
  return (
    <div
      className="
        w-[90%] max-w-[600px] h-full max-h-[400px]
        bg-[var(--verde-color)] rounded-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.1)]
        flex flex-col justify-center items-center
        p-0
        md:p-5
        "
    >
      {children}
    </div>
  );
}
