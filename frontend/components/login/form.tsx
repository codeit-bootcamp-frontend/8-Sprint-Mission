import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/lib/schemas';
import { LoginSchema } from '@/lib/definitions';

export default function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginSchema>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (data: LoginSchema) => {
    const { email, password } = data;
    // 로그인 로직 작성
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div>
        <label>이메일</label>
        <input type='email' {...register('email')} />
        {errors?.email && <div>{errors.email.message}</div>}
      </div>
      <div>
        <label>비밀번호</label>
        <input type='password' {...register('password')} />
        {errors?.password && <div>{errors.password.message}</div>}
      </div>
      <button type='submit'>로그인</button>
      <Link href='/register'>회원가입 하러가기</Link>
    </form>
  );
}
