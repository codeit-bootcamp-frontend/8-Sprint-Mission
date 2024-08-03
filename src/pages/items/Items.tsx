import { useCallback, useEffect, useState } from "react";
import BestItem from "../../components/BestItem/BestItem";
import ItemsOnSale from "../../components/ItemsOnSale/ItemsOnSale";
import NavBar from "../../components/NavBar/NavBar";
import "../items/Items.css";
import { getApi, getApiOrderBy } from "../../components/getApi";
import PaginationBar from "../../components/PaginationBar/PaginationBar";

interface Item {
  favoriteCount: number;
  images: string;
  price: number;
  name: string;
  id: string;
}

interface ItemfetchDataValues {
  order: string;
  lowerSize: number;
  page: number;
}

interface FetchDataValues extends ItemfetchDataValues {
  upperSize: number;
}

function Items() {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(true);
  const [Bestitems, setBestItems] = useState<{ list: Item[] }>({ list: [] });
  const [items, setItems] = useState<{ list: Item[] }>({ list: [] });
  const [totalCount, setTotalCount] = useState(0);
  const [orderBy, setOrderBy] = useState<string>("recent");
  const [pageBy, setPageBy] = useState<number>(1);
  const [itemsSize, setItemsSize] = useState(0);
  // 베스트 상품 가져오기
  const bestfetchData = async (upperSize: number) => {
    try {
      const result = await getApi(upperSize);
      setBestItems(result);
    } catch (error) {
      console.error(error);
    }
  };

  // 판매 중인 상품 가져오기
  const itemfetchData = async ({ order, lowerSize = 10, page }: ItemfetchDataValues) => {
    try {
      const result = await getApiOrderBy({ order, lowerSize, page });
      setItems(result);
      setTotalCount(result.totalCount);
    } catch (error) {
      console.error(error);
    }
  };

  // 웹 페이지 가로 길이에 따라 받아올 데이터 개수 지정 후 가져오기
  const fetchDataOnResize = useCallback(
    (order = orderBy, page = pageBy) => {
      const fetchData = async ({ upperSize, lowerSize, order, page }: FetchDataValues) => {
        try {
          await Promise.all([bestfetchData(upperSize), itemfetchData({ order, lowerSize, page })]);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

      if (pageWidth < 768) {
        const upperSize = 1;
        const lowerSize = 4;
        setItemsSize(lowerSize);
        fetchData({ upperSize, lowerSize, order, page });
      } else if (pageWidth < 1199) {
        const upperSize = 2;
        const lowerSize = 6;
        setItemsSize(lowerSize);
        fetchData({ upperSize, lowerSize, order, page });
      } else {
        const upperSize = 4;
        const lowerSize = 10;
        setItemsSize(lowerSize);
        fetchData({ upperSize, lowerSize, order, page });
      }
    },
    [pageWidth, orderBy, pageBy]
  );

  // 드롭 다운 동작 시 드롭 다운의 order 값에 따라 fetch 동작
  const handleOrderChange = async (order: string) => {
    try {
      setOrderBy(order);
      fetchDataOnResize(order, pageBy);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  // 페이지네이션 동작 시 지정한 page 버튼 값에 따라 fetch 동작
  const handlePaginationChange = async (page: number) => {
    try {
      setPageBy(page);
      fetchDataOnResize(orderBy, page);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  // 리사이징 동작 시 디바운싱 이용하여 페이지의 width 값을 state에 저장
  useEffect(() => {
    let timer: number | undefined = undefined;
    const getResize = () => {
      let delay = 300;
      clearTimeout(timer);
      timer = window.setTimeout(() => {
        setPageWidth(window.innerWidth);
      }, delay);
    };
    window.addEventListener("resize", getResize);
    return () => {
      window.removeEventListener("resize", getResize);
    };
  }, []);

  // 첫 렌더링 시 fetch 함수 동작
  useEffect(() => {
    fetchDataOnResize();
  }, [fetchDataOnResize]);

  // 로딩 시 출력 화면
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <main className="main-box">
        <BestItem items={Bestitems} />
        <ItemsOnSale items={items} orderBy={orderBy} handleOrderChange={handleOrderChange} />
      </main>
      <footer className="footer-box">
        <PaginationBar
          items={items}
          totalCount={totalCount}
          pageBy={pageBy}
          itemsSize={itemsSize}
          handlePaginationChange={handlePaginationChange}
        />
      </footer>
    </>
  );
}

export default Items;
