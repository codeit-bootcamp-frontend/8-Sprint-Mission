import { useState } from "react";
import Link from "next/link";

import Image from "next/image";
import logoIcon from "@/assets/images/ic_logo_icon.png";
import logoText from "@/assets/images/ic_logo_text.png";
import passwordHideIcon from "@/assets/images/ic_password_hide.png";
import passwordShowIcon from "@/assets/images/ic_password_show.png";
import googleIcon from "@/assets/images/ic_google.png";
import kakaoIcon from "@/assets/images/ic_kakao.png";

function index() {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const handlePasswordShowButtonClick = () => {
    setIsPasswordShow((prevIsPasswordShow) => !prevIsPasswordShow);
  };

  const [isPasswordCheckShow, setIsPasswordCheckShow] = useState(false);
  const handlePasswordCheckShowButtonClick = () => {
    setIsPasswordCheckShow(
      (prevIsPasswordCheckShow) => !prevIsPasswordCheckShow,
    );
  };

  return (
    <main>
      <header>
        <Link className="flex items-center justify-center gap-6" href="/">
          <Image
            className="logo-img"
            src={logoIcon}
            alt="판다마켓 로고 이미지"
            width={104}
            height={104}
          />
          <Image
            className="logo-img"
            src={logoText}
            alt="판다마켓 로고 이미지"
            width={266}
            height={90}
          />
        </Link>
      </header>

      <div className="signup-container">
        <form action="">
          <div className="form-content">
            <label htmlFor="email">이메일</label>
            <input
              id="input-email"
              type="email"
              name="email"
              placeholder="이메일을 입력해주세요"
            />
            <div className="error-message email"></div>
          </div>

          <div className="form-content">
            <label htmlFor="nickname">닉네임</label>
            <input
              id="input-nickname"
              type="text"
              name="nickname"
              placeholder="닉네임을 입력해주세요"
            />
            <div className="error-message nickname"></div>
          </div>

          <div className="form-content">
            <label htmlFor="password">비밀번호</label>
            <div className="password">
              <input
                id="input-password"
                type="password"
                name="password"
                placeholder="비밀번호를 입력해주세요"
              />
              <button
                className="password-show-btn password"
                type="button"
                value="비밀번호 보이거나 가리기"
                onClick={handlePasswordShowButtonClick}
              >
                <Image
                  className="password-show-icon"
                  src={isPasswordShow ? passwordShowIcon : passwordHideIcon}
                  alt="비밀번호를 보여주는 눈 모양 아이콘"
                  width={24}
                  height={24}
                />
              </button>
            </div>
            <div className="error-message password"></div>
          </div>

          <div className="form-content">
            <label htmlFor="password-check">비밀번호 확인</label>
            <div className="password">
              <input
                id="input-password-check"
                type="password"
                name="password-check"
                placeholder="비밀번호를 다시 한 번 입력해주세요"
              />
              <button
                className="password-show-btn password-check"
                type="button"
                value="비밀번호 보이거나 가리기"
                onClick={handlePasswordCheckShowButtonClick}
              >
                <Image
                  className="password-show-icon"
                  src={
                    isPasswordCheckShow ? passwordShowIcon : passwordHideIcon
                  }
                  alt="비밀번호를 보여주는 눈 모양 아이콘"
                  width={24}
                  height={24}
                />
              </button>
            </div>
            <div className="error-message password-check"></div>
          </div>

          <button className="form-signup-btn" type="button" value="회원가입">
            회원가입
          </button>
        </form>

        <div className="login-easy">
          간편 로그인하기
          <div className="login-easy-sns">
            <Link href="https://www.google.com/">
              <Image
                src={googleIcon}
                alt="구글 아이콘"
                width={42}
                height={42}
              />
            </Link>
            <Link href="https://www.kakaocorp.com/page/">
              <Image
                src={kakaoIcon}
                alt="카카오톡 아이콘"
                width={42}
                height={42}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="login">
        이미 회원이신가요?
        <Link className="login-link" href="/login/">
          로그인
        </Link>
      </div>
    </main>
  );
}

export default index;
