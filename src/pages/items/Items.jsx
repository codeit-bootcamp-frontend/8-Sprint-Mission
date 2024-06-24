import './Items.css';
import BestItems from '../../components/items/BestItems/BestItems';
import SailItems from '../../components/items/SailItems/SailItems';

function Items() {
  return (
    <>
      <div className="container-items">
        {/* 베스트 상품 */}
        <BestItems></BestItems>
        {/* 판매 중인 상품 */}
        <SailItems></SailItems>
      </div>
    </>
  );
}

export default Items;
