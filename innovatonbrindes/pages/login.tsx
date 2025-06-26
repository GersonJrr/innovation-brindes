import { FaUser, FaLock } from 'react-icons/fa6';
import Button from '../Components/Login/Button';
import CardLogin from '../Components/Login/Card';
import ContainerLogin from '../Components/Login/ContainerLogin';
import Input from '../Components/Login/Input';

export default function Login() {
  return (
    <ContainerLogin>
      <h1 className="text-green-600 text-3xl text-center mb-8 sm:text-2xl">
        Bem-vindo a Innovation Brindes
      </h1>

      <CardLogin>
        <div className="space-y-6">
          <div className="flex items-center border rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-green-400">
            <FaUser className="text-green-600 mr-3" />
            <Input type="text" placeholder="Usuário" className="flex-grow outline-none" />
          </div>

          <div className="flex items-center border rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-green-400">
            <FaLock className="text-green-600 mr-3" />
            <Input type="password" placeholder="Senha" className="flex-grow outline-none" />
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-green-600" />
            <span>Manter Logado</span>
          </label>

          <a href="/redefinir" className="text-green-600 hover:underline">
            Esqueceu a senha?
          </a>
        </div>

        <Button className="w-full mt-6">Login</Button>
      </CardLogin>
    </ContainerLogin>
  );
}
