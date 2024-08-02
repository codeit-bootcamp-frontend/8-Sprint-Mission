import styles from "./LoginContainer.module.css"
import LoginLogo from "./LoginLogo";
import LoginShortcut from "./LoginShortcut";
import SignupForm from "./SignupForm";

function SignupContainer() {

    return (
        <div className={styles.loginContainer}>
            <LoginLogo />
            <SignupForm />
            <LoginShortcut />
            <div className={styles.pageTransitionContainer}>
                <span className={styles.pageTransitionText}>이미 회원이신가요?</span>
                <a className={`${styles.pageTransitionText} ${styles.pageTransitionLink}`} href="/login">로그인</a>
            </div>
        </div>
    )
}

export default SignupContainer;