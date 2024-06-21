import React, { useEffect, useState } from "react";
import heartIcon from "../assets/ic_heart.png";
import "../styles/items.css";

import ItemTop from "../components/ItemTop";
import Pagnation from "../components/Pagination";
import useMediaQuery from "../utils/useQueryMedia";

const filterName = {
  recent: "최신순",
  favorite: "좋아요순",
};

const getItems = ({ page, pageSize, orderBy, keyword }) => {
  return fetch(
    `https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
  ).then((response) => response.json());
};

function Items() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(max-width: 1199px)");
  const [bests, setBests] = useState([]);
  const [sells, setSells] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("recent");

  useEffect(() => {
    async function getFavoriteProducts() {
      const data = await getItems({
        page: 1,
        pageSize: 4,
        orderBy: "favorite",
        keyword: 0,
      });
      setBests(data.list);
    }
    getFavoriteProducts();
  }, []);

  useEffect(() => {
    async function getRecentProducts() {
      const data = await getItems({
        page: page,
        pageSize: isMobile ? 4 : isTablet ? 6 : 10,
        orderBy: filter,
        keyword: 0,
      });
      setSells(data.list);
      setTotal(data.totalCount);
    }
    getRecentProducts();
  }, [filter, page, isMobile, isTablet]);

  return (
    <>
      <main className="main-container">
        <div className="items">
          <ItemTop>
            <ItemTop.H1>베스트 상품</ItemTop.H1>
          </ItemTop>
          <ul className="best__item-list">
            {bests.map((item, i) => (
              <li className="best__item" key={item.id}>
                <img className="best__img" src={item.images[0]} alt="best" />
                <div className="item__text">
                  <p>
                    {item.description.length > 10
                      ? item.description.slice(0, 10) + "..."
                      : item.description}
                  </p>
                  <strong>{`${item.price}원`}</strong>
                  <div className="favorite">
                    <img
                      className="favorite__icon"
                      src={heartIcon}
                      alt="favorite"
                    />
                    <p>{item.favoriteCount}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="items">
          <ItemTop>
            <ItemTop.H1>판매 중인 상품</ItemTop.H1>
            <ItemTop.Search />
            <ItemTop.LinkBtn to="/addItem">상품 둘러보기</ItemTop.LinkBtn>
            <ItemTop.DropDown
              filterName={filterName}
              filter={filter}
              setFilter={setFilter}
            />
          </ItemTop>
          <ul className="sell__item-list">
            {sells.map((item) => (
              <li className="sell__item" key={item.id}>
                <img className="sell__img" src={item.images[0]} alt="item" />
                <div className="item__text">
                  <p>
                    {item.description.length > 10
                      ? item.description.slice(0, 10) + "..."
                      : item.description}
                  </p>
                  <strong>{`${item.price}원`}</strong>
                  <div className="favorite">
                    <img
                      className="favorite__icon"
                      src={heartIcon}
                      alt="favorite"
                    />
                    <p>{item.favoriteCount}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Pagnation
          page={page}
          setPage={setPage}
          pageCount={
            isMobile
              ? Math.ceil(total / 4)
              : isTablet
              ? Math.ceil(total / 6)
              : Math.ceil(total / 10)
          }
        />
      </main>
    </>
  );
}

export default Items;
