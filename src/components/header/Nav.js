import { NavLink } from 'react-router-dom';
import './Nav.css';
import NavTab from './NavTab';

function Nav() {
    return (
        <div className="nav">
            <NavLink to="/"><NavTab text="자유게시판" active="deactive" /></NavLink>
            <NavLink to="/items"><NavTab text="중고마켓" active="active" /></NavLink>
        </div>
    )
}

export default Nav;