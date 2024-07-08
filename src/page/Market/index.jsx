import { Helmet } from 'react-helmet-async';
import './style.css';
import BestItemsSection from './components/BestItemsSection';
import AllItemsSection from './components/AllItemsSection';

function MarketPage() {
  return (
    <>
      <Helmet>
        <title>판다마켓 - 중고마켓</title>
      </Helmet>

      <div className='wrapper'>
        <BestItemsSection />
        <AllItemsSection />
      </div>
    </>
  );
}

export default MarketPage;
