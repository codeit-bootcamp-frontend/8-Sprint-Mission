import PasswordInput from '../PasswordInput';
import React, { useState } from 'react';
import Button from 'components/@shared/Button';
import styled from 'styled-components';
import useNavigateTo from 'hooks/useNavigateTo';
import { PATH_ITEMS } from ' constants/paths';
import useValidForm, { validType } from 'hooks/useValidForm';

function LoginForm() {
  const { navigateTo } = useNavigateTo();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const { isValid, validText } = useValidForm(form);

  const handleSubmitClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit');
    navigateTo(PATH_ITEMS);
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
        <StyledVaildResultText $isValid={isValid.email}>{validText.email}</StyledVaildResultText>
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

      <Button type={'submit'} $category={'large'} height={'5.6rem'} width={'100%'}>
        로그인
      </Button>
    </StyledAuthForm>
  );
}

export default LoginForm;

export const StyledAuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const StyledInputSection = styled.section<{ $isValid: validType | undefined }>`
  & input {
    width: 100%;
    height: 5.6rem;
    border-radius: 1.2rem;
    background-color: var(--cool-gray-100);
    padding: 0 2.4rem;
    outline: ${({ $isValid }) =>
      $isValid === 'default'
        ? 'none'
        : $isValid === 'valid'
          ? '1px solid var(--brand-blue)'
          : '1px solid var(--error-red)'};

    &::placeholder {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.4rem;
      color: var(--cool-gray-400);
    }

    &:focus {
      /* 기존에 borderd없이 focus 상태에만 border를 사용하면
      없던 border가 생기면서 안쪽으로 덜컹거리게 되는 것이 보기에 좋지 않기에
      outline을 사용하였음 */
      outline: ${({ $isValid }) =>
        $isValid === 'default'
          ? 'none'
          : $isValid === 'valid'
            ? '1px solid var(--brand-blue)'
            : '1px solid var(--error-red)'};
    }
  }
`;

export const StyledAuthLabel = styled.label`
  display: inline-block;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.148rem;
  margin-bottom: 1.6rem;
`;

export const StyledVaildResultText = styled.small<{ $isValid: validType | undefined }>`
  display: ${({ $isValid }) => ($isValid === 'unvalid' ? 'block' : 'none')};
  color: var(--error-red);
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.79rem;
  padding-left: 1.6rem;
  padding-top: 0.8rem;
`;
