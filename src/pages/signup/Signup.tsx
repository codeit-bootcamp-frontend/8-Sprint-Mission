import './sign.css';
import './signupScript';

function Signup() {
  return (
    <>
      <div class="container-sign">
        <div class="wrapper-btn-logo">
          <a href="/">
            <img
              class="btn-home-logo"
              src="/images/logo/logo.svg"
              alt="판다마켓 로고"
            />
          </a>
        </div>
        <form method="post">
          <div class="input-item">
            <label for="email">이메일</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="이메일을 입력해 주세요"
            />
            <span id="message-error-email" class="message-error">
              이메일을 입력해d주세요.
            </span>
          </div>
          <div class="input-item">
            <label for="nickname">닉네임</label>
            <input
              id="nickname"
              name="nickname"
              type="text"
              placeholder="닉네임을 입력해 주세요"
            />
            <span id="message-error-nickname" class="message-error">
              닉네임을 입력해d주세요.
            </span>
          </div>
          <div class="input-item">
            <label for="password">비밀번호</label>
            <div class="wrapper-input">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="비밀번호를 입력해 주세요"
              />
              <button id="btn-password-visible" class="btn-password-visible">
                <img
                  class="img-password-visible"
                  src="/images/icons/eye-invisible.svg"
                  alt="비밀번호 숨김"
                />
              </button>
            </div>
            <span id="message-error-password" class="message-error">
              비밀번호를 입력해주세요.
            </span>
          </div>
          <div class="input-item">
            <label for="password-confirmation">비밀번호 확인</label>
            <div class="wrapper-input">
              <input
                id="password-confirmation"
                name="password-confirmation"
                type="password"
                placeholder="비밀번호를 다시 한 번 입력해 주세요"
              />
              <button
                id="btn-password-confirmation-visible"
                class="btn-password-visible"
              >
                <img
                  class="img-password-visible"
                  src="/images/icons/eye-invisible.svg"
                  alt="비밀번호 숨김"
                />
              </button>
            </div>
            <span
              id="message-error-password-confirmation"
              class="message-error"
            >
              비밀번호를 입력해주세요.
            </span>
          </div>
          <button
            id="btn-signup"
            type="submit"
            class="button pill-button full-width"
            disabled
          >
            회원가입
          </button>
        </form>
        <div class="container-sns-signin">
          <h3>간편 로그인하기</h3>
          <div class="container-btn-sns-signin">
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
        <div class="container-btn-sign">
          이미 회원이신가요? <a href="/signin">로그인</a>
        </div>
      </div>
    </>
  );
}

export default Signup;
