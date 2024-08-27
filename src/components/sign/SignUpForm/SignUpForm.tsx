import styles from './SignUpForm.module.scss';

import UIButton from '@core/ui/buttons/UIButton/UIButton';
import { FieldErrors, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import Input from '@core/ui/inputs/Input/Input';
import { AddUserRequest } from '@type/AuthTypes';
import { useEffect } from 'react';
import useSignUp from '@lib/hooks/auth/useSignUp';
import { useRouter } from 'next/router';

const SignUpForm = () => {
  const { signUp, isSuccess } = useSignUp();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty, isSubmitting, isSubmitSuccessful },
    control,
  } = useForm<AddUserRequest>();

  const onSubmit = (data: AddUserRequest) => {
    console.log(data);
    signUp(data);
  };

  const onError = (errors: FieldErrors<AddUserRequest>) => {
    console.log(errors);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    if (isSuccess) {
      router.replace('/login');
    }
  }, [isSubmitSuccessful, reset, isSuccess]);

  return (
    <>
      <form
        className={styles['form']}
        onSubmit={handleSubmit(onSubmit, onError)}
        noValidate
      >
        <Input
          label="이메일"
          type="email"
          id="email"
          placeholder="이메일을 입력해주세요"
          {...register('email', {
            required: {
              value: true,
              message: '이메일을 입력해주세요',
            },
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: '이메일 형식이 올바르지 않습니다',
            },
          })}
          errorMessage={errors.email?.message}
        />
        <Input
          label="닉네임"
          type="text"
          id="nickname"
          placeholder="닉네임을 입력해주세요"
          {...register('nickname', {
            required: {
              value: true,
              message: '닉네임을 입력해주세요',
            },
          })}
          errorMessage={errors.nickname?.message}
        />
        <Input
          label="비밀번호"
          type="password"
          id="password"
          placeholder="비밀번호를 입력해주세요"
          {...register('password', {
            required: {
              value: true,
              message: '비밀번호를 입력해주세요',
            },
            minLength: {
              value: 8,
              message: '비밀번호는 최소 8 자 이상이어야 합니다',
            },
          })}
          errorMessage={errors.password?.message}
        />
        <Input
          label="비밀번호 확인"
          type="password"
          id="passwordConfirmation"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
          {...register('passwordConfirmation', {
            required: {
              value: true,
              message: '비밀번호를 확인을 입력해주세요',
            },
          })}
          errorMessage={errors.passwordConfirmation?.message}
        />
        <UIButton
          className={styles['form__submitButton']}
          type="floating"
          hasNoShadow={true}
          isDisabled={!isDirty || !isValid || isSubmitting}
        >
          회원가입
        </UIButton>
      </form>
      {/* <DevTool control={control} /> */}
    </>
  );
};

export default SignUpForm;
