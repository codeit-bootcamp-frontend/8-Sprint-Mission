import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';

import useSignIn from 'lib/hooks/auth/useSignIn';
import localStorageTools from 'lib/localStorage/localStorage';
import usePasswordVisibility from 'lib/hooks/usePasswordVisibility';
import { StorageNameOfUserInfo } from 'core/config/context/AuthContext';

import BtnLarge from 'core/buttons/BtnLarge';

import * as S from '../styles';

const SignInForm = () => {
  const { getInfo } = localStorageTools();
  const navigator = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm({ mode: 'onBlur' });
  const signInMutate = useSignIn({ setError });

  const { ref, icon, handlePasswordVisibility } = usePasswordVisibility();

  const onSubmit = (newValues: FieldValues) => {
    const { email, password } = newValues;
    signInMutate.mutateAsync({
      email,
      password,
    });
  };

  useEffect(() => {
    const userInfo = getInfo(StorageNameOfUserInfo);
    if (userInfo?.accessToken) {
      navigator('/');
    }
  }, []);
  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Container>
        <S.Label htmlFor="email">이메일</S.Label>
        <S.Input
          {...register('email', {
            required: '이메일을 입력해주세요.',
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
              message: '잘못된 형식입니다.',
            },
          })}
          type="email"
          $isValid={isValid}
          placeholder="이메일을 입력해주세요"
        />
        <S.ErrorMessage
          $isValid={errors.email === undefined}
        >{`${errors.email?.message}`}</S.ErrorMessage>
      </S.Container>
      <S.Container>
        <S.Label htmlFor="password">비밀번호</S.Label>
        <S.InputWrapper>
          <S.Input
            {...register('password', {
              required: '비밀번호를 입력해주세요.',
            })}
            type="password"
            $isValid={false}
            placeholder="비밀번호를 입력해주세요"
          />
          <S.Icon src={icon} onClick={handlePasswordVisibility} />
        </S.InputWrapper>
        <S.ErrorMessage
          $isValid={errors.password === undefined}
        >{`${errors.password?.message}`}</S.ErrorMessage>
      </S.Container>
      <BtnLarge
        bgColor={isValid ? 'var(--main-color)' : 'var(--gray-400)'}
        color={'var(--font-button)'}
        disabled={!isValid}
      >
        로그인
      </BtnLarge>
    </S.Form>
  );
};

export default SignInForm;
