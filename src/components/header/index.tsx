import logoImg from "#assets/images/logo.svg";
import logoText from "#assets/images/logo-txt.svg";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const showHeader: boolean = !pathname.includes("auth");
  const showLoginBtn: boolean = !pathname.includes("items");
  return (
    <>
      {showHeader && (
        <nav className={`fixed top-0 w-full border-b bg-white drop-shadow-sm`}>
          <div className="mx-auto flex h-[70px] max-w-[1120px] items-center justify-between gap-2 px-4 py-2.5 md:gap-5 lg:gap-8">
            <Link to="/" className="flex gap-2.5">
              <img src={logoImg} className="hidden md:block" />
              <img src={logoText} />
            </Link>
            {pathname.includes("items") && (
              <div className="grow font-bold">
                <NavLink to="forum" className="px-1 md:px-4">
                  자유게시판
                </NavLink>
                <NavLink
                  to="items"
                  className={({ isActive }) =>
                    isActive
                      ? `px-1 text-my-blue md:px-4`
                      : `px-1 text-gray-600 md:px-4`
                  }
                >
                  중고마켓
                </NavLink>
              </div>
            )}
            {showLoginBtn && (
              <Link to="/auth/login">
                <button className="btn h-[48px] w-[128px]">로그인</button>
              </Link>
            )}
          </div>
        </nav>
      )}
      <Outlet />
    </>
  );
}
