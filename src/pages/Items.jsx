import { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import { getItems } from "../components/apis";
import BestItems from "../components/items/BestItems";
import SellingItems from "../components/items/SellingItems";
import PageNavigation from "../components/items/PageNavigation";
import useDetectViewport from "../hooks/useDetectViewport";

function Items() {
  const sizeName = useDetectViewport();
  const [bestItems, setBestItems] = useState([]);
  const [sellingItems, setSellingItems] = useState([]);
  const [orderBy, setOrderBy] = useState("recent");
  const [pageNum, setPageNum] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [keyWord, setKeyWord] = useState("");
  const [didMount, setDidMount] = useState(false);

  const loadItems = async ({
    page = pageNum,
    pageSize = pageSize,
    orderBy = orderBy,
    keyword = keyWord,
    bestLoad = false,
  }) => {
    const { list, totalCount } = await getItems({
      page,
      pageSize,
      orderBy,
      keyWord,
    });
    if (bestLoad) {
      setBestItems(list);
    }
    if (!bestLoad) {
      setSellingItems(list);
      setPageCount(Math.ceil(totalCount / pageSize));
    }
  };
  const keyWordHandle = (keyword) => {
    setKeyWord(keyword);
  };
  const orderByHandle = (order) => {
    setOrderBy(order);
  };
  const pageNumHandle = (page) => {
    setPageNum(page);
  };

  useEffect(() => {
    if (sizeName === "large") {
      setPageSize(10);
    } else if (sizeName === "medium") {
      setPageSize(6);
    } else if (sizeName === "small") {
      setPageSize(4);
    }
  }, [sizeName]);

  useEffect(() => {
    loadItems({ page: 1, pageSize: 4, orderBy: "favorite", bestLoad: true });
  }, []);

  useEffect(() => {
    setPageNum(1);
    loadItems({ page: pageNum, pageSize: pageSize, orderBy, keyWord: keyWord });
  }, [orderBy, pageSize, keyWord]);

  useEffect(() => {
    if (!didMount) {
      setDidMount(true);
      return;
    }
    loadItems({ page: pageNum, pageSize, orderBy });
  }, [pageNum]);

  return (
    <>
      <MainContainer>
        <BestItems items={bestItems} />
        <SellingItems
          items={sellingItems}
          orderByHandle={orderByHandle}
          orderBy={orderBy}
          keyWordHandle={keyWordHandle}
        />
        <PageNavigation
          onClickNum={pageNumHandle}
          pageNum={pageNum}
          pageCount={pageCount}
        />
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
export default Items;
