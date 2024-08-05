import { Link } from 'react-router-dom';

import logoImg from '../../core/assets/images/logo/logo-large@3x.png';
import styled from 'styled-components';

const Wrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3.75rem 0.5rem;
`;

const Logo = styled.img`
    width: 40rem;
    @media (375px <= width < 768px) {
        width: 30rem;
    }
`;

const Header = () => {
    return (
        <Wrapper>
            <Link to='/'>
                <Logo src={logoImg} alt="판다마켓 로고" />
            </Link>
        </Wrapper>
    );
}

export default Header;
