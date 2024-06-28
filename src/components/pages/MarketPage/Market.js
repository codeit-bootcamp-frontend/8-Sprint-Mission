import BestItem from './BestItem';
import OnSaleItem from './OnSaleItem';
import './Market.css';
import Pagination from './Pagination';

function Market() {
  return (
    <div className="content-wrap">
      <BestItem />
      <OnSaleItem />
      <Pagination />
    </div>
  );
}

export default Market;
