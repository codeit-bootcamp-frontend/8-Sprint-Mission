import React, { useEffect, useState } from "react";
import heartIcon from "../assets/ic_heart.png";
import "../styles/items.css";

import ItemTop from "../components/ItemTop";
import Pagnation from "../components/Pagination";
import useMediaQuery from "../utils/useQueryMedia";

const FILTER_NAME = {
  recent: "최신순",
  favorite: "좋아요순",
};

const getItems = ({ page, pageSize, orderBy, keyword }) => {
  return fetch(
    `https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
  ).then((response) => response.json());
};

export function displayDefault(isMobile, isTablet) {
  if (isMobile) return 4;
  if (isTablet) return 6;
  return 10;
}

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
        keyword: "0",
      });
      setBests(data.list);
    }
    getFavoriteProducts();
  }, []);

  useEffect(() => {
    async function getRecentProducts() {
      const data = await getItems({
        page: page,
        pageSize: displayDefault(isMobile, isTablet),
        orderBy: filter,
        keyword: "0",
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
            <ItemTop.Title>베스트 상품</ItemTop.Title>
          </ItemTop>
          <ul className="best__item-list">
            {bests.map(({ id, images, description, price, favoriteCount }) => (
              <li className="best__item" key={id}>
                <img className="best__img" src={images[0]} alt="best" />
                <div className="item__text">
                  <p>
                    {description.length > 10
                      ? description.slice(0, 10) + "..."
                      : description}
                  </p>
                  <strong>{`${price}원`}</strong>
                  <div className="favorite">
                    <img
                      className="favorite__icon"
                      src={heartIcon}
                      alt="favorite"
                    />
                    <p>{favoriteCount}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="items">
          <ItemTop>
            <ItemTop.Title>판매 중인 상품</ItemTop.Title>
            <ItemTop.Search />
            <ItemTop.LinkBtn to="/addItem">상품 둘러보기</ItemTop.LinkBtn>
            <ItemTop.DropDown
              filterName={FILTER_NAME}
              filter={filter}
              setFilter={setFilter}
            />
          </ItemTop>
          <ul className="sell__item-list">
            {sells.map(({ id, images, description, price, favoriteCount }) => (
              <li className="sell__item" key={id}>
                <img className="sell__img" src={images[0]} alt="item" />
                <div className="item__text">
                  <p>
                    {description.length > 10
                      ? description.slice(0, 10) + "..."
                      : description}
                  </p>
                  <strong>{`${price}원`}</strong>
                  <div className="favorite">
                    <img
                      className="favorite__icon"
                      src={heartIcon}
                      alt="favorite"
                    />
                    <p>{favoriteCount}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Pagnation
          page={page}
          setPage={setPage}
          pageCount={Math.ceil(total / displayDefault(isMobile, isTablet))}
        />
      </main>
    </>
  );
}

export default Items;
