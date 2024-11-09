import { useState } from 'react';

import Logo from '../../../../public/SVGLogo';
import Button from '../../../shared/inputs/input/buttons/button/Button';
import Input from '../../../shared/inputs/input/Input';
import {
  BackgoundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  TitleLogin,
} from '../styles/LoginScreen.styles';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    alert(`
      Usuario: ${username},
      Senha: ${password},
    `);
  };

  return (
    <ContainerLoginScreen>
      <BackgoundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <Logo />
          <TitleLogin level={2} type={'secondary'}>
            LOGIN
          </TitleLogin>
          <Input title="USUÁRIO" margin="32px 0 0" onChange={handleUsername} value={username} />
          <Input
            title="SENHA"
            margin="32px 0 0"
            type="password"
            onChange={handlePassword}
            value={password}
          />
          <Button margin="64px 0 16px 0" type="primary" onClick={handleLogin}>
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
