import './Header.css';
import HomeLogo from './HomeLogo';
import Nav from './Nav';
import LoginButton from './LoginButton';

function HeaderNav() {
    return (
        <header>
            <HomeLogo />
            <Nav />
            <LoginButton />
        </header>
    );
}

export default HeaderNav;