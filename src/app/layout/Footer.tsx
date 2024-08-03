import { Link } from 'react-router-dom';
import './Footer.scss';
import facebookLogo from '@/asset/icon/facebook.png';
import twitterLogo from '@/asset/icon/twitter.png';
import youtubeLogo from '@/asset/icon/youtube.png';
import instagramLogo from '@/asset/icon/instagram.png';

function AppFooter() {
  return (
    <footer className='app-footer'>
      <p className='copyright'>©codeit - 2024</p>

      <div className='footer-menu'>
        <Link to='/privacy'>Privacy Policy</Link>
        <Link to='/faq'>FAQ</Link>
      </div>

      <div className='social-media'>
        <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
          <img src={facebookLogo} alt='페이스북' width='20' />
        </a>
        <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
          <img src={twitterLogo} alt='트위터' width='20' />
        </a>
        <a href='https://www.youtube.com' target='_blank' rel='noopener noreferrer'>
          <img src={youtubeLogo} alt='유튜브' width='20' />
        </a>
        <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
          <img src={instagramLogo} alt='인스타그램' width='20' />
        </a>
      </div>
    </footer>
  );
}

export default AppFooter;
