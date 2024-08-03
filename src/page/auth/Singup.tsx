import { Helmet } from 'react-helmet-async';
import './Singup.scss';

function SignupPage() {
  return (
    <>
      <Helmet>
        <title>판다마켓 - 회원가입</title>
      </Helmet>

      <div className='auth-container'>
        <a href='/' className='home-logo' aria-label='홈으로 이동'>
          <img src='images/pandamarket/logo.svg' alt='판다마켓 로고' />
        </a>
        <form id='signup' method='post'>
          <div className='input-info'>
            <label htmlFor='email'>이메일</label>
            <input id='email' name='email' type='email' placeholder='이메일을 입력해 주세요' required />
            <span id='emailEmptyError' className='error-message'>
              이메일을 입력해 주세요
            </span>
            <span id='emailInvalidError' className='error-message'>
              잘못된 이메일 형식입니다
            </span>
          </div>
          <div className='input-info'>
            <label htmlFor='nickname'>닉네임</label>
            <input id='nickname' name='nickname' type='text' placeholder='닉네임을 입력해 주세요' required />
            <span id='nicknameEmptyError' className='error-message'>
              닉네임을 입력해 주세요
            </span>
          </div>
          <div className='input-info'>
            <label htmlFor='password'>비밀번호</label>
            <div className='input-wrapper'>
              <input id='password' name='password' type='password' placeholder='비밀번호를 입력해 주세요' required />
              <button type='button' className='password-toggle-button' aria-label='비밀번호 보기'>
                <img
                  className='password-toggle-icon'
                  src='images/icon/invisible.png'
                  alt='비밀번호 숨김 상태 아이콘'
                  width='24'
                />
              </button>
            </div>
            <span id='passwordEmptyError' className='error-message'>
              비밀번호를 입력해 주세요
            </span>
            <span id='passwordInvalidError' className='error-message'>
              비밀번호를 8자 이상 입력해 주세요
            </span>
          </div>
          <div className='input-info'>
            <label htmlFor='passwordConfirmation'>비밀번호 확인</label>
            <div className='input-wrapper'>
              <input
                id='passwordConfirmation'
                name='passwordConfirmation'
                type='password'
                placeholder='비밀번호를 다시 한 번 입력해 주세요'
                required
              />
              <button type='button' className='password-toggle-button' aria-label='비밀번호 보기'>
                <img
                  className='password-toggle-icon'
                  src='images/icon/invisible.png'
                  alt='비밀번호 숨김 상태 아이콘'
                  width='24'
                />
              </button>
            </div>
            <span id='passwordConfirmationInitError' className='error-message'>
              먼저 조건에 맞는 비밀번호를 입력해 주세요
            </span>
            <span id='passwordConfirmationError' className='error-message'>
              비밀번호가 일치하지 않습니다
            </span>
          </div>
          <button type='submit' className='button pill'>
            회원가입
          </button>
        </form>
        <div className='social-login'>
          <h2>간편 로그인하기</h2>
          <div className='social-login-buttons'>
            <a href='https://www.google.com/' target='_blank' rel='noopener noreferrer' aria-label='구글 로그인'>
              <img src='images/social/ic_google.png' alt='구글 로그인' width='42' />
            </a>
            <a
              href='https://www.kakaocorp.com/page/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='카카오톡 로그인'>
              <img src='images/social/ic_kakaotalk.png' alt='카카오톡 로그인' width='42' />
            </a>
          </div>
        </div>
        <div className='auth-switch'>
          이미 회원이신가요?
          <a href='login.html'>로그인</a>
        </div>
      </div>
      <script src='scripts/auth.js'></script>
    </>
  );
}

export default SignupPage;
