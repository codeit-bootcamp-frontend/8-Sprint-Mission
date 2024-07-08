import pandaLogo from '../../img/logo.png';
import './Topbar.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function Topbar() {

    return (
        <header className="topBar">
            <div className="leftElement">
                <a href="/" className="logo">
                    <img src={pandaLogo} />
                </a>
                <Link><Button select='off'>자유게시판</Button></Link>
                <Link><Button select='on'>중고마켓</Button></Link>
            </div>
            <Button>로그인</Button>


        </header>
    );

}

export default Topbar;
