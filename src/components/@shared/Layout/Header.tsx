import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "assets/images/logo_pandamarket.png";
import mobileLogo from "assets/images/logo_pandamarket_name.png";
import Button from "components/@shared/UI/Button";

function Header() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="font-pretendard text-[18px] fixed flex bg-white border-y-[1px] w-full h-[70px] z-10 justify-between px-[200px] max-xl:px-6 max-md:px-4 max-md:text-base">
      <div className="flex flex-row content-center flex-wrap">
        <Link to="/" className="logo-link">
          <img
            alt="판다마켓 로고"
            src={isMobile ? mobileLogo : logo}
            className={`bg-cover ${
              isMobile ? "object-none mr-2 mx-0" : ""
            } mx-5`}
            width={isMobile ? 100 : 153}
            height={isMobile ? 40 : 51}
          />
        </Link>
        <ul className="flex flex-row content-center font-bold w-[218px] max-md:w-auto max-md:gap-2 max-md:justify-between justify-around text-gray-600 flex-wrap">
          <li>
            <Link to="/boards" className="text-brand">
              자유게시판
            </Link>
          </li>
          <li>
            <Link
              to="/items"
              className="hover:text-brand visited:text-gray-600"
            >
              중고마켓
            </Link>
          </li>
        </ul>
      </div>
      <Button buttonText="로그인" to="/signIn" className="h-[51px] my-auto" />
    </header>
  );
}

export default Header;
