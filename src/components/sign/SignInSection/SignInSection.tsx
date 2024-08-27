import styles from './SignInSection.module.scss';

import Image from 'next/image';
import Link from 'next/link';
import SignInForm from '../SignInForm/SignInForm';
import SNSLogin from '../SNSLogin/SNSLogin';
import logo from '@assets/images/logo/bigLogo.png';

const SignInSection = () => {
  return (
    <>
      <div className={styles['signIn']}>
        <div className={styles['signIn__formWrapper']}>
          <Link href={'/'}>
            <Image className={styles['signIn__logo']} src={logo} alt="로고" />
          </Link>
          <SignInForm />
          <SNSLogin />
          <p>
            판다마켓이 처음이신가요? <Link href={'/signup'}>회원가입</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignInSection;
