import { Link } from "react-router-dom";
import styles from "./LoginMenu.module.css";
import { LoginMenuProps } from "./@types/Auth";

export default function LoginMenu({
  loginMsg,
  btnMsg,
  linkPath,
}: LoginMenuProps) {
  return (
    <>
      <div className={styles.loginMenu}>
        <span className={styles.loginSimple}>간편 로그인하기</span>
        <ul className={styles.loginList}>
          <li>
            <Link to="https://www.google.com/" className={styles.googleLogin}>
              <span className="ir_pm">구글 로그인</span>
            </Link>
          </li>
          <li>
            <Link
              to="https://www.kakaocorp.com/page/"
              className={styles.kakaoLogin}
            >
              <span className="ir_pm">카카오 로그인</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.registerBox}>
        <span>
          {loginMsg}
          <Link className={styles.link} to={linkPath}>
            {btnMsg}
          </Link>
        </span>
      </div>
    </>
  );
}
