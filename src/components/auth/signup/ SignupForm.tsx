import Button from 'components/@shared/Button';
import PasswordInput from '../PasswordInput';
import React, { useState } from 'react';
import useNavigateTo from 'hooks/useNavigateTo';
import { StyledAuthForm, StyledAuthLabel, StyledInputSection, StyledVaildResultText } from '../login/LoginForm';

function SignupForm() {
  const { navigateTo } = useNavigateTo();
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.type) {
      case 'email': {
        setEmail(event.target.value);
        break;
      }
      case 'nickname': {
        setNickname(event.target.value);
        break;
      }
      case 'password': {
        setPassword(event.target.value);
        break;
      }
      case 'verify-Password': {
        setVerifyPassword(event.target.value);
        break;
      }
    }
  };

  const handleSubmitClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit');
    navigateTo('/');
  };

  return (
    <StyledAuthForm autoComplete="on" method="post" onSubmit={handleSubmitClick}>
      <StyledInputSection>
        <StyledAuthLabel htmlFor={'email'}>이메일</StyledAuthLabel>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          placeholder="이메일을 입력해주세요"
        />
        <StyledVaildResultText>이메일를 입력해주세요</StyledVaildResultText>
      </StyledInputSection>

      <StyledInputSection>
        <StyledAuthLabel htmlFor={'nickname'}>닉네임</StyledAuthLabel>
        <input
          id="nickname"
          type="nickname"
          name="nickname"
          value={nickname}
          onChange={handleInputChange}
          placeholder="이메일을 입력해주세요"
        />
        <StyledVaildResultText>닉네임을 입력해주세요</StyledVaildResultText>
      </StyledInputSection>

      <StyledInputSection>
        <StyledAuthLabel htmlFor={'password'}>비밀번호</StyledAuthLabel>
        <PasswordInput
          id="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          autoComplete="off"
          placeholder="비밀번호를 입력해주세요"
        />
        <StyledVaildResultText>비밀번호를 입력해주세요</StyledVaildResultText>
      </StyledInputSection>

      <StyledInputSection>
        <StyledAuthLabel htmlFor={'verify-password'}>비밀번호 확인</StyledAuthLabel>
        <PasswordInput
          id="verify-password"
          name="password"
          value={verifyPassword}
          onChange={handleInputChange}
          autoComplete="off"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
        />
        <StyledVaildResultText>비밀번호를 다시 한 번 입력해주세요</StyledVaildResultText>
      </StyledInputSection>

      <Button $category={'large'} height={'5.6rem'} width={'100%'}>
        회원가입
      </Button>
    </StyledAuthForm>
  );
}

export default SignupForm;
