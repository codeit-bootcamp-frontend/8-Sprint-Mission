import AuthInput from '../AuthInput';
import AuthForm from '../AuthForm';
import PasswordInput from '../PasswordInput';
import React, { useState } from 'react';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleVerifyPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVerifyPassword(event.target.value);
  };

  return (
    <AuthForm buttonText={'회원가입'}>
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

      <AuthInput htmlFor={'login-nickname'} label={'닉네임'} validText={'닉네임을 입력해주세요'}>
        <input
          id="login-nickname"
          type="text"
          name="nickname"
          value={nickname}
          onChange={handleNicknameChange}
          placeholder="닉네임을 입력해주세요"
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

      <AuthInput htmlFor={'verify-password'} label={'비밀번호 확인'} validText={'비밀번호를 다시 한 번 입력해주세요'}>
        <PasswordInput
          id="verify-password"
          name="verify-password"
          value={verifyPassword}
          onChange={handleVerifyPasswordChange}
          autoComplete="off"
          placeholder="비밀번호를 입력해주세요"
        />
      </AuthInput>
    </AuthForm>
  );
}

export default SignupForm;
