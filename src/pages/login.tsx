import Link from "next/link";
import Image from "next/image";
function Login() {
  return (
    <>
      <header>
        <div className="logo">
          <Link href="/">
            <Image src="/image/logo.png" alt="판다마켓 로고" width="396" height="132" />
          </Link>
        </div>
      </header>
      <main>
        <form className="signup" id="loginForm">
          <div className="input-container">
            <div className="input-box">
              <label>이메일</label>
              <input
                type="email"
                placeholder="이메일을 입력해주세요"
                className="input-text"
                id="email"
              />
              <div className="error-message">이메일을 입력해주세요</div>
              <div className="condition-message">잘못된 이메일 형식입니다.</div>
            </div>
            <div className="input-box">
              <label>닉네임</label>
              <input
                type="text"
                placeholder="닉네임을 입력해주세요"
                className="input-text"
                id="name"
              />
              <div className="error-message">닉네임을 입력해주세요</div>
            </div>
            <div className="input-box">
              <label>비밀번호</label>
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                className="input-text"
                id="password"
              />
              <div className="error-message">비밀번호를 입력해주세요</div>
              <div className="condition-message">비밀번호를 8자 이상 입력해주세요.</div>
              <Image
                src="/images/icon/btn_icon/ic_visibilty_off.png"
                alt="visibilty-on-off-icon"
                width={24}
                height={24}
                className="visibilty"
                id="passwordEye"
              />
            </div>
            <div className="input-box">
              <label>비밀번호 확인</label>
              <input
                type="password"
                placeholder="비밀번호를 다시 한 번 입력해주세요"
                className="input-text"
                id="checkPassword"
              />
              <div className="condition-message">비밀번호가 일치하지 않습니다.</div>
              <Image
                src="/images/icon/btn_icon/ic_visibilty_off.png"
                alt="visibilty-on-off-icon"
                width={24}
                height={24}
                className="visibilty"
                id="checkPasswordEye"
              />
            </div>
          </div>
          <button className="login-btn">회원가입</button>
          <div className="easy-login-background">
            <div className="easy-login-container">
              <span className="easy-login-text">간편 로그인하기</span>
              <div className="easy-login-link-box">
                <Link href="https://www.google.com/" className="image-link">
                  <Image
                    src="/image/icon/ic_google.png"
                    alt="google-icon"
                    className="mini-image"
                    width={42}
                    height={42}
                  />
                </Link>
                <Link href="https://www.kakaocorp.com/page" className="image-link">
                  <Image
                    src="/image/icon/ic_kakao.png"
                    alt="kakao-icon"
                    className="mini-image"
                    width={42}
                    height={42}
                  />
                </Link>
              </div>
            </div>
          </div>
        </form>
      </main>
      <footer>
        <div className="sign-up-text">
          <span>이미 회원이신가요?</span> <a href="./login.html">로그인</a>
        </div>
      </footer>
    </>
  );
}

export default Login;
