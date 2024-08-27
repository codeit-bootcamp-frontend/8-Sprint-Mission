import BasicLayout from '@components/layout/BasicLayout/BasicLayout';
import SignUpSection from '@components/sign/SignUpSection/SignUpSection';
import { useAuthStore } from '@store/useAuthStore';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const SignUpPage = () => {
  const router = useRouter();
  const { accessToken } = useAuthStore();

  useEffect(() => {
    if (accessToken) router.replace('/');
  }, [accessToken]);

  return (
    <>
      <BasicLayout>
        <SignUpSection />
      </BasicLayout>
    </>
  );
};

export default SignUpPage;
