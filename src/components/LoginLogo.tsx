import { useNavigate } from "react-router-dom";
import loginLogo from "../assets/signup_logo.png";
import styles from "./LoginLogo.module.css";

function LoginLogo() {
    const navigate = useNavigate();
    
    return (
        <img src={loginLogo} className={styles.loginLogo} onClick={() => navigate('/')} alt="홈으로" />
    )
}

export default LoginLogo;