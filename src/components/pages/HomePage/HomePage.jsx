import styled from 'styled-components';
import Header from '../../header/Header';
import Banner from './components/Banner';
import Main from './components/Main';
import Footer from './components/Footer';

function HomePage() {
  return (
    <>
      <Header />
      <Container>
        <Banner />
        <Main />
        <Banner bottom />
        <Footer />
      </Container>
    </>
  );
}

export default HomePage;

const Container = styled.div`
  margin-top: 70px;
`;
