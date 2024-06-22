import PasswordInput from '../PasswordInput';
import React, { useEffect, useState } from 'react';
import Button from 'components/@shared/Button';
import useNavigateTo from 'hooks/useNavigateTo';
import { PATH_ITEMS } from ' constants/paths';
import useValidForm from 'hooks/useValidForm';
import { StyledAuthForm, StyledAuthLabel, StyledInputSection } from 'styles/@shared/auth/formStyles';

function LoginForm() {
  const { navigateTo } = useNavigateTo();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const { validMessages, validationResult, isFormValid, validateForm } = useValidForm(form);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmitClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
    navigateTo(PATH_ITEMS);
  };

  useEffect(() => {
    validateForm();
  }, [validationResult.email, validationResult.password]);

  return (
    // 로그인 정보를 서버로 보낼 form, 비밀번호가 url에 표시되지 않도록 하기위해 method post로 전송
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

      <Button disabled={!isFormValid} $category={'large'} height={'5.6rem'} width={'100%'}>
        로그인
      </Button>
    </StyledAuthForm>
  );
}

export default LoginForm;
