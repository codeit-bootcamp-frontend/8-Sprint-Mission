import './Nav.css';
import NavTab from './NavTab';

function Nav() {
    return (
        <div className="nav">
            <NavTab text="자유게시판" active="deactive" />
            <NavTab text="중고마켓" active="active" />
        </div>
    )
}

export default Nav;