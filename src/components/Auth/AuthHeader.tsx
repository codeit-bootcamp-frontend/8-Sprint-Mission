import { Link } from "react-router-dom";
import logoImg from "../../assets/images/register_logo.png";
import styles from "./AuthHeader.module.css";

export default function AuthHeader() {
  return (
    <div className={styles.registerHeader}>
      <div className={styles.registerLogo}>
        <Link to="/">
          <img src={logoImg} alt="판다마켓 로고" />
        </Link>
      </div>
    </div>
  );
}
