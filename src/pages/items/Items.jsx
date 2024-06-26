import './Items.css';
import BestItems from '../../components/items/BestItems/BestItems';
import SellingItems from '../../components/items/SellingItems/SellingItems';

function Items() {
  return (
    <>
      <div className="container-items">
        {/* 베스트 상품 */}
        <BestItems />
        {/* 판매 중인 상품 */}
        <SellingItems />
      </div>
    </>
  );
}

export default Items;
