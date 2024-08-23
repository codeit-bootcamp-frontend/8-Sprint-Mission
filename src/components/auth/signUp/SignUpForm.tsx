import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';

import useSignUp from 'lib/hooks/auth/useSignUp';
import localStorageTools from 'lib/localStorage/localStorageTools';
import usePasswordVisibility from 'lib/hooks/usePasswordVisibility';
import { StorageNameOfUserInfo } from 'core/config/context/AuthContext';

import BtnLarge from 'core/buttons/BtnLarge';

import * as S from '../styles';

const SignUpForm = () => {
  const navigator = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    watch,
  } = useForm({ mode: 'onBlur' });
  const {
    isVisible: passwordVisble,
    icon: passwordIcon,
    handlePasswordVisibility: handlePasswordView,
  } = usePasswordVisibility();
  const {
    isVisible: passwordConfirmVisible,
    icon: passwordConfirmIcon,
    handlePasswordVisibility: handlePasswordConfirmView,
  } = usePasswordVisibility();

  const signUpMutate = useSignUp({ setError });

  const onSubmit = (values: FieldValues) => {
    const { email, nickname, password, passwordConfirmation } = values;
    signUpMutate.mutateAsync({
      email,
      nickname,
      password,
      passwordConfirmation,
    });
  };

  useEffect(() => {
    const { getInfo } = localStorageTools();
    const userInfo = getInfo(StorageNameOfUserInfo);
    if (userInfo?.accessToken) {
      navigator('/');
    }
  }, [navigator]);

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
        <S.Label htmlFor="nickname">닉네임</S.Label>
        <S.Input
          {...register('nickname', {
            max: 20,
            required: '닉네임을 입력해주세요.',
            pattern: {
              value: /^[a-zA-Z0-9]*$/i,
              message: '영문, 숫자만 가능합니다.',
            },
          })}
          $isValid={false}
          placeholder="닉네임을 입력해주세요"
        />
        <S.ErrorMessage
          $isValid={errors.nickname === undefined}
        >{`${errors.nickname?.message}`}</S.ErrorMessage>
      </S.Container>
      <S.Container>
        <S.Label htmlFor="password">비밀번호</S.Label>
        <S.InputWrapper>
          <S.Input
            {...register('password', {
              required: '비밀번호를 입력해주세요',
              minLength: {
                value: 8,
                message: '8자 이상 입력해주세요.',
              },
              pattern: {
                value:
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*]).{8,}$/i,
                message:
                  '영문 대/소문자, 숫자, 특수문자(!,@,#,$,%,^,&,*) 필수입니다.',
              },
            })}
            type={passwordVisble ? 'text' : 'password'}
            $isValid={false}
            placeholder="비밀번호를 입력해주세요"
          />
          <S.Icon src={passwordIcon} onClick={handlePasswordView} />
        </S.InputWrapper>
        <S.ErrorMessage
          $isValid={errors.password === undefined}
        >{`${errors.password?.message}`}</S.ErrorMessage>
      </S.Container>
      <S.Container>
        <S.Label htmlFor="passwordConfirmation">비밀번호 확인</S.Label>
        <S.InputWrapper>
          <S.Input
            {...register('passwordConfirmation', {
              required: '확인을 위해 비밀번호를 한 번 더 입력해주세요.',
              validate: (password: string) => {
                if (watch('password') !== password) {
                  return '비밀번호가 일치하지 않습니다.';
                }
              },
            })}
            type={passwordConfirmVisible ? 'text' : 'password'}
            $isValid={false}
            placeholder="비밀번호를 다시 한 번 입력해주세요"
          />
          <S.Icon
            src={passwordConfirmIcon}
            onClick={handlePasswordConfirmView}
          />
        </S.InputWrapper>
        <S.ErrorMessage
          $isValid={errors.passwordConfirmation === undefined}
        >{`${errors.passwordConfirmation?.message}`}</S.ErrorMessage>
      </S.Container>
      <BtnLarge
        bgColor={isValid ? 'var(--main-color)' : 'var(--gray-400)'}
        color={'var(--font-button)'}
        disabled={!isValid}
      >
        회원가입
      </BtnLarge>
    </S.Form>
  );
};

export default SignUpForm;
