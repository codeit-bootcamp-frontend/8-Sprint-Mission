import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './style.scss';
import Feature from './components/Feature';
import feature1 from '@/asset/image/feature1.png';
import feature2 from '@/asset/image/feature2.png';
import feature3 from '@/asset/image/feature3.png';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>판다마켓</title>
      </Helmet>

      <header className='banner hero'>
        <h1>
          일상의 모든 물건을
          <br />
          거래해 보세요
        </h1>

        <Link to='/items' className='button pill'>
          구경하러 가기
        </Link>
      </header>

      <section className='features'>
        <Feature
          image={feature1}
          alt='인기 상품'
          featureName='Hot item'
          title='인기 상품을 확인해 보세요'
          description='가장 HOT한 중고거래 물품을 판다마켓에서 확인해 보세요'
        />
        <Feature
          image={feature2}
          alt='검색 기능'
          featureName='Search'
          title='구매를 원하는 상품을 검색하세요'
          description='구매하고 싶은 물품은 검색해서 쉽게 찾아보세요'
        />
        <Feature
          image={feature3}
          alt='판매 상품 등록'
          featureName='Register'
          title='판매를 원하는 상품을 등록하세요'
          description='어떤 물건이든 판매하고 싶은 상품을 쉽게 등록하세요'
        />
      </section>

      <footer className='banner bottom'>
        <h3>
          믿을 수 있는
          <br />
          판다마켓 중고거래
        </h3>
      </footer>
    </>
  );
}

export default HomePage;
