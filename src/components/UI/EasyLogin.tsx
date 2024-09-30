import { Link } from "react-router-dom";
import styles from "./EasyLogin.module.css";
import Google from "../../assets/google.svg";
import Kakaotalk from "../../assets/kakaotalk.svg";

export default function EasyLogin() {
  return (
    <div className={styles.easyLogin}>
      <p className={styles.text}>간편 로그인하기</p>
      <div className={styles.snsIcon}>
        <Link to="">
          <img src={Google} alt="구글 아이콘" />
        </Link>
        <Link to="">
          <img src={Kakaotalk} alt="카톡 아이콘" />
        </Link>
      </div>
    </div>
  );
}
