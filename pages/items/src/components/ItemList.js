import { useEffect, useState } from "react";
import { getProducts } from "../api.js";

function ItemList() {
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);
  const [order, setOrder] = useState("favoriteCount");

  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("favoriteCount");

  async function handleLoad({ order, limit: LIMIT }) {
    let result = await getProducts({ order, offset, limit: LIMIT });
    const product = result.list;
    setItems(product);
    setOffset(offset + LIMIT);
  }
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleLoadMore = () => {
    handleLoad({ order, offset, limit: LIMIT });
  };

  useEffect(() => {
    handleLoad({ order, offset, limit: LIMIT });
  }, [order]);

  return (
    <div>
      <div>
        <h1>판매중인 상품</h1>
        <input placeholder="검색할 상품을 입력하세요"></input>
        <button>상품 등록하기</button>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>좋아요순</button>
      </div>
      <ProductList items={sortedItems} />
      <button onClick={handleLoadMore}>다음 페이지</button>
    </div>
  );
}

export default ItemList;
