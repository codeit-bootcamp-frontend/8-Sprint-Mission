import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo_pandamarket.png";

function Header() {
  return (
    <header className="font-pretendard text-[18px] fixed flex bg-white border-y-[1px] w-full h-[70px] z-10 justify-between px-[200px] max-xl:px-6 max-md:px-4">
      <div className="flex flex-row content-center flex-wrap">
        <Link to="/" className="logo-link">
          <img src={logo} className="bg-cover w-[153px] h-[51px] mx-5" />
        </Link>
        <ul className="flex flex-row content-center font-bold min-w-[218px] justify-around text-gray-600 flex-wrap">
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
      <Link
        to="/signIn"
        className="flex bg-brand content-center text-white font-semibold my-2 justify-center w-[128px] rounded-lg flex-wrap"
      >
        로그인
      </Link>
    </header>
  );
}

export default Header;
