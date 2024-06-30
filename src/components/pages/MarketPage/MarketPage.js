import BestItem from './BestItem';
import OnSaleItem from './OnSaleItem';
import './MarketPage.css';
import Pagination from './Pagination';
import Header from '../../header/Header';

function MarketPage() {
  return (
    <>
      <Header />
      <div className="content-wrap">
        <BestItem />
        <OnSaleItem />
        <Pagination />
      </div>
    </>
  );
}

export default MarketPage;
