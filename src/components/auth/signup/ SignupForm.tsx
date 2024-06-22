import Button from 'components/@shared/Button';
import PasswordInput from '../PasswordInput';
import React, { useState } from 'react';
import useNavigateTo from 'hooks/useNavigateTo';
import { StyledAuthForm, StyledAuthLabel, StyledInputSection, StyledVaildResultText } from '../login/LoginForm';
import useValidForm, { IValidForm } from 'hooks/useValidForm';

function SignupForm() {
  const { navigateTo } = useNavigateTo();
  const [form, setForm] = useState<IValidForm>({
    email: '',
    nickname: '',
    password: '',
    verifyPassword: '',
  });
  const { validMessages, validationResult } = useValidForm(form);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmitClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
    navigateTo('/');
  };

  return (
    <StyledAuthForm autoComplete="on" method="post" onSubmit={handleSubmitClick}>
      <StyledInputSection $isValid={validationResult.email}>
        <StyledAuthLabel htmlFor={'email'}>이메일</StyledAuthLabel>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
          placeholder="이메일을 입력해주세요"
        />
        <StyledVaildResultText $isValid={validationResult.email}>{validMessages.email}</StyledVaildResultText>
      </StyledInputSection>

      <StyledInputSection $isValid={validationResult.nickname}>
        <StyledAuthLabel htmlFor={'nickname'}>닉네임</StyledAuthLabel>
        <input
          id="nickname"
          type="nickname"
          name="nickname"
          value={form.nickname}
          onChange={handleInputChange}
          placeholder="이메일을 입력해주세요"
        />
        <StyledVaildResultText $isValid={validationResult.nickname}>{validMessages.nickname}</StyledVaildResultText>
      </StyledInputSection>

      <StyledInputSection $isValid={validationResult.password}>
        <StyledAuthLabel htmlFor={'password'}>비밀번호</StyledAuthLabel>
        <PasswordInput
          id="password"
          name="password"
          value={form.password}
          onChange={handleInputChange}
          autoComplete="off"
          placeholder="비밀번호를 입력해주세요"
        />
        <StyledVaildResultText $isValid={validationResult.password}>{validMessages.password}</StyledVaildResultText>
      </StyledInputSection>

      <StyledInputSection $isValid={validationResult.verifyPassword}>
        <StyledAuthLabel htmlFor={'verify-password'}>비밀번호 확인</StyledAuthLabel>
        <PasswordInput
          id="verify-password"
          name="password"
          value={form.verifyPassword}
          onChange={handleInputChange}
          autoComplete="off"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
        />
        <StyledVaildResultText $isValid={validationResult.verifyPassword}>
          {validMessages.verifyPassword}
        </StyledVaildResultText>
      </StyledInputSection>

      <Button $category={'large'} height={'5.6rem'} width={'100%'}>
        회원가입
      </Button>
    </StyledAuthForm>
  );
}

export default SignupForm;
