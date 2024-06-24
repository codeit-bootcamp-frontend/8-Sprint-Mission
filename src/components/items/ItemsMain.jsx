import { useState, useEffect } from "react";
import styled from "styled-components";
import { getItems } from "../apis";

import BestItems from "./BestItems";
import SellingItems from "./SellingItems";
import PageNavigation from "./PageNavigation";

function ItemsMain() {
  const [bestItems, setBestItems] = useState([]);
  const [sellingItems, setSellingItems] = useState([]);
  const [orderBy, setOrderBy] = useState("recent");
  const loadItems = async ({ pageSize, orderBy, bestLoad = false }) => {
    const { list } = await getItems({ pageSize, orderBy });
    if (bestLoad) {
      setBestItems(list);
    }
    if (!bestLoad) {
      setSellingItems(list);
    }
  };

  const orderByHandle = (sort) => {
    setOrderBy(sort);
  };
  useEffect(() => {
    loadItems({ pageSize: 4, orderBy: "favorite", bestLoad: true });
  }, []);
  useEffect(() => {
    loadItems({ pageSize: 10, orderBy });
  }, [orderBy]);
  return (
    <>
      <MainContainer>
        <BestItems items={bestItems} />
        <SellingItems items={sellingItems} orderByHandle={orderByHandle} />
        <PageNavigation />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 70px auto 0;
  padding-top: 24px;

  .item-name {
    color: (var(--gray-800));
    font-weight: 500;
    font-size: 14px;
    padding-top: 12px;
  }
  .item-price {
    color: (var(--gray-800));
    font-weight: 700;
    font-size: 16px;
  }
  .item-favorite {
    color: (var(--gray-600));
    font-weight: 500;
    font-size: 12px;
  }
  .heart-img {
    vertical-align: middle;
    margin-right: 1.3px;
  }

  @media (max-width: 1199px) {
    padding: 24px 24px 0;
    max-width: 820px;
  }
  @media (max-width: 767px) {
    padding: 16px 16px;
    max-width: 600px;
    min-width: 375px;
  }
`;
export default ItemsMain;
