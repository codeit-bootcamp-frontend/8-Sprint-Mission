import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="login-join-wrap">
        <div className="login-join-logo">
          <h1>
            <a href="./">
              <img src="images/logo-big.png" alt="판다마켓 로고" />
            </a>
          </h1>
        </div>
        <div className="input-wrap">
          <form>
            <div className="input-box">
              <label for="user-email">이메일</label>
              <div className="input-position">
                <input
                  id="user-email"
                  className="user-email"
                  type="email"
                  placeholder="이메일을 입력해주세요"
                />
                <span className="fail-txt"></span>
              </div>
            </div>
            <div className="input-box">
              <label for="user-password">비밀번호</label>
              <div className="input-position">
                <input
                  id="user-password"
                  className="user-password"
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                />
                <span className="fail-txt"></span>
                <button type="button" id="password-btn">
                  <img
                    src="images/i-password-off.png"
                    alt="비밀번호 오프 아이콘"
                  />
                </button>
              </div>
            </div>
            <div className="input-box">
              <button type="button" id="login-btn" className="submit-btn">
                로그인
              </button>
            </div>
          </form>
          <div className="easy-login-wrap">
            <div className="easy-login-btn">
              <p>간편 로그인하기</p>
              <ul>
                <li>
                  <a
                    href="https://www.google.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img src="./images/i-google.png" alt="구글 이미지" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.kakaocorp.com/page/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img src="./images/i-kakao.png" alt="카카오톡 이미지" />
                  </a>
                </li>
              </ul>
            </div>
            <p>
              판다마켓이 처음이신가요?<Link to="/Signup">회원가입</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
