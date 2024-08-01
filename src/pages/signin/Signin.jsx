import './sign.css';
import './signinScript';
import imgPandaLogo from '../../assets/images/logo/logo.svg';
import iconEyeInvisible from '../../assets/images/icons/eye-invisible.svg';
import imgGoogleLogo from '../../assets/images/social/google-logo.png';
import imgKakaoLogo from '../../assets/images/social/kakao-logo.png';

function Signin() {
  return (
    <>
      <div class="container-sign">
        <div class="wrapper-btn-logo">
          <a href="/">
            <img class="btn-home-logo" src={imgPandaLogo} alt="판다마켓 로고" />
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
                  src={iconEyeInvisible}
                  alt="비밀번호 숨김"
                />
              </button>
            </div>
            <span id="message-error-password" class="message-error">
              비밀번호를 입력해주세요.
            </span>
          </div>
          <button
            id="btn-signin"
            type="submit"
            class="button pill-button full-width"
            disabled
          >
            로그인
          </button>
        </form>
        <div class="container-sns-signin">
          <h3>간편 로그인하기</h3>
          <div class="container-btn-sns-signin">
            <a href="https://www.google.com/" target="_blank">
              <img src={imgGoogleLogo} alt="구글 로그인" width="42" />
            </a>
            <a href="https://www.kakaocorp.com/page/" target="_blank">
              <img src={imgKakaoLogo} alt="카카오톡 로그인" width="42" />
            </a>
          </div>
        </div>
        <div class="container-btn-sign">
          판다마켓이 처음이신가요? <a href="/signup">회원가입</a>
        </div>
      </div>
    </>
  );
}

export default Signin;
