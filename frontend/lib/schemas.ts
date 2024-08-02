import { z } from 'zod';

export const formSchema = z.object({
  email: z.string().min(1, '이메일을 입력해주세요').email('잘못 된 이메일 형식입니다.'),
  nickname: z.string().min(1, '닉네임을 입력해주세요'),
  password: z.string().min(10, '비밀번호는 10자리 이상입니다.'),
  confirmPassword: z.string(),
});

export const loginSchema = formSchema.omit({ nickname: true, confirmPassword: true });
export const registerSchema = formSchema.refine(data => data.password === data.confirmPassword, {
  message: '비밀번호가 일치하지 않습니다',
});
