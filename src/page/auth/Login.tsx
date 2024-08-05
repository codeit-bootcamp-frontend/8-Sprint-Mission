import SocialLogin from './components/SocialLogin';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Login.scss';

function LoginPage() {
  return (
    <>
      <Helmet>
        <title>판다마켓 - 로그인</title>
      </Helmet>

      <div className='auth-container'>
        <a href='/' className='home-logo' aria-label='홈으로 이동'>
          <img src='images/pandamarket/logo.svg' alt='판다마켓 로고' />
        </a>

        <form id='login' method='post'>
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
          <button type='submit' className='button pill'>
            로그인
          </button>
        </form>

        <SocialLogin />

        <div className='auth-switch'>
          판다마켓이 처음이신가요?
          <Link to='/signup'>회원가입</Link>
        </div>
      </div>
      <script src='scripts/auth.js'></script>
    </>
  );
}

export default LoginPage;
