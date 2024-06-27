import { useEffect, useState } from "react";
import { getProducts } from "../api.js";
import "./App.css";
import ProductList from "./ProductList.js";
import BestList from "./BestList.js";

function App() {
  const [items, setItems] = useState([]);

  // useEffect(async () => {
  //   const items = await getProducts();
  //   setItems(items);
  // }, []);

  async function handleLoad() {
    try {
      const items = await getProducts();
      setItems(items);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <p>판다마켓 로고</p>
      <a href="https://www.google.com/">자유게시판</a>
      <a href="https://www.google.com/"> 중고마켓</a>
      <button>로그인</button>
      <div>
        <div>
          <h1>베스트 상품</h1>
          <BestList items={items} />
        </div>
        <div>
          <h1>판매중인 상품</h1>
          <input placeholder="검색할 상품을 입력하세요"></input>
          <button>상품 등록하기</button>
          <button>최신순</button>
          <button>좋아요순</button>
        </div>
      </div>
      <ProductList items={items} />
    </div>
  );
}

export default App;
