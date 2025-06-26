import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children, type = 'button', ...props }: ButtonProps) {
  return (
    <button
      type={type}
      {...props}
      className={`bg-white text-black border-none
        rounded-[30px] text-base
        w-[220px] h-[50px]
        cursor-pointer select-none mt-9 transition-colors duration-300
        hover:bg-gray-300
        ${props.className ?? ''}`}
    >
      {children}
    </button>
  );
}
