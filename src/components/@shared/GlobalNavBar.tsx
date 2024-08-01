import styled from "styled-components";
import headerLogoImg from "../../assets/images/panda_logo_with_typo.png";
import headerTypoImg from "../../assets/images/panda_typo.png";
import userPfpImg from "../../assets/images/img_basic_user_pfp.png";
import { useLocation, Link } from "react-router-dom";

interface StyledProps {
  isMain: boolean;
}

interface NavMenuProps {
  isHere: boolean;
}

interface GlobalNavBarProps {
  isLogin: boolean;
  isMain: boolean;
}

const StyledNavContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.gray00};
  display: flex;
  max-width: 1200px;
  height: 70px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.device.tablet} {
    margin: 0 24px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin: 0 16px;
  }
`;

const StyledHeaderLeftArea = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  height: 100%;

  @media ${({ theme }) => theme.device.tablet} {
    gap: 20px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    gap: 8px;
  }
`;

const StyledLogoImg = styled.img<StyledProps>`
  display: block;
  width: 153px;
  height: 51px;

  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

const StyledTypoImg = styled.img<StyledProps>`
  display: none;
  width: ${({ isMain }) => (isMain ? "103px" : "81px")};
  height: ${({ isMain }) => (isMain ? "51px" : "40px")};

  @media ${({ theme }) => theme.device.mobile} {
    display: block;
  }
`;

const StyledNavMenusArea = styled.div`
  display: flex;

  @media ${({ theme }) => theme.device.mobile} {
    gap: 8px;
  }
`;

const StyledNavMenuWrapper = styled.div<NavMenuProps>`
  height: 100%;
  color: ${({ isHere, theme }) => (isHere ? theme.colors.brandBlue : theme.colors.gray600)};
  font-size: 18px;
  font-weight: 700;
  padding: 0 15px;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 16px;
    padding: 0;
  }
`;

const StyledUserPfpImg = styled.img`
  display: block;
  width: 40px;
  height: 40px;
`;

const StyledLoginBtn = styled.button<StyledProps>`
  background-color: ${({ theme }) => theme.colors.brandBlue};
  color: ${({ theme }) => theme.colors.gray100};
  font-size: ${({ isMain }) => (isMain ? "18px" : "16px")};
  font-weight: 600;
  width: ${({ isMain }) => (isMain ? "128px" : "88px")};
  height: ${({ isMain }) => (isMain ? "48px" : "42px")};
  border-radius: 8px;
`;

function GlobalNavBar({ isMain, isLogin }: GlobalNavBarProps) {
  const { pathname: path } = useLocation();

  return (
    <StyledNavContainer>
      <StyledHeaderLeftArea>
        <StyledLogoImg isMain={isMain} src={headerLogoImg} alt="로고이미지" />
        <StyledTypoImg isMain={isMain} src={headerTypoImg} alt="로고이미지" />
        {!isMain && (
          <StyledNavMenusArea>
            <StyledNavMenuWrapper isHere={path.includes("자유게시판링크")}>
              자유게시판
            </StyledNavMenuWrapper>
            <StyledNavMenuWrapper isHere={path.includes("/items")}>중고마켓</StyledNavMenuWrapper>
          </StyledNavMenusArea>
        )}
      </StyledHeaderLeftArea>
      <div>
        {isLogin ? (
          <StyledUserPfpImg src={userPfpImg} alt="프로필이미지" />
        ) : (
          <Link to="/login">
            <StyledLoginBtn isMain={isMain}>로그인</StyledLoginBtn>
          </Link>
        )}
      </div>
    </StyledNavContainer>
  );
}

export default GlobalNavBar;
