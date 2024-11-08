import Logo from '../../../../public/SVGLogo';
import Input from '../../../shared/inputs/input/Input';
import {
  BackgoundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
} from '../styles/LoginScreen.styles';

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <BackgoundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <Logo />
          <Input title="Usuário" />
          <Input title="Senha" />
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
