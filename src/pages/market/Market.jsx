import './Market.css';
import BestItemsSection from './components/BestItemsSection';
import AllItemsSection from './components/AllItemsSection';

function Market() {
  return (
    <div className='wrapper'>
      <BestItemsSection />
      <AllItemsSection />
    </div>
  );
}

export default Market;
