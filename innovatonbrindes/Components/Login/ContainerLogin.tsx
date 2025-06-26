import React, { ReactNode } from 'react';

interface ContainerLoginProps {
  children: ReactNode;
}

export default function ContainerLogin({ children }: ContainerLoginProps) {
  return (
    <div
      className="
        h-full w-full
        bg-[url('/login-bg.jpg')] bg-cover bg-center bg-no-repeat
        flex flex-col justify-center items-center
      "
    >
      {children}
    </div>
  );
}
