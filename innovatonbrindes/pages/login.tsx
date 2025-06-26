import { FaUser, FaLock } from 'react-icons/fa6';
import Button from '../Components/Login/Button';
import CardLogin from '../Components/Login/Card';
import ContainerLogin from '../Components/Login/ContainerLogin';

export default function Login() {
  return (
    <ContainerLogin>
      <h1 className="text-verde font-bold text-center mb-7 sm:text-3xl">
        Bem-vindo a Innovation Brindes
      </h1>

      <CardLogin>
        <div className="space-y-6">
          <div className="relative  rounded-md">
            <FaUser 
              className="text-gray-500 absolute left-6 top-1/2 transform -translate-y-1/2 pointer-events-none" 
            />
            <input 
              type="text" 
              placeholder="Usuário" 
              className="w-[300px] rounded-[30px] pl-14 border border-gray-300 py-3" 
            />
          </div>

          <div className="relative rounded-md">
            <FaLock 
              className="text-gray-500 absolute left-6 top-1/2 transform -translate-y-1/2 pointer-events-none" 
            />
            <input 
              type="password" 
              placeholder="Senha" 
              className="w-[300px] rounded-[30px] pl-14 border border-gray-300 py-3 " 
            />
          </div>
        </div>

        <div className="flex gap-12 items-center mt-4 text-sm text-gray-600">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="custom-checkbox" />
            <span className="text-white select-none">Manter Logado</span>
          </label>


          <a href="/redefinir" className="text-branco hover:underline">
            Esqueceu a senha?
          </a>
        </div>

        <Button>Login</Button>
      </CardLogin>
    </ContainerLogin>
  );
}
