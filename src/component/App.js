import React from "react";
import logo from "../img/logo.png";
import { Api } from "./Api";
import { useState, useEffect, Fragment } from "react";
import Search from "./Search";
import RegistButton from "./RegistButton";
import "../style/style.css";
import Pagination from "./Paginantion";

const App = () => {
  const [data, setData] = useState([]);
  const [best, setBest] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const checkResizing = () => {
      setIsMobile(window.innerWidth < 1200);
    };
    window.addEventListener("resize", checkResizing);
    return () => {
      window.removeEventListener("resize", checkResizing);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await Api();
      setData(result.list);

      const bestProduct = [...result.list]
        .sort((a, b) => b.favoriteCount - a.favoriteCount)
        .slice(0, isMobile ? 2 : 4);
      setBest(bestProduct);

      const sailingProduct = [...result.list]
        .sort((a, b) => b.favoriteCount - a.favoriteCount)
        .slice(0, isMobile ? 6 : 10);
      setData(sailingProduct);
    };
    fetchData();
  }, [isMobile]);

  const handleDropChange = (e) => {
    let value = e.target.value;
    let sortedData = [];
    if (value === "newest") {
      sortedData = [...data].sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
    } else {
      sortedData = [...data].sort((a, b) => {
        return b.favoriteCount - a.favoriteCount;
      });
    }
    setData(isMobile ? sortedData.slice(0, 6) : sortedData);
  };

  return (
    <Fragment>
      <nav>
        <h1 id="logo">
          <a href="/">
            <img src={logo} alt="판다마켓로고" />
          </a>
        </h1>
        <ul className="menuBar">
          <li>자유게시판</li>
          <li>중고마켓</li>
        </ul>
        <a className="login" href="login.html">
          로그인
        </a>
      </nav>
      <div id="wrap">
        <h2 className="best-productTitle">베스트 상품</h2>
        <div className="bestProduct">
          {best.map((item) => (
            <div key={item.id} className="best-item-card">
              <img src={item.images} alt={item.name} />
              <p className="bestDescript">{item.description}</p>
              <p className="bestPrice">{item.price}원</p>
              <h3>
                <span className="material-symbols-outlined">favorite</span>
                {item.favoriteCount}
              </h3>
            </div>
          ))}
        </div>

        <div className="menu-box">
          <h2 className="sailing-productTitle">판매 중인 상품</h2>
          <div className="product-card">
            <div className="searchBox">
              <span className="material-symbols-outlined">search</span>
              <Search />
            </div>
            <RegistButton />
            <select
              name="sortOptions"
              id="sortOptions"
              onChange={handleDropChange}
            >
              <option value="newest">최신순</option>
              <option value="best">인기순</option>
            </select>
          </div>
        </div>
        <div className="sailing-card">
          {data.map((items) => (
            <div key={items.id} className="sail-products-card">
              <img src={items.images} alt={items.name} />
              <p className="bestDescript">{items.description}</p>
              <p className="bestPrice">{items.price}원</p>
              <h3>
                <span className="material-symbols-outlined">favorite</span>
                {items.favoriteCount}
              </h3>
            </div>
          ))}
        </div>

        <Pagination />
      </div>
    </Fragment>
  );
};

export default App;
