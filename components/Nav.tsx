import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import logoIcon from "@/assets/images/ic_logo_icon.svg";
import logoText from "@/assets/images/ic_logo_text.svg";
import profileImage from "@/assets/images/img_profile.png";
import { usePathname } from "next/navigation";

function Nav() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const pathname = usePathname();

  return (
    <nav>
      <div className="logo-menu-wrapper">
        <Link className="logo-wrapper" href="/">
          <Image
            className="logo-icon"
            src={logoIcon}
            alt="판다마켓 로고 중 아이콘"
          />
          <Image
            className="logo-text"
            src={logoText}
            alt="판다마켓 로고 중 텍스트"
          />
        </Link>

        <ul className="menu-wrapper">
          <li>
            <Link
              className={`menu ${pathname === "/boards" ? "active" : ""}`}
              href="/boards"
            >
              자유게시판
            </Link>
          </li>
          <li>
            <Link
              className={`menu ${pathname === "/items" ? "active" : ""}`}
              href="/items"
            >
              중고마켓
            </Link>
          </li>
        </ul>
      </div>

      {!isLogin ? (
        <Link className="login-link" href="/login">
          로그인
        </Link>
      ) : (
        <Image src={profileImage} alt="프로필 이미지" width={40} height={40} />
      )}
    </nav>
  );
}

export default Nav;
