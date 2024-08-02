import styles from "./LoginShortcut.module.css";
import googleIcon from "../assets/googleIcon.png";
import kakaoIcon from "../assets/kakaoIcon.png";

function LoginShortcut() {

    return (
        <div className={styles.LoginShortcutContainer}>
            <span className={styles.shortcutText}>간편 로그인하기</span>
            <div className={styles.shortcutMedia}>
                <img src={googleIcon} className={styles.shortcutMediaIcon} alt="구글 계정으로 로그인" />
                <img src={kakaoIcon} className={styles.shortcutMediaIcon} alt="카카오 계정으로 로그인" />
            </div>
        </div>
    )
}

export default LoginShortcut;