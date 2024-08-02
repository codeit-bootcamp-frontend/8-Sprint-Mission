import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from '@/lib/definitions';
import { registerSchema } from '@/lib/schemas';

export default function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterSchema>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(registerSchema),
  });

  const handleRegister = async (data: RegisterSchema) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <div>
        <label>이메일</label>
        <input type='email' {...register('email')} />
        {errors?.email && <div>{errors.email.message}</div>}
      </div>
      <div>
        <label>닉네임</label>
        <input type='text' {...register('nickname')} />
        {errors?.nickname && <div>{errors.nickname.message}</div>}
      </div>
      <div>
        <label>비밀번호</label>
        <Image src='invisible.svg' alt='' width={24} height={24} />
        <input type='password' {...register('password')} />
        {errors?.password && <div>{errors.password.message}</div>}
      </div>
      <div>
        <label>비밀번호 확인</label>
        <Image src='invisible.svg' alt='' width={24} height={24} />
        <input type='password' {...register('confirmPassword')} />
        {errors?.confirmPassword && <div>{errors.confirmPassword.message}</div>}
      </div>
      <button type='submit'>로그인</button>
      <Link href='/register'>회원가입 하러가기</Link>
    </form>
  );
}
