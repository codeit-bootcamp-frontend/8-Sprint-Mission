import styles from './SignUpSection.module.scss';

import logo from '@assets/images/logo/bigLogo.png';
import Link from 'next/link';
import Image from 'next/image';

type SignUpSectionProps = {};

const SignUpSection = ({}: SignUpSectionProps) => {
  return (
    <div className={styles['signUp']}>
      <Link href={'/'}>
        <Image className={styles['signUp__logo']} src={logo} alt="로고" />
      </Link>
    </div>
  );
};

export default SignUpSection;
