import styles from './SignUpSection.module.scss';

import logo from '@assets/images/logo/bigLogo.png';
import Link from 'next/link';
import Image from 'next/image';
import SignUpForm from '../SignUpForm/SignUpForm';
import SNSLogin from '../SNSLogin/SNSLogin';

type SignUpSectionProps = {};

const SignUpSection = ({}: SignUpSectionProps) => {
  return (
    <div className={styles['signUp']}>
      <div className={styles['signUp__formWrapper']}>
        <Link href={'/'}>
          <Image className={styles['signUp__logo']} src={logo} alt="로고" />
        </Link>
        <SignUpForm />
        <SNSLogin />
        <p>
          이미 회원이신가요? <Link href={'/login'}>로그인</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpSection;
