import PasswordInput from '../PasswordInput';
import Button from 'components/@shared/Button';
import useNavigateTo from 'hooks/useNavigateTo';
import { PATH_ITEMS } from ' constants/paths/paths';
import { StyledAuthForm, StyledAuthLabel, StyledInputSection } from 'styles/auth/formStyles';
import React from 'react';
import useLoginForm from 'hooks/useLoginForm';

function LoginForm() {
  const { navigateTo } = useNavigateTo();
  const { form, handler, result, message, isFormValid } = useLoginForm();

  const handleSubmitClick = (event: React.FormEvent<HTMLFormElement>) => {
    // 입력 양식을 통과하지 못하면 button이 disabled 상태라 누를 수 없음
    event.preventDefault();
    navigateTo(PATH_ITEMS);
  };

  return (
    // 로그인 정보를 서버로 보낼 form, 비밀번호가 url에 표시되지 않도록 하기위해 method post로 전송
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

      <Button disabled={!isFormValid} $category={'large'} height={'5.6rem'} width={'100%'}>
        로그인
      </Button>
    </StyledAuthForm>
  );
}

export default LoginForm;
