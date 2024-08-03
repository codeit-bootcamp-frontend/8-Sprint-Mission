import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <div className="nav">
            <NavLink to="/boards" className="tab">자유게시판</NavLink>
            <NavLink to="/items" className="tab">중고마켓</NavLink>
        </div>
    )
}

export default Nav;