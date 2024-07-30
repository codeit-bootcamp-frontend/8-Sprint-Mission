import logoImg from "@assets/images/logo.svg";
import logoText from "@assets/images/logo-txt.svg";
// import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 w-full">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-4 py-2.5">
        <div className="flex gap-2.5">
          <img src={logoImg} className="hidden md:block" />
          <img src={logoText} />
        </div>
        {/* <Link to="/ai">로그인</Link> */}
      </div>
    </header>
  );
}
