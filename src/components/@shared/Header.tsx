import styled from 'styled-components';
import Button from './Button';
import { PATH_LOGIN } from ' constants/paths/paths';
import HeaderLinkSection from './HeaderLinkSection';
import { MEDIA_QUERY_SIZE } from ' constants/information/mediaQuerySize';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <StyledHeaderWrapper>
      <StyledHeader>
        <HeaderLinkSection />
        <Link to={PATH_LOGIN}>
          <Button width={'12.8rem'} height={'4.8rem'}>
            로그인
          </Button>
        </Link>
      </StyledHeader>
    </StyledHeaderWrapper>
  );
}

export default Header;

const StyledHeaderWrapper = styled.header`
  /* 매 페이지마다 fixed에 의해 숨겨진 영역 떄문에 패딩값을 주지 않도록 */
  height: var(--header-height);
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
  height: var(--header-height);
  padding: var(--padding-001);

  background-color: var(--white);
  border-bottom: 1px solid var(--border-gray);

  @media ${MEDIA_QUERY_SIZE.tablet} {
    padding: 0 2.4rem;
  }
  @media ${MEDIA_QUERY_SIZE.mobile} {
    padding: 0 1.6rem;
    & button {
      width: 6rem;
    }
  }
`;
