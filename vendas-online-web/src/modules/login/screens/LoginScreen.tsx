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
  return (
    <ContainerLoginScreen>
      <BackgoundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <Logo />
          <TitleLogin level={2} type={'secondary'}>
            LOGIN
          </TitleLogin>
          <Input title="USUÁRIO" />
          <Input title="SENHA" />
          <Button margin="64px 0 16px 0" type="primary">
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
