import styled from 'styled-components';
import Header from '../../header/Header';

const Container = styled.div`
  margin-top: 70px;
`;

function HomePage() {
  return (
    <>
      <Header />
      <Container>홈페이지</Container>
    </>
  );
}

export default HomePage;
