import Header from 'components/@shared/Header';
import BrandBottom from 'components/home/BrandBottom';
import BrandTop from 'components/home/BrandTop';
import FeatList from 'components/home/FeatList';
import styled from 'styled-components';

function Home() {
  return (
    <StyledHome>
      <Header />
      <BrandTop />
      <FeatList />
      <BrandBottom />
    </StyledHome>
  );
}

export default Home;

const StyledHome = styled.div`
  /* 헤더가 position: fixed이므로 헤더 높이만큼의 패딩 부여 */
  padding-top: var(--header-heigt);
`;
