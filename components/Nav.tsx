import styled from "styled-components";
import Link from "next/link";
import StyledCommonButton from "./Button";
import { useRouter } from "next/router";

const StyledNavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
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
  margin-left: 100px;
`;

interface StyledLinkProps {
  active?: boolean;
}

const StyledLink = styled(Link)<StyledLinkProps>`
  text-decoration: none;
  margin-left: 10px;
  color: var(--gray-600);
  font-size: 18px;
  font-weight: 700;

  ${({ active }) =>
    active &&
    `
    color: var(--blue-100); 
  `}
`;

const StyledButton = styled(StyledCommonButton)`
  font-size: 16px;
  font-weight: 700;
  margin-right: 100px;
`;

function Nav() {
  const router = useRouter();

  return (
    <StyledNavContainer>
      <FrontNavContainer>
        <Link href="/">
          <StyledLogo src="/image/logo.png" alt="판다마켓 로고" />
        </Link>
        <div>
          <StyledLink href="/boards" active={router.pathname === "/boards"}>
            자유게시판
          </StyledLink>
          <StyledLink href="/market" active={router.pathname === "/market"}>
            중고마켓
          </StyledLink>
        </div>
      </FrontNavContainer>
      <StyledButton>로그인</StyledButton>
    </StyledNavContainer>
  );
}

export default Nav;
