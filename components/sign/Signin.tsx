import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import cn from '@/lib/utils';
import { useAuth } from '@/contexts/AuthProvider';
import Router from 'next/router';
import axios from 'axios';
import Input from './Input';
import Button from '../elements/button/Button';

type Inputs = {
  email: string;
  password: string;
};

type Detail<T extends keyof Inputs> = {
  [K in T]: {
    message: string;
  };
};

function SignIn() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });
  const { login, getMe } = useAuth();
  const [isVisible, setIsVisible] = useState(false);
  const [runRouting, setRunRouting] = useState(false);

  const inputType = isVisible ? 'text' : 'password';

  const onVisible = () => {
    setIsVisible(p => !p);
  };

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      const token = await login(data);
      await getMe(token);
      setRunRouting(true);
    } catch (error) {
      if (!axios.isAxiosError(error)) return;
      if (error.response!.status === 400) {
        const details = error.response!.data.details as Detail<keyof Inputs>;
        Object.keys(details).forEach(key => {
          const name = key as keyof Inputs;
          setError(name, {
            type: name,
            message: details[name].message,
          });
        });
      }
    }
  };

  useEffect(() => {
    if (runRouting === true) {
      Router.push('/');
      setRunRouting(false);
    }
  }, [runRouting]);

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
        id="password"
        label="비밀번호"
        type={inputType}
        onVisible={onVisible}
        register={register}
        placeholder="비밀번호를 입력해주세요"
        errors={errors}
        validation={{
          minLength: {
            value: 8,
            message: '비밀번호를 8자 이상 입력해주세요.',
          },
          required: '비밀번호를 입력해주세요.',
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
        로그인
      </Button>
    </form>
  );
}

export default SignIn;
