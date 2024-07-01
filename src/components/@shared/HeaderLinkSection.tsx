import { Link, useLocation } from 'react-router-dom';
import logoImg from 'assets/images/home/logoAndTypo.png';
import typoImg from 'assets/images/home/typo.png';
import Image from './Image';
import { PATH_HOME, PATH_BOARDS, PATH_ITEMS, PATH_ADD_ITEM } from ' constants/paths/paths';
import styled from 'styled-components';
import useNavigateTo from 'hooks/useNavigateTo';
import useWindowSize from 'hooks/useWindowSize';

function HeaderLinkSection() {
  const { innerWidth } = useWindowSize();
  const { navigateTo } = useNavigateTo();
  const { pathname } = useLocation();
  const needLinkHeaderPaths = [PATH_BOARDS, PATH_ITEMS, PATH_ADD_ITEM];

  return (
    <StyledLinkSection>
      <Image
        src={innerWidth > 769 ? logoImg : typoImg}
        alt={'로고 이미지'}
        height={innerWidth > 769 ? '5.1rem' : '4rem'}
        width={innerWidth > 769 ? '15.3rem' : '8.1rem'}
        onClick={() => navigateTo(PATH_HOME)}
      />
      {/* 링크가 필요한 페이지에서만 링크들이 나타나도록 */}
      {needLinkHeaderPaths.includes(pathname) && (
        <section>
          <StyledLink to={PATH_BOARDS} $isPageMatch={PATH_BOARDS === pathname}>
            자유게시판
          </StyledLink>
          <StyledLink to={PATH_ITEMS} $isPageMatch={[PATH_ITEMS, PATH_ADD_ITEM].includes(pathname)}>
            중고마켓
          </StyledLink>
        </section>
      )}
    </StyledLinkSection>
  );
}

export default HeaderLinkSection;

const StyledLinkSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;

  & img:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const StyledLink = styled(Link)<{ $isPageMatch: boolean }>`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.148rem;
  color: ${({ $isPageMatch }) => ($isPageMatch ? 'var(--brand-blue)' : 'var( --cool-gray-600)')};

  &:not(:last-child) {
    margin-right: 3.2rem;
    @media (max-width: 768px) {
      margin-right: 0.8rem;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    line-height: 1.909rem;
  }
`;
