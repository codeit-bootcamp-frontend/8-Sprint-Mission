import AuthInput from '../AuthInput';
import AuthForm from '../AuthForm';
import PasswordInput from '../PasswordInput';

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
        <PasswordInput id="login-password" name="password" autoComplete="off" placeholder="비밀번호를 입력해주세요" />
      </AuthInput>

      <AuthInput htmlFor={'verify-password'} label={'비밀번호 확인'} validText={'비밀번호를 다시 한 번 입력해주세요'}>
        <PasswordInput
          id="verify-password"
          name="verify-password"
          autoComplete="off"
          placeholder="비밀번호를 입력해주세요"
        />
      </AuthInput>
    </AuthForm>
  );
}

export default SignupForm;
