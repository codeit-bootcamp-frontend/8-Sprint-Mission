import { Link } from "react-router-dom";
import logo from "assets/images/logo_pandamarket.png";
import Button from "components/common/UI/Button";

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
      <Button buttonText="로그인" to="/signIn" />
    </header>
  );
}

export default Header;
