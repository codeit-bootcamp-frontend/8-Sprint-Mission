import Button from 'components/@shared/Button';
import PasswordInput from '../PasswordInput';
import React, { useEffect, useState } from 'react';
import useNavigateTo from 'hooks/useNavigateTo';
import useValidForm, { IAuthForm } from 'hooks/useValidForm';
import { StyledAuthForm, StyledAuthLabel, StyledInputSection } from 'styles/@shared/auth/formStyles';

function SignupForm() {
  const { navigateTo } = useNavigateTo();
  const [form, setForm] = useState<IAuthForm>({
    email: '',
    nickname: '',
    password: '',
    verifyPassword: '',
  });
  const { validMessages, validationResult, isFormValid, validateForm } = useValidForm(form);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
    validateForm();
  };

  const handleSubmitClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
    navigateTo('/');
  };

  useEffect(() => {
    validateForm();
  }, [validationResult.email, validationResult.password, validationResult.nickname, validationResult.verifyPassword]);
  console.log('isFormValid:', isFormValid);
  return (
    // 회원가입 정보를 서버로 보낼 form, 비밀번호가 url에 표시되지 않도록 하기위해 method post로 전송
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
        <small>{validMessages.email}</small>
      </StyledInputSection>

      <StyledInputSection $isValid={validationResult.nickname}>
        <StyledAuthLabel htmlFor={'nickname'}>닉네임</StyledAuthLabel>
        <input
          id="nickname"
          type="nickname"
          name="nickname"
          value={form.nickname}
          onChange={handleInputChange}
          placeholder="닉네임을 입력해주세요"
        />
        <small>{validMessages.nickname}</small>
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
        <small>{validMessages.password}</small>
      </StyledInputSection>

      <StyledInputSection $isValid={validationResult.verifyPassword}>
        <StyledAuthLabel htmlFor={'verifyPassword'}>비밀번호 확인</StyledAuthLabel>
        <PasswordInput
          id="verifyPassword"
          name="verifyPassword"
          value={form.verifyPassword}
          onChange={handleInputChange}
          autoComplete="off"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
        />
        <small>{validMessages.verifyPassword}</small>
      </StyledInputSection>

      <Button disabled={!isFormValid} $category={'large'} height={'5.6rem'} width={'100%'}>
        회원가입
      </Button>
    </StyledAuthForm>
  );
}

export default SignupForm;
