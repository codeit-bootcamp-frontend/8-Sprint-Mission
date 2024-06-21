import Image from 'components/@shared/Image';
import eyeOffImg from 'assets/images/auth/visibility-off.png';
import AuthInput from '../AuthInput';
import AuthForm from '../AuthForm';
import styled from 'styled-components';

function SignupForm() {
  return (
    <AuthForm buttonText={'회원가입'}>
      <AuthInput htmlFor={'login-email'} label={'이메일'} validText={'이메일을 입력해주세요'}>
        <input id="login-email" type="email" name="email" placeholder="이메일을 입력해주세요" />
      </AuthInput>

      <AuthInput htmlFor={'login-nickname'} label={'닉네임'} validText={'닉네임을 입력해주세요'}>
        <input id="login-nickname" type="text" name="nickname" placeholder="닉네임을 입력해주세요" />
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

      <AuthInput htmlFor={'verify-password'} label={'비밀번호 확인'} validText={'비밀번호를 다시 한 번 입력해주세요'}>
        <_PasswordWrapper>
          <input
            id="verify-password"
            type="password"
            name="verify-password"
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

export default SignupForm;

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
