import './SocialLogin.css';
import googleLogo from '@/asset/icon/google.png';
import kakaoLogo from '@/asset/icon/kakaotalk.png';

interface SocialLoginLinkProps {
  name: string;
  url: string;
  logoSrc: string;
}

function SocialLoginLink({ url, name, logoSrc }: SocialLoginLinkProps) {
  return (
    <a href={url} target='_blank' rel='noopener noreferrer' aria-label={name}>
      <img src={logoSrc} alt={name} width='42' />
    </a>
  );
}

function SocialLogin() {
  return (
    <div className='social-login'>
      <h3>간편 로그인하기</h3>

      <div className='social-login-links'>
        <SocialLoginLink url='https://www.google.com' name='구글 로그인' logoSrc={googleLogo} />

        <SocialLoginLink name='카카오톡 로그인' url='https://www.kakaocorp.com/page' logoSrc={kakaoLogo} />
      </div>
    </div>
  );
}

export default SocialLogin;
