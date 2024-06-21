import styled from 'styled-components';
import { ReactNode } from 'react';

interface SocialLoginProps {
  children: ReactNode;
}

function SocialLogin({ children }: SocialLoginProps) {
  return (
    <_SocialLoginSection>
      <span>간편 로그인하기</span>
      <_SocialLoginButtonsWrapper>{children}</_SocialLoginButtonsWrapper>
    </_SocialLoginSection>
  );
}

export default SocialLogin;

const _SocialLoginSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 7.4rem;
  width: 100%;
  border-radius: 0.8rem;
  background-color: var(--cool-blue);

  padding: 0 2.3rem;

  & span {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;
  }
`;

const _SocialLoginButtonsWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  height: 4.2rem;
`;
