import { useEffect, useState } from 'react';
import { getProducts } from '../../../api';
import ItemCard from './ItemCard';
import './OnSaleItem.css';
import { Link } from 'react-router-dom';

function OnSaleItem() {
  const [itemList, setItemList] = useState([]);

  const handleLoad = async () => {
    const { list } = await getProducts();
    setItemList(list);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <div className="on-sale-item-header">
        <h1 className="on-sale-section-title">판매 중인 상품</h1>
        <input
          className="on-sale-input"
          placeholder="검색할 상품을 입력해주세요"
        />
        <Link to="/additem" className="on-sale-button">
          상품 등록하기
        </Link>
        <select className="on-sale-dropdown">
          <option>최신순</option>
          <option>좋아요순</option>
        </select>
      </div>
      <div className="on-sale-item-wrap">
        {itemList.map((item) => {
          return <ItemCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default OnSaleItem;
