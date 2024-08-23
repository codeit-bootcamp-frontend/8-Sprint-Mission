import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import cn from '@/lib/utils';
import postSignUp from '@/lib/api/postSignUp';
import Router from 'next/router';
import axios from 'axios';
import Input from './Input';
import Button from '../elements/button/Button';

type Inputs = {
  email: string;
  nickname: string;
  password: string;
  passwordCheck: string;
};

type Detail<T extends keyof Inputs> = {
  [K in T]: {
    message: string;
  };
};

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    setError,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    defaultValues: {
      email: '',
      nickname: '',
      password: '',
      passwordCheck: '',
    },
    mode: 'onBlur',
  });
  const [isVisible, setIsVisible] = useState({
    password: false,
    passwordCheck: false,
  });

  const passwordType = isVisible.password ? 'text' : 'password';
  const passwordCheckType = isVisible.passwordCheck ? 'text' : 'password';

  const onVisible = (name: 'password' | 'passwordCheck') => {
    setIsVisible(p => ({ ...p, [name]: !p[name] }));
  };

  const onTrigger = () => {
    trigger(['password', 'passwordCheck']);
  };

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      await postSignUp(data);
      Router.push('/login');
    } catch (error) {
      if (!axios.isAxiosError(error)) return;
      if (error.response!.status === 400) {
        const details = error.response!.data.details as Detail<keyof Inputs>;
        Object.keys(details).forEach(key => {
          const name = key as keyof Inputs;
          setError(name, {
            type: `already Exist ${name}`,
            message: details[name].message,
          });
        });
      }
    }
  };

  return (
    <form
      className="mx-4 mt-6 flex flex-col gap-4 tablet:mx-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        id="email"
        label="이메일"
        type="email"
        placeholder="이메일을 입력해주세요"
        register={register}
        errors={errors}
        validation={{
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: '잘못된 이메일 형식입니다.',
          },
          required: '이메일을 입력해주세요.',
        }}
      />
      <Input
        id="nickname"
        label="닉네임"
        type="text"
        placeholder="닉네임을 입력해주세요"
        register={register}
        errors={errors}
        validation={{
          required: '닉네임을 입력해주세요.',
        }}
      />
      <Input
        id="password"
        label="비밀번호"
        type={passwordType}
        onVisible={onVisible}
        register={register}
        placeholder="비밀번호를 입력해주세요"
        errors={errors}
        onTrigger={onTrigger}
        validation={{
          minLength: {
            value: 8,
            message: '비밀번호를 8자 이상 입력해주세요.',
          },
          required: '비밀번호를 입력해주세요.',
        }}
      />
      <Input
        id="passwordCheck"
        label="비밀번호 확인"
        type={passwordCheckType}
        onVisible={onVisible}
        register={register}
        placeholder="비밀번호를 다시 한 번 입력해주세요"
        errors={errors}
        onTrigger={onTrigger}
        validation={{
          validate: (val: string) => {
            if (watch('password') !== val) {
              return '비밀번호가 일치하지 않습니다.';
            }
          },
        }}
      />
      <Button
        disabled={!isValid}
        isSubmitButton
        className={cn(
          'justify-center bg-secondary-400',
          isValid && 'bg-primary-100'
        )}
      >
        회원가입
      </Button>
    </form>
  );
}

export default Signup;
