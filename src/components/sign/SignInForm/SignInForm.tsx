import styles from './SignInForm.module.scss';

import UIButton from '@core/ui/buttons/UIButton/UIButton';
import Input from '@core/ui/inputs/Input/Input';
import UIInput from '@core/ui/inputs/UIInput/UIInput';
import UIInputLabel from '@core/ui/inputs/UIInputLabel/UIInputLabel';
import useLogin from '@lib/hooks/auth/useLogin';
import { SignInUserRequest } from '@type/AuthTypes';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';

const SignInForm = () => {
  const { login, isSuccess } = useLogin();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
    control,
  } = useForm<SignInUserRequest>();

  const onSubmit = (data: SignInUserRequest) => {
    console.log(data);
    login(data);
  };

  const onError = (errors: FieldErrors<SignInUserRequest>) => {
    console.log(errors);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    if (isSuccess) {
      router.replace('/');
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
          label="비밀번호"
          type="password"
          id="password"
          placeholder="비밀번호를 입력해주세요"
          {...register('password', {
            required: {
              value: true,
              message: '비밀번호를 입력해주세요',
            },
          })}
          errorMessage={errors.password?.message}
        />
        <UIButton
          className={styles['form__submitButton']}
          type="floating"
          hasNoShadow={true}
        >
          로그인
        </UIButton>
      </form>
    </>
  );
};

export default SignInForm;
