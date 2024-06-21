
import Topbar from './Topbar';
import './App.css';
import ProductList from './ProductList';
import BestProductList from './BestProductList';
import Button from './Button';
import { useEffect, useState } from 'react';
import { getProducts } from '../api';

function App() {

  const [order, setOrder] = useState('favoriteCount');
  const [items, setItems] = useState([]);

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const BestItems = items.sort((a, b) => b['favoriteCount'] - a['favoriteCount']);

  const handleFavorite = () => setOrder('favoriteCount');

  const handleBestClick = () => setOrder('createAt');



  const handleLoad = async (orderQuery) => {
    const { list } = await getProducts(orderQuery);
    setItems(list);
    console.log(list);
  }

  useEffect(() => {
    handleLoad(order);
  }, [order])
  return (

    <div>
      <Topbar></Topbar>
      <div className="main">
        <h1>베스트 상품</h1>
        <BestProductList items={BestItems}></BestProductList>

        <div className="saleProductTitle">
          <h1>판매 중인 상품</h1>
          <div className="titleRight">
            <input id="search" name="search" type="search" placeholder="검색할 상품을 입력해주세요" className="productSearch"></input>
            <Button>상품 등록하기</Button>

            <select>
              <option value="Recent">최신순</option>
              <option value="favorite">좋아요순</option>
            </select>
          </div>
        </div>

        <ProductList items={sortedItems}></ProductList>

      </div>

    </div>

  );
}


export default App;