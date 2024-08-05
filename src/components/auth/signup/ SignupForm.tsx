import React from 'react';
import Button from 'components/@shared/Button';
import PasswordInput from '../PasswordInput';
import { StyledAuthForm, StyledAuthLabel, StyledInputSection } from 'styles/auth/formStyles';
import useSignupForm from 'hooks/form/useSignupForm';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
  const navigator = useNavigate();
  const { form, handler, result, message, isFormValid } = useSignupForm();

  const handleSubmitClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigator('/');
  };

  return (
    // 회원가입 정보를 서버로 보낼 form, 비밀번호가 url에 표시되지 않도록 하기위해 method post로 전송
    <StyledAuthForm autoComplete="on" method="post" onSubmit={handleSubmitClick}>
      <StyledInputSection $validType={result.emailValidResult}>
        <StyledAuthLabel htmlFor={'email'}>이메일</StyledAuthLabel>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handler.handleEmailChange}
          placeholder="이메일을 입력해주세요"
        />
        <small>{message.emailValidMessage}</small>
      </StyledInputSection>

      <StyledInputSection $validType={result.nicknameValidResult}>
        <StyledAuthLabel htmlFor={'nickname'}>닉네임</StyledAuthLabel>
        <input
          id="nickname"
          type="nickname"
          name="nickname"
          value={form.nickname}
          onChange={handler.handleNicknameChange}
          placeholder="닉네임을 입력해주세요"
        />
        <small>{message.nicknameValidMessage}</small>
      </StyledInputSection>

      <StyledInputSection $validType={result.passwordValidResult}>
        <StyledAuthLabel htmlFor={'password'}>비밀번호</StyledAuthLabel>
        <PasswordInput
          id="password"
          name="password"
          value={form.password}
          onChange={handler.handlePasswordChange}
          autoComplete="off"
          placeholder="비밀번호를 입력해주세요"
        />
        <small>{message.passwordValidMessage}</small>
      </StyledInputSection>

      <StyledInputSection $validType={result.verifyPasswordValidResult}>
        <StyledAuthLabel htmlFor={'verifyPassword'}>비밀번호 확인</StyledAuthLabel>
        <PasswordInput
          id="verifyPassword"
          name="verifyPassword"
          value={form.verifyPassword}
          onChange={handler.handleVerifyPasswordChange}
          autoComplete="off"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
        />
        <small>{message.verifyPasswordMessage}</small>
      </StyledInputSection>

      <Button disabled={!isFormValid} $category={'large'} height={'5.6rem'} width={'100%'}>
        회원가입
      </Button>
    </StyledAuthForm>
  );
}

export default SignupForm;
