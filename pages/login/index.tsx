import BasicLayout from '@components/layout/BasicLayout/BasicLayout';
import SignInSection from '@components/sign/SignInSection/SignInSection';

type LoginPageProps = {};

const LoginPage = ({}: LoginPageProps) => {
  return (
    <>
      <BasicLayout>
        <SignInSection />
      </BasicLayout>
    </>
  );
};

export default LoginPage;
