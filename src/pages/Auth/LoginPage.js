import { Link } from "react-router-dom";

import logoWithTypoImgUrl from "../../assets/images/logo_with_typo.png";
import onlyTypoImgUrl from "../../assets/images/logo_typo.png";

function LoginPage() {
  return (
    <>
      <Link to="/">
        <div>
          <img
            className="header-logo-img"
            src={logoWithTypoImgUrl}
            alt="판다마켓 로고"
          />
          <img
            className="header-typo-img"
            src={onlyTypoImgUrl}
            alt="판다마켓 로고"
          />
        </div>
      </Link>
      <form>
        <h2></h2>
        <input></input>
        <input></input>
        <button></button>
      </form>
      <div>
        <Link to="/signin">회원가입 가기</Link>
      </div>
    </>
  );
}

export default LoginPage;