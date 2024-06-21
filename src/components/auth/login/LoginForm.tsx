import PasswordInput from '../PasswordInput';
import React, { useState } from 'react';
import Button from 'components/@shared/Button';
import styled from 'styled-components';
import useNavigateTo from 'hooks/useNavigateTo';
import { PATH_ITEMS } from ' constants/paths';

function LoginForm() {
  const { navigateTo } = useNavigateTo();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.type) {
      case 'email': {
        setEmail(event.target.value);
        break;
      }
      case 'password': {
        setPassword(event.target.value);
        break;
      }
    }
  };

  const handleSubmitClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit');
    navigateTo(PATH_ITEMS);
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

export const StyledInputSection = styled.section`
  & input {
    width: 100%;
    height: 5.6rem;
    border-radius: 1.2rem;
    background-color: var(--cool-gray-100);
    padding: 0 2.4rem;

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
      outline: 1px solid var(--brand-blue);
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

export const StyledVaildResultText = styled.small`
  display: none;
`;
