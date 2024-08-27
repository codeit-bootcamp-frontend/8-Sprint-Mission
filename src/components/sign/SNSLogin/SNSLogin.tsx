import styles from './SNSLogin.module.scss';

import logoKakao from '@assets/images/image/logo_kakao_talk.svg';
import logoGoogle from '@assets/images/image/logo_google.png';
import UIIcon from '@core/ui/UIIcon/UIIcon';

type SNSLoginProps = {};

const SNSLogin = ({}: SNSLoginProps) => {
  return (
    <>
      <div className={styles['snsLogin']}>
        <div className={styles['snsLogin__title']}>간편 로그인하기</div>
        <div className={styles['snsLogin__buttonsWrapper']}>
          <UIIcon
            wrapperClassName={styles['snsLogin__snsGoogle']}
            src={logoGoogle}
          />
          <UIIcon
            wrapperClassName={styles['snsLogin__snsKakao']}
            src={logoKakao}
          />
        </div>
      </div>
    </>
  );
};

export default SNSLogin;
