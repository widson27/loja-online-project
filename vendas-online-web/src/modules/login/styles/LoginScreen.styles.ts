import { Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

export const ContainerLoginScreen = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

export const BackgoundImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  width: 100%;
  height: 100vh;
  max-width: 646px;
  right: 0;
  top: 0;
  z-index: 2;
`;

export const LogoImage = styled.img`
  width: 202px;
`;

export const TitleLogin = styled(Title)`
  color: #006397;
`;

export const LimitedContainer = styled.div`
  width: 100%;
  max-width: 498px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
