import './MarketPage.css';
import BestItemsSection from './components/BestItemsSection';
import AllItemsSection from './components/AllItemsSection';

function MarketPage() {
  return (
    <div className='wrapper'>
      <BestItemsSection />
      <AllItemsSection />
    </div>
  );
}

export default MarketPage;
