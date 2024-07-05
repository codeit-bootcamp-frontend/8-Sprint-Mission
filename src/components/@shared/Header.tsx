import useNavigateTo from 'hooks/useNavigateTo';
import styled from 'styled-components';
import Button from './Button';
import { PATH_LOGIN } from ' constants/paths/paths';
import HeaderLinkSection from './HeaderLinkSection';
import { MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH } from ' constants/infomations/mediaQuerySize';

function Header() {
  const { navigateTo } = useNavigateTo();

  return (
    <StyledHeaderWrapper>
      <StyledHeader>
        <HeaderLinkSection />
        <Button width={'12.8rem'} height={'4.8rem'} onClick={() => navigateTo(PATH_LOGIN)}>
          로그인
        </Button>
      </StyledHeader>
    </StyledHeaderWrapper>
  );
}

export default Header;

const StyledHeaderWrapper = styled.header`
  /* 매 페이지마다 fixed에 의해 숨겨진 영역 떄문에 패딩값을 주지 않도록 */
  height: var(--header-heigt);
`;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  /* 다른 요소에 의해 가려지지 않도록 z-index 부여 */
  z-index: var(--z-index-header);

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: var(--header-heigt);
  padding: var(--padding-001);

  background-color: var(--white);
  border-bottom: 1px solid var(--border-gray);

  @media all and (min-width: ${MOBILE_MAX_WIDTH}px) and (max-width: ${TABLET_MAX_WIDTH}px) {
    padding: 0 2.4rem;
  }
  @media all and (max-width: ${MOBILE_MAX_WIDTH}px) {
    padding: 0 1.6rem;
    & button {
      width: 6rem;
    }
  }
`;
