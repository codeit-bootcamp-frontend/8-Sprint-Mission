import styles from './SignInForm.module.scss';

import UIButton from '@core/ui/buttons/UIButton/UIButton';
import UIInput from '@core/ui/inputs/UIInput/UIInput';
import UIInputLabel from '@core/ui/inputs/UIInputLabel/UIInputLabel';

const SignInForm = () => {
  return (
    <>
      <form className={styles['form']}>
        <div className={styles['form__item']}>
          <UIInputLabel text="이메일" />
          <UIInput inputType="email" placeholder="이메일을 입력해주세요" />
        </div>
        <div className={styles['form__item']}>
          <UIInputLabel text="비밀번호" />
          <UIInput inputType="password" placeholder="비밀번호를 입력해주세요" />
        </div>
        <UIButton
          className={styles['form__submitButton']}
          type="floating"
          hasNoShadow={true}
        >
          로그인
        </UIButton>
      </form>
    </>
  );
};

export default SignInForm;
