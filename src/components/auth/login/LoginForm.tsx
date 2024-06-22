import PasswordInput from '../PasswordInput';
import React, { useState } from 'react';
import Button from 'components/@shared/Button';
import useNavigateTo from 'hooks/useNavigateTo';
import { PATH_ITEMS } from ' constants/paths';
import useValidForm from 'hooks/useValidForm';
import {
  StyledAuthForm,
  StyledAuthLabel,
  StyledInputSection,
  StyledVaildResultText,
} from 'styles/@shared/auth/formStyles';

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
    validateForm();
  };

  const handleSubmitClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit');
    navigateTo(PATH_ITEMS);
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

      <Button disabled={isFormValid} type={'submit'} $category={'large'} height={'5.6rem'} width={'100%'}>
        로그인
      </Button>
    </StyledAuthForm>
  );
}

export default LoginForm;
