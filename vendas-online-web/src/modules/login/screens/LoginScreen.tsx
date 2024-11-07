import Logo from '../../../../public/SVGLogo';
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
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
