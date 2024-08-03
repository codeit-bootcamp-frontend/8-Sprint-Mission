import { MouseEvent, useState } from "react";
import styles from "./LoginForm.module.css";
import PasswordInput from "./PasswordInput";
import { SignupFormProps, SignupFormType } from "../DTO/SignupFormType";
import useLoginFormChange from "../hooks/useLoginFormChange";

const INITIAL_VALUES: SignupFormType = {
    email: '',
    nickname: '',
    password: '',
    verifyPassword: '',
}

function SignupForm() {
    const [formValues, setFormValues] = useState<SignupFormType>(INITIAL_VALUES);

    const { errorMessages, handleInputChange } = useLoginFormChange(formValues, setFormValues);

    const isButtonDisabled: boolean = (
        !formValues.email ||
        !formValues.nickname ||
        !formValues.password ||
        (errorMessages.emailError.length > 0) ||
        (errorMessages.passwordError.length > 0) ||
        (errorMessages.verifyPasswordError.length > 0)
    );

    const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => e.preventDefault();
    
    return (
        <form className={styles.loginForm} onChange={handleInputChange} onBlur={handleInputChange}>
            <label className={styles.formLabel}>
                <p className={styles.formText}>이메일</p>
                <input
                    name={SignupFormProps.email}
                    className={`${styles.formInput} ${errorMessages.emailError.length ? styles.errored : ''}`}
                    placeholder="이메일을 입력해주세요"
                />
                <p className={styles.errorMessage}>{errorMessages.emailError}</p>
            </label>
            <label className={styles.formLabel}>
                <p className={styles.formText}>닉네임</p>
                <input
                    name={SignupFormProps.nickname}
                    className={`${styles.formInput} ${errorMessages.nicknameError.length ? styles.errored : ''}`}
                    placeholder="닉네임을 입력해주세요"
                />
                <p className={styles.errorMessage}>{errorMessages.nicknameError}</p>
            </label>
            <label className={styles.formLabel}>
                <p className={styles.formText}>비밀번호</p>
                <PasswordInput
                    name={SignupFormProps.password}
                    value={formValues.password}
                    className={`${styles.formInput} ${errorMessages.passwordError.length ? styles.errored : ''}`}
                    placeholder="비밀번호를 입력해주세요"
                />
                <p className={styles.errorMessage}>{errorMessages.passwordError}</p>
            </label>
            <label className={styles.formLabel}>
                <p className={styles.formText}>비밀번호 확인</p>
                <PasswordInput
                    name={SignupFormProps.verifyPassword}
                    value={formValues.verifyPassword}
                    className={`${styles.formInput} ${errorMessages.verifyPasswordError.length ? styles.errored : ''}`}
                    placeholder="비밀번호를 다시 한 번 입력해주세요"
                />
                <p className={styles.errorMessage}>{errorMessages.verifyPasswordError}</p>
            </label>
            <button className={styles.formButton} disabled={isButtonDisabled} onClick={handleButtonClick}>회원가입</button>
        </form>
    )
}

export default SignupForm;