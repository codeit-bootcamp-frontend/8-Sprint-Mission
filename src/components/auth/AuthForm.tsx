import styled from 'styled-components';
import Button from 'components/@shared/Button';
import useNavigateTo from 'hooks/useNavigateTo';
import { ReactNode } from 'react';

interface AuthFormProps {
  children: ReactNode;
  buttonText: string;
}

function AuthForm({ children, buttonText }: AuthFormProps) {
  const { navigateTo } = useNavigateTo();
  return (
    <_AuthForm autoComplete="on" method="post">
      {children}
      <Button type={'large'} height={'5.6rem'} width={'100%'} onClick={() => navigateTo('/')}>
        {buttonText}
      </Button>
    </_AuthForm>
  );
}

export default AuthForm;

const _AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
