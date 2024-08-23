import styles from './SignUpForm.module.scss';

import UIInputLabel from '@core/ui/inputs/UIInputLabel/UIInputLabel';
import UIInput from '@core/ui/inputs/UIInput/UIInput';
import UIButton from '@core/ui/buttons/UIButton/UIButton';

type SignUpFormProps = {};

const SignUpForm = ({}: SignUpFormProps) => {
  return (
    <>
      <form className={styles['form']}>
        <div className={styles['form__item']}>
          <UIInputLabel text="이메일" />
          <UIInput inputType="email" placeholder="이메일을 입력해주세요" />
        </div>
        <div className={styles['form__item']}>
          <UIInputLabel text="닉네임" />
          <UIInput inputType="text" placeholder="닉네임을 입력해주세요" />
        </div>
        <div className={styles['form__item']}>
          <UIInputLabel text="비밀번호" />
          <UIInput inputType="password" placeholder="비밀번호를 입력해주세요" />
        </div>
        <div className={styles['form__item']}>
          <UIInputLabel text="비밀번호 확인" />
          <UIInput
            inputType="password"
            placeholder="비밀번호를 다시 한 번 입력해주세요"
          />
        </div>
        <UIButton
          className={styles['form__submitButton']}
          type="floating"
          isNoShadow={true}
        >
          회원가입
        </UIButton>
      </form>
    </>
  );
};

export default SignUpForm;
