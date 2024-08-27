import MainContainer from '@/components/container/MainContainer';
import SignIn from '@/components/sign/Signin';
import { useAuth } from '@/contexts/AuthProvider';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function LoginPage() {
  const { token } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (token) {
      router.push('/');
    } else {
      setIsLoading(false);
    }
  }, [token, router]);

  if (isLoading) return null;

  return (
    <MainContainer className="flex max-w-[640px] flex-col">
      <div className="relative h-[66px] w-[198px] self-center tablet:h-[132px] tablet:w-[396px]">
        <Image fill src="/logo/logo_not_mobile.png" alt="logo" />
      </div>
      <SignIn />
      <div className="mx-4 mt-6 flex items-center justify-between rounded-lg bg-[#E6F2FF] px-6 py-4 tablet:mx-6">
        <span>간편 로그인하기</span>
        <div className="flex gap-4">
          <button
            type="button"
            className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white"
          >
            <Image
              width={22}
              height={22}
              src="/logo/google.png"
              alt="google login"
            />
          </button>
          <button
            type="button"
            className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#F5E14B]"
          >
            <Image
              width={20}
              height={20}
              src="/logo/kakao.png"
              alt="kakao login"
            />
          </button>
        </div>
      </div>
      <span className="mt-6 self-center">
        판다마켓이 처음이신가요?{' '}
        <Link
          className="text-[#3182F6] underline decoration-[#3182F6]"
          href="/signup"
        >
          회원가입
        </Link>
      </span>
    </MainContainer>
  );
}

export default LoginPage;
