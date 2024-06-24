import { getProducts } from "../api.js";
import "./App.css";
import ProductList from "./ProductList.js";
import { useState, useEffect } from "react";

const LIMIT = 6;

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [loadingError, setLoadingError] = useState(null);

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("favoriteCount");

  const handleLoad = async (options) => {
    let result;
    try {
      setLoadingError(null);
      result = await getProducts(options);
    } catch (error) {
      setLoadingError(error);
      return;
    }
  };

  useEffect(() => {
    handleLoad({ order, offset: 0, limit: LIMIT });
  }, [order]);

  return (
    <div>
      <p>판다마켓 로고</p>
      <a href="https://www.google.com/">자유게시판</a>
      <a href="https://www.google.com/"> 중고마켓</a>
      <button>로그인</button>
      <div>
        <div>
          <h1>베스트 상품</h1>
          <p>베스트 상품 섹션 만들어서 넣을거임</p>
        </div>
        <h1>판매중인 상품</h1>
        <input placeholder="검색할 상품을 입력하세요"></input>
        <button>상품 등록하기</button>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>좋아요순</button>
      </div>
      <ProductList items={sortedItems} />
      {loadingError?.message && <span>{loadingError?.message}</span>}
    </div>
  );
}

export default App;
