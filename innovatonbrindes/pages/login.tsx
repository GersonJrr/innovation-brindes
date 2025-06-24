import { FaUser, FaLock } from 'react-icons/fa6';
import Button from '../Components/Login/Components/Button';
import CardLogin from '../Components/Login/Components/Card';
import ContainerLogin from '../Components/Login/Components/ContainerLogin';
import Input from '../Components/Login/Components/Input';
import cardStyles from '../Components/Login/style/Card.module.css';
import containerStyles from '../Components/Login/style/Container.module.css';

export default function Login() {
  return (
    <ContainerLogin>
      <h1 className={containerStyles.title}>Bem-vindo a Innovation Brindes</h1>
      <CardLogin>
        <div className={cardStyles.wrapperInput}>
          <div className={cardStyles.inputGroup}>
            <FaUser className={cardStyles.icon} />
            <Input type="text" placeholder="Usuário" />
          </div>
          <div className={cardStyles.inputGroup}>
            <FaLock className={cardStyles.icon} />
            <Input type="password" placeholder="Senha" />
          </div>
        </div>

        <div className={cardStyles.cardManterSenha}>
          <label>
            <input type="checkbox" />
            Manter Logado
          </label>
          <a href="/redefinir">Esqueceu a senha?</a>
        </div>

        <Button>Login</Button>
      </CardLogin>
    </ContainerLogin>
  );
}
