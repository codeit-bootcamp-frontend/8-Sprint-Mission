import Image from 'components/@shared/Image';
import styled from 'styled-components';
import eyeOffImg from 'assets/images/auth/visibility-off.png';
import AuthInput from './AuthInput';
import Button from 'components/@shared/Button';
import useNavigateTo from 'hooks/useNavigateTo';

function LoginForm() {
  const { navigateTo } = useNavigateTo();

  return (
    <_AuthForm autoComplete="on" method="post">
      <AuthInput htmlFor={'login-email'} label={'이메일'} validText={'이메일을 입력해주세요'}>
        <input id="login-email" type="email" name="email" placeholder="이메일을 입력해주세요" />
      </AuthInput>

      <AuthInput htmlFor={'login-password'} label={'비밀번호'} validText={'비밀번호를 입력해주세요'}>
        <_PasswordWrapper>
          <input
            id="login-password"
            type="password"
            name="password"
            autoComplete="off"
            placeholder="비밀번호를 입력해주세요"
          />
          <i className="password-visibility-icon">
            <Image src={eyeOffImg} alt={'눈 가림 이미지'} height={'100%'} width={'100%'} />
          </i>
        </_PasswordWrapper>
      </AuthInput>

      <Button type={'large'} height={'5.6rem'} width={'100%'} onClick={() => navigateTo('/')}>
        로그인
      </Button>
    </_AuthForm>
  );
}

export default LoginForm;

const _AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const _PasswordWrapper = styled.div`
  position: relative;

  & .password-visibility-icon {
    position: absolute;
    right: 1.6rem;
    top: 0;
    bottom: 0;

    margin: auto 0;
    height: 2.4rem;
    width: 2.4rem;

    cursor: pointer;
  }
`;
