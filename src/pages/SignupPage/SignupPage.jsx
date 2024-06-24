import React from "react";
import { Link } from "react-router-dom";
import "./Signup.scss";

function SignupPage() {
  <body>
    <header>
      <a href="../html/index.html">
        <img class="logo" src="../assets/common/logo.svg" />
      </a>
    </header>

    <main>
      <form>
        <div class="form-group">
          <label for="email"> 이메일 </label>
          <input
            type="email"
            id="email"
            name="email"
            class="form-input"
            data-input="이메일"
            placeholder="이메일을 입력해주세요"
            required
          />
        </div>
        <div class="form-group">
          <label for="nickname"> 닉네임 </label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            class="form-input"
            data-input="닉네임"
            placeholder="닉네임을 입력해주세요"
            required
          />
        </div>
        <div class="form-group">
          <label for="password"> 비밀번호 </label>
          <input
            type="password"
            id="password"
            name="password"
            class="form-input"
            data-input="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            required
          />
          <a class="password-inv" href="#"></a>
        </div>
        <div class="form-group">
          <label for="password-check"> 비밀번호 확인 </label>
          <input
            type="password"
            id="password-check"
            name="password-check"
            class="form-input"
            data-input="비밀번호 확인"
            placeholder="비밀번호를 다시 한 번 입력해주세요"
            required
          />
          <a class="password-inv" href="#"></a>
        </div>
        <div class="form-group">
          <button
            class="button btn-large submit-button"
            type="submit"
            href="../html/signin.html"
            disabled
          >
            회원가입
          </button>
        </div>
      </form>

      <div class="social-login-div">
        <span>간편 로그인하기</span>
        <div>
          <a
            class="google-social-login circular-button"
            href="https://www.google.com/"
          ></a>
          <a
            class="kakao-social-login circular-button"
            href="https://www.kakaocorp.com/page/"
          ></a>
        </div>
      </div>

      <div>
        이미 회원이신가요?
        <a class="bottom-link" href="../html/login.html">
          로그인
        </a>
      </div>
    </main>
  </body>;
}

export default SignupPage;
