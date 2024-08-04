import { Helmet } from 'react-helmet';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import './Home.scss';

function Home() {
  return (
    <>
      <Helmet>
        <title>판다마켓</title>
      </Helmet>
      <Header />;
      <Footer />;
    </>
  );
}

export default Home;
