import pandaIcon from "../images/logo_image.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import StyledCommonButton from "./Button";

const StyledNavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 100px;
  border-bottom: 1px solid var(--gray-200);
`;

const FrontNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
`;

const StyledLogo = styled.img`
  margin-right: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-left: 10px;
  color: var(--gray-600);
  font-size: 18px;
  font-weight: 700;
`;

const StyledButton = styled(StyledCommonButton)`
  font-size: 16px;
  font-weight: 700;
`;

function Nav() {
  return (
    <StyledNavContainer>
      <FrontNavContainer>
        <Link to={`/`}>
          <StyledLogo src={pandaIcon} alt="판다마켓 로고" />
        </Link>
        <div>
          <StyledLink to={`/market`}>자유게시판</StyledLink>
          <StyledLink to={`/market`}>중고마켓</StyledLink>
        </div>
      </FrontNavContainer>
      <StyledButton>로그인</StyledButton>
    </StyledNavContainer>
  );
}

export default Nav;
