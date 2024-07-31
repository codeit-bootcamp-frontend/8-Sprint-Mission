import styled from 'styled-components';
import Header from '../../header/Header';
import Banner from './Banner';

function HomePage() {
  return (
    <>
      <Header />
      <Container>
        <Banner />
        <Banner bottom />
      </Container>
    </>
  );
}

export default HomePage;

const Container = styled.div`
  margin-top: 70px;
`;
