import logoImg from "#assets/images/logo.svg";
import logoText from "#assets/images/logo-txt.svg";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [isShowHeader, setIsShowHeader] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes("auth")) {
      setIsShowHeader(false);
    } else {
      setIsShowHeader(true);
    }
  }, [pathname]);
  return (
    <>
      {isShowHeader && (
        <nav className="fixed top-0 h-[70px] w-full">
          <div className="mx-auto flex max-w-[1120px] items-center justify-between px-4 py-2.5">
            <Link to="/" className="flex gap-2.5">
              <img src={logoImg} className="hidden md:block" />
              <img src={logoText} />
            </Link>
            <Link to="/auth/login">
              <button className="btn h-[48px] w-[128px]">로그인</button>
            </Link>
          </div>
        </nav>
      )}
      <Outlet />
    </>
  );
}
