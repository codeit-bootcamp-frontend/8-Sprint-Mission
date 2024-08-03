import './sign.css';
import './signupScript';

function Signup() {
  return (
    <>
      <div className="container-sign">
        <div className="wrapper-btn-logo">
          <a href="/">
            <img
              className="btn-home-logo"
              src="/images/logo/logo.svg"
              alt="판다마켓 로고"
            />
          </a>
        </div>
        <form method="post">
          <div className="input-item">
            <label htmlFor="email">이메일</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="이메일을 입력해 주세요"
            />
            <span id="message-error-email" className="message-error">
              이메일을 입력해d주세요.
            </span>
          </div>
          <div className="input-item">
            <label htmlFor="nickname">닉네임</label>
            <input
              id="nickname"
              name="nickname"
              type="text"
              placeholder="닉네임을 입력해 주세요"
            />
            <span id="message-error-nickname" className="message-error">
              닉네임을 입력해d주세요.
            </span>
          </div>
          <div className="input-item">
            <label htmlFor="password">비밀번호</label>
            <div className="wrapper-input">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="비밀번호를 입력해 주세요"
              />
              <button
                id="btn-password-visible"
                className="btn-password-visible"
              >
                <img
                  className="img-password-visible"
                  src="/images/icons/eye-invisible.svg"
                  alt="비밀번호 숨김"
                />
              </button>
            </div>
            <span id="message-error-password" className="message-error">
              비밀번호를 입력해주세요.
            </span>
          </div>
          <div className="input-item">
            <label htmlFor="password-confirmation">비밀번호 확인</label>
            <div className="wrapper-input">
              <input
                id="password-confirmation"
                name="password-confirmation"
                type="password"
                placeholder="비밀번호를 다시 한 번 입력해 주세요"
              />
              <button
                id="btn-password-confirmation-visible"
                className="btn-password-visible"
              >
                <img
                  className="img-password-visible"
                  src="/images/icons/eye-invisible.svg"
                  alt="비밀번호 숨김"
                />
              </button>
            </div>
            <span
              id="message-error-password-confirmation"
              className="message-error"
            >
              비밀번호를 입력해주세요.
            </span>
          </div>
          <button
            id="btn-signup"
            type="submit"
            className="button pill-button full-width"
            disabled
          >
            회원가입
          </button>
        </form>
        <div className="container-sns-signin">
          <h3>간편 로그인하기</h3>
          <div className="container-btn-sns-signin">
            <a href="https://www.google.com/" target="_blank">
              <img
                src="/images/social/google-logo.png"
                alt="구글 로그인"
                width="42"
              />
            </a>
            <a href="https://www.kakaocorp.com/page/" target="_blank">
              <img
                src="/images/social/kakao-logo.png"
                alt="카카오톡 로그인"
                width="42"
              />
            </a>
          </div>
        </div>
        <div className="container-btn-sign">
          이미 회원이신가요? <a href="/signin">로그인</a>
        </div>
      </div>
    </>
  );
}

export default Signup;
