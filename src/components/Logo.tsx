import logoImg from "../assets/logo@3x.png";

function Logo() {
  return (
    <a href="/">
      <img
        className="auth__logo"
        src={logoImg}
        alt="logo"
        width="396"
        height="132"
      />
    </a>
  );
}

export default Logo;
