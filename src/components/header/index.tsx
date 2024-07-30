import logoImg from "@assets/images/logo.svg";
import logoText from "@assets/images/logo-txt.svg";

export default function Header() {
  return (
    <header className="fixed top-0 w-full">
      <div className="flex-center mx-auto max-w-[1120px] justify-between px-4 py-2.5">
        <div className="flex gap-2.5">
          <img src={logoImg} className="hidden md:block" />
          <img src={logoText} />
        </div>
        <div>로그인</div>
      </div>
    </header>
  );
}
