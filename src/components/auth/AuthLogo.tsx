import Image from 'components/@shared/Image';
import styled from 'styled-components';
import authLogoImg from 'assets/images/auth/auth-logo.png';
import { PATH_HOME } from ' constants/paths/paths';
import { Link } from 'react-router-dom';

function AuthLogo() {
  return (
    <StyledAuthLogo to={PATH_HOME}>
      <Image src={authLogoImg} alt={'판다마켓 로고와 타이포'} height={'100%'} width={'100%'} />
    </StyledAuthLogo>
  );
}

export default AuthLogo;

const StyledAuthLogo = styled(Link)`
  height: 13.2rem;
  width: 39.6rem;
  margin: 6rem auto 4rem;
  cursor: pointer;
`;
