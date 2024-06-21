import Image from 'components/@shared/Image';
import styled from 'styled-components';
import authLogoImg from 'assets/images/auth/auth-logo.png';
import AuthMain from 'components/auth/AuthMain';
import { ReactNode } from 'react';
import { PATH_SIGNUP } from ' constants/paths';

interface AuthContainerProps {
  children: ReactNode;
}

function AuthContainer({ children }: AuthContainerProps) {
  return (
    <_AuthContainer>
      <_AuthLogo>
        <Image src={authLogoImg} alt={'판다마켓 로고와 타이포'} height={'100%'} width={'100%'} />
      </_AuthLogo>

      <AuthMain memberCheckText={'판다마켓이 처음이신가요?'} linkTo={PATH_SIGNUP} linkText={'회원가입'}>
        {children}
      </AuthMain>
    </_AuthContainer>
  );
}

export default AuthContainer;

const _AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 64rem;
  margin: 6rem auto 0;
`;

const _AuthLogo = styled.div`
  height: 13.2rem;
  width: 39.6rem;
  margin: 6rem auto 4rem;
  cursor: pointer;
`;
