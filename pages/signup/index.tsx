import BasicLayout from '@components/layout/BasicLayout/BasicLayout';
import SignUpSection from '@components/sign/SignUpSection/SignUpSection';

type SignUpPageProps = {};

const SignUpPage = ({}: SignUpPageProps) => {
  return (
    <>
      <BasicLayout>
        <SignUpSection />
      </BasicLayout>
    </>
  );
};

export default SignUpPage;
