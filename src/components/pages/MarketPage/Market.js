import BestItem from './BestItem';
import OnSaleItem from './OnSaleItem';
import './Market.css';

function Market() {
  return (
    <div className="content-wrap">
      <BestItem />
      <OnSaleItem />
    </div>
  );
}

export default Market;
