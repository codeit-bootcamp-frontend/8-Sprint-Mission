import Image from 'components/@shared/Image';
import eyeOffImg from 'assets/images/auth/visibility-off.png';
import AuthInput from '../AuthInput';
import AuthForm from '../AuthForm';
import styled from 'styled-components';

function LoginForm() {
  return (
    <AuthForm buttonText={'로그인'}>
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
          <i>
            <Image src={eyeOffImg} alt={'눈 가림 이미지'} height={'100%'} width={'100%'} />
          </i>
        </_PasswordWrapper>
      </AuthInput>
    </AuthForm>
  );
}

export default LoginForm;

const _PasswordWrapper = styled.div`
  position: relative;

  & i {
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
