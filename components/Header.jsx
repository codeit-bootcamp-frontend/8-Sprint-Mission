import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <Logo>
          <source
            srcSet="images/img_small_logo.png"
            media="(max-width: 376px)"
          />
          <img src="images/img_logo.png" alt="판다마켓" />
        </Logo>
        <MenuWrapper>
          <div>자유게시판</div>
          <div>중고마켓</div>
        </MenuWrapper>
      </HeaderLeft>
      <UserProfile
        src="icons/ic_basic_profile.svg"
        width="40"
        height="40"
        alt="사용자 프로필"
      />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid var(--border-gray);
  padding-left: 200px;
  padding-right: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;

  @media (max-width: 744px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media (max-width: 376px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 376px) {
    gap: 8px;
  }
`;

const Logo = styled.picture`
  & img {
    width: 153px;
    height: 51px;
  }

  @media (max-width: 376px) {
    & img {
      width: 81px;
      height: 40px;
    }
  }
`;

const MenuWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  & div {
    height: 100%;
    padding: 21px 15px;
    color: var(--gray600);
    font-weight: 700;
    font-size: 18px;
    text-align: center;
  }

  @media (max-width: 376px) {
    gap: 8px;

    & div {
      padding: 25px 0;
    }
  }
`;

const UserProfile = styled.img`
  width: 40px;
  height: 40px;
`;
