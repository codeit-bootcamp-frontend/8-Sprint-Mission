import Footer from 'components/@shared/Footer';
import BrandBottom from 'components/home/BrandBottom';
import BrandTop from 'components/home/BrandTop';
import FeatList from 'components/home/FeatList';

function Home() {
  return (
    <main>
      <BrandTop />
      <FeatList />
      <BrandBottom />
      <Footer />
    </main>
  );
}

export default Home;
