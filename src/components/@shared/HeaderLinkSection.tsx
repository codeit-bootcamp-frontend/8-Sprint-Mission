import { Link, useLocation } from 'react-router-dom';
import logoImg from 'assets/images/home/logoAndTypo.png';
import Image from './Image';
import { PATH_HOME, PATH_BOARDS, PATH_ITEMS } from ' constants/paths';
import styled from 'styled-components';
import useNavigateTo from 'hooks/useNavigateTo';

function HeaderLinkSection() {
  const { navigateTo } = useNavigateTo();
  const { pathname } = useLocation();
  const needLinkHeaderPaths = [PATH_BOARDS, PATH_ITEMS];

  return (
    <StyledLinkSection>
      <Image
        src={logoImg}
        alt={'앱 로고와 이름 이미지'}
        height={'5.1rem'}
        width={'15.3rem'}
        onClick={() => navigateTo(PATH_HOME)}
      />
      {/* 링크가 필요한 페이지에서만 링크들이 나타나도록 */}
      {needLinkHeaderPaths.includes(pathname) && (
        <section>
          <StyledLink to={PATH_BOARDS} $isPageMatch={PATH_BOARDS === pathname}>
            자유게시판
          </StyledLink>
          <StyledLink to={PATH_ITEMS} $isPageMatch={PATH_ITEMS === pathname}>
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
`;

const StyledLink = styled(Link)<{ $isPageMatch: boolean }>`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.148rem;
  color: ${({ $isPageMatch }) => ($isPageMatch ? 'var(--brand-blue)' : 'var( --cool-gray-600)')};

  &:not(:last-child) {
    margin-right: 3.2rem;
  }
`;
