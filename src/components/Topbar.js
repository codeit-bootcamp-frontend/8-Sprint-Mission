import pandaLogo from '../img/logo.png';
import './Topbar.css';
import Button from './Button'


function Topbar() {

    return (
        <header className="topBar">
            <div className="leftElement">
                <a href="/" className="logo">
                    <img src={pandaLogo} />
                </a>
                <Button select='off'>자유게시판</Button>
                <Button select='on'>중고마켓</Button>
            </div>
            <Button>로그인</Button>


        </header>
    );

}

export default Topbar;
