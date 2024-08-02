import ProductList from "../components/ProductList/ProductList";
import BestProductList from "../components/BestProductList/BestProductList";
import Button from "../components/Button/Button";
import { useEffect, useState } from "react";
import { getProducts } from "../api";
import "./Items.css";
import { Link, useNavigate } from "react-router-dom";
import PageNation from "../components/pageNation/PageNation";
import { Item } from "../components/ProductList/ProductList";

interface orderQuery {
  order: string;
  page: number;
  pageSize: number;
}

function Items() {
  const navigate = useNavigate();

  const [order, setOrder] = useState("recent");
  const [item, setItem] = useState<Item[]>([]);
  const [totalCount, setTotalCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    handleLoad({ order, page: currentPage, pageSize });
  }, [order, currentPage]);

  useEffect(() => {
    setTotalPages(Math.ceil(totalCount / pageSize));
    //Math.ceil(전체 컨텐츠 개수 / 한 페이지에 보여주고자 하는 컨텐츠의 개수)
  }, [item]);

  const SortedItems = item.sort((a, b) => {
    if (order === "favorite") {
      return (b.favoriteCount || 0) - (a.favoriteCount || 0);
    } else {
      return (b.id || 0) - (a.id || 0);
    }
  });

  const handleFavorite = () => setOrder("favorite");
  const handleRecent = () => setOrder("recent");

  const handleLoad = async (orderQuery: orderQuery) => {
    const { list, totalCount } = await getProducts(orderQuery);
    setItem(list);
    setTotalCount(totalCount);
  };

  const handleAddItemClick = () => {
    navigate("/additem");
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>베스트 상품</h1>
      <BestProductList></BestProductList>

      <div className="saleProductTitle">
        <h1>판매 중인 상품</h1>
        <div className="titleRight">
          <input
            id="search"
            name="search"
            type="search"
            placeholder="검색할 상품을 입력해주세요"
            className="productSearch"
          />
          <Button onClick={handleAddItemClick}>상품 등록하기</Button>

          <select>
            <option onClick={handleRecent} value="Recent">
              최신순
            </option>
            <option onClick={handleFavorite} value="favorite">
              좋아요순
            </option>
          </select>
        </div>
      </div>

      <ProductList items={SortedItems}></ProductList>

      <PageNation
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></PageNation>
    </div>
  );
}

export default Items;
