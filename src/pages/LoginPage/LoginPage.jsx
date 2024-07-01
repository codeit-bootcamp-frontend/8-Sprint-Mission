import React from "react";
import { Link } from "react-router-dom";
import "@pages/LoginPage/LoginPage.scss";

import loginLogo from "@assets/common/logo.svg";

function LoginPage() {
  <body>
    <header>
      <Link to="/">
        <img className="logo" src={loginLogo} alt="LOGO" />
      </Link>
    </header>

    <main>
      <form>
        <div className="form-group">
          <label for="email"> 이메일 </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            data-input="이메일"
            placeholder="이메일을 입력해주세요"
            required
          />
        </div>
        <div className="form-group">
          <label for="password"> 비밀번호 </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            data-input="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            required
          />
          <a className="password-inv"></a>
        </div>
        <button
          className="button btn-large submit-button"
          type="submit"
          href="/items"
          disabled
        >
          로그인
        </button>
      </form>

      <div className="social-login-div">
        <span>간편 로그인하기</span>
        <div>
          <a
            className="google-social-login circular-button"
            href="https://www.google.com/"
          ></a>
          <a
            className="kakao-social-login circular-button"
            href="https://www.kakaocorp.com/page/"
          ></a>
        </div>
      </div>

      <div>
        판다마켓이 처음이신가요?
        <a className="bottom-link" href="../html/signup.html">
          회원가입
        </a>
      </div>
    </main>
    <script src="../js/auth.js"></script>
  </body>;
}

export default LoginPage;
