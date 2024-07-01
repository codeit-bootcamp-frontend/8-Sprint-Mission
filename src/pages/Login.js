import { Link } from "react-router-dom";

import logoWithTypoImgUrl from "../assets/logo_with_typo.png";
import onlyTypoImgUrl from "../assets/logo_typo.png";

function Login() {
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
      <div></div>
    </>
  );
}

export default Login;
