import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
  return (
    <input
      {...props}
      className={`
        w-full max-w-[700px]
        px-[65px] py-4
        border border-gray-300 rounded-[30px]
        text-base outline-none
        transition-colors duration-300
        placeholder-gray-500
        focus:border-blue-500 focus:shadow-[0_0_0_2px_rgba(52,152,219,0.2)]
        max-[600px]:w-[300px] max-[600px]:max-w-[300px] max-[600px]:px-6 max-[600px]:py-[15px] max-[600px]:text-sm
        ${props.className ?? ''}
      `}
    />
  );
}
