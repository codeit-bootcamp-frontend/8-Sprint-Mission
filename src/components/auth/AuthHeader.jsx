import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import logoTxt from "../../assets/images/logo-txt.svg";

function AuthHeader() {
  return (
    <header className="auth-header-container">
      <Link to="/" className="logo">
        <img src={logoImg} />
        <img src={logoTxt} />
      </Link>
    </header>
  );
}

export default AuthHeader;
