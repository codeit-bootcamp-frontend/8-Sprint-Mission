import Button from 'components/@shared/Button';
import PasswordInput from '../PasswordInput';
import React, { useState } from 'react';
import useNavigateTo from 'hooks/useNavigateTo';
import { StyledAuthForm, StyledAuthLabel, StyledInputSection, StyledVaildResultText } from '../login/LoginForm';
import useValidForm from 'hooks/useValidForm';

function SignupForm() {
  const { navigateTo } = useNavigateTo();
  const [form, setForm] = useState({
    email: '',
    nickname: '',
    password: '',
    verifyPassword: '',
  });
  const { isValid, validText } = useValidForm(form);

  console.log(isValid);
  console.log(validText);

  const handleSubmitClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit');
    navigateTo('/');
  };

  return (
    <StyledAuthForm autoComplete="on" method="post" onSubmit={handleSubmitClick}>
      <StyledInputSection $isValid={isValid.email}>
        <StyledAuthLabel htmlFor={'email'}>이메일</StyledAuthLabel>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          placeholder="이메일을 입력해주세요"
        />
        <StyledVaildResultText $isValid={isValid.email}>이메일를 입력해주세요</StyledVaildResultText>
      </StyledInputSection>

      <StyledInputSection $isValid={isValid.nickname}>
        <StyledAuthLabel htmlFor={'nickname'}>닉네임</StyledAuthLabel>
        <input
          id="nickname"
          type="nickname"
          name="nickname"
          value={form.nickname}
          onChange={e => setForm({ ...form, nickname: e.target.value })}
          placeholder="이메일을 입력해주세요"
        />
        <StyledVaildResultText $isValid={isValid.nickname}>닉네임을 입력해주세요</StyledVaildResultText>
      </StyledInputSection>

      <StyledInputSection $isValid={isValid.password}>
        <StyledAuthLabel htmlFor={'password'}>비밀번호</StyledAuthLabel>
        <PasswordInput
          id="password"
          name="password"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
          autoComplete="off"
          placeholder="비밀번호를 입력해주세요"
        />
        <StyledVaildResultText $isValid={isValid.password}>{validText.password}</StyledVaildResultText>
      </StyledInputSection>

      <StyledInputSection $isValid={isValid.verifyPassword}>
        <StyledAuthLabel htmlFor={'verify-password'}>비밀번호 확인</StyledAuthLabel>
        <PasswordInput
          id="verify-password"
          name="password"
          value={form.verifyPassword}
          onChange={e => setForm({ ...form, verifyPassword: e.target.value })}
          autoComplete="off"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
        />
        <StyledVaildResultText $isValid={isValid.verifyPassword}>{validText.verifyPassword}</StyledVaildResultText>
      </StyledInputSection>

      <Button $category={'large'} height={'5.6rem'} width={'100%'}>
        회원가입
      </Button>
    </StyledAuthForm>
  );
}

export default SignupForm;
