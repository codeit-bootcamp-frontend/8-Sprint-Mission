import AuthInput from '../AuthInput';
import AuthForm from '../AuthForm';
import PasswordInput from '../PasswordInput';
import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <AuthForm buttonText={'로그인'}>
      <AuthInput htmlFor={'login-email'} label={'이메일'} validText={'이메일을 입력해주세요'}>
        <input
          id="login-email"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="이메일을 입력해주세요"
        />
      </AuthInput>

      <AuthInput htmlFor={'login-password'} label={'비밀번호'} validText={'비밀번호를 입력해주세요'}>
        <PasswordInput
          id="login-password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          autoComplete="off"
          placeholder="비밀번호를 입력해주세요"
        />
      </AuthInput>
    </AuthForm>
  );
}

export default LoginForm;
