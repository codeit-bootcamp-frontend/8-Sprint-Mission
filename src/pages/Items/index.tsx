import { useEffect, useState } from "react";
import "../../styles/items.css";

import ItemTop from "../../components/ItemTop";
import Pagnation from "../../components/Pagination";
import useMediaQuery from "../../utils/useQueryMedia";
import BestItemList from "../../components/BestItemList";
import SellItemList from "../../components/SellItemList";
import { Container } from "../../styles/styled";
import { Item } from "src/types/type";
import { getItems } from "../../api/product";
//import { getItems } from "../../api/product";

const FILTER_NAME = {
  recent: "최신순",
  favorite: "좋아요순",
};

function getFetchingSiceByDevice(isMobile: boolean, isTablet: boolean) {
  if (isMobile) return 4;
  if (isTablet) return 6;
  return 10;
}

type FilterName = {
  recent: string;
  favorite: string;
};

function Items() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(max-width: 1199px)");
  const [bests, setBests] = useState<Item[]>([]);
  const [sells, setSells] = useState<Item[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [filter, setFilter] = useState<keyof FilterName>("recent");

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
        pageSize: getFetchingSiceByDevice(isMobile, isTablet),
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
        <Container pt={24}>
          <ItemTop>
            <ItemTop.Title>베스트 상품</ItemTop.Title>
          </ItemTop>
          <BestItemList items={bests} />
        </Container>
        <Container mt={40}>
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
          <SellItemList items={sells} />
        </Container>
        <Pagnation
          page={page}
          setPage={setPage}
          pageCount={Math.ceil(
            total / getFetchingSiceByDevice(isMobile, isTablet)
          )}
        />
      </main>
    </>
  );
}

export default Items;
