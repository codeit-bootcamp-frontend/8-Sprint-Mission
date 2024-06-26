import { NavLink } from 'react-router-dom';
import imgPandaMarketLogo from '../../assets/images/logo/panda-market-logo.png';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <a href="/">
          <img
            className="navbar-home-logo"
            src={imgPandaMarketLogo}
            alt="판다마켓 홈"
          />
        </a>
        <nav className="navbar-menu">
          <ol>
            <li className="navbar-menu-item navbar-menu-board">
              {/* <a href="/board" value="board">
                자유게시판
              </a> */}
              <NavLink
                to={'/community'}
                className={({ isActive }) =>
                  `nav-bar-menu-link ${isActive ? 'active' : ''}`
                }
              >
                자유게시판
              </NavLink>
            </li>
            <li className="navbar-menu-item navbar-menu-items">
              {/* <a href="/items" value="items">
                중고마켓
              </a> */}
              <NavLink
                to={'/items'}
                className={({ isActive }) =>
                  `nav-bar-menu-link ${isActive ? 'active' : ''}`
                }
              >
                중고마켓
              </NavLink>
            </li>
          </ol>
        </nav>
      </div>
      <a href="/signin" id="login-link-button" className="button">
        로그인
      </a>
    </header>
  );
}

export default NavigationBar;
