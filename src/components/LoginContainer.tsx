import styles from "./LoginContainer.module.css"
import LoginForm from "./LoginForm";
import LoginLogo from "./LoginLogo";
import LoginShortcut from "./LoginShortcut";

function LoginContainer() {

    return (
        <div className={styles.loginContainer}>
            <LoginLogo />
            <LoginForm />
            <LoginShortcut />
            <div className={styles.pageTransitionContainer}>
                <span className={styles.pageTransitionText}>판다마켓이 처음이신가요?</span>
                <a className={`${styles.pageTransitionText} ${styles.pageTransitionLink}`} href="/signup">회원가입</a>
            </div>
        </div>
    )
}

export default LoginContainer;