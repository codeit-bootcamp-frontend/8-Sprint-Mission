import { MouseEvent, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import ItemList from "./ItemList";
import SortOptions from "../SortOptions/SortOptions";
import SearchForm from "../SearchForm/SearchForm";
import LinkButton from "../../ui/Button/LinkButton";
import Section from "../../ui/Section/Section";
import Loading from "../../ui/Loading/Loading";
import styles from "./AllProduct.module.css";
import { ResponseProducts } from "./@types/Products";
import { useProducts } from "../../hooks/useProduts";

interface Options {
  currentPage: number;
  size: number;
  keyword: string;
  order: string;
}

const DEVICE_SIZE = {
  mobile: 768,
  tablet: 1199,
};

const getResponseProducts: () => ResponseProducts = () => {
  let windowWidth = window.innerWidth;

  if (windowWidth < DEVICE_SIZE.mobile) {
    return 4;
  } else if (windowWidth < DEVICE_SIZE.tablet) {
    return 6;
  } else {
    return 10;
  }
};

export default function AllProduct() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);
  const [options, setOptions] = useState<Options>({
    currentPage: Number(searchParams.get("page")) || 1,
    size: getResponseProducts(),
    keyword: "",
    order: "recent",
  });

  const {
    allProductsData: itemList = [],
    allProductsLoading: isLoading,
    allProductsIsError: isError,
    allProductsError: error,
    maxProducts: maxPage,
  } = useProducts(options);

  sessionStorage.setItem("page", searchParams.get("page"));

  const showSortOptionHandler = () => {
    setIsSortOpen((prev) => !prev);
  };

  const sortHandler = (e: MouseEvent<HTMLElement>) => {
    const sortType = e.currentTarget.dataset.type;
    setOptions((prevOption) => ({
      ...prevOption,
      order: sortType,
    }));
    setIsSortOpen(false);
  };

  const searchHandler = (value: string) => {
    searchParams.set("page", "1");
    setOptions((prev) => ({
      ...prev,
      keyword: value,
    }));
  };

  useEffect(() => {
    const newPage = Number(searchParams.get("page")) || 1; // 새로운 페이지 가져오기
    setOptions((prevOptions) => ({
      ...prevOptions,
      currentPage: newPage, // currentPage 업데이트
    }));
  }, [searchParams]); // searchParams가 변경될 때마다 실행

  useEffect(() => {
    const handleResize = () => {
      const newSize = getResponseProducts();
      setOptions((prevOption) => {
        if (prevOption.size === newSize) {
          return prevOption;
        } else {
          return {
            ...prevOption,
            size: getResponseProducts(),
          };
        }
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const pageHandler = (page: string) => {
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };

  const sortText = options.order === "recent" ? "최신순" : "좋아요순";

  if (itemList.length === 0) return <div>상품이 없습니다.</div>;

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <Section>
      <div className={styles.productHeader}>
        <div className={styles.titleContainer}>
          <h2 className={styles.productTitle}>판매 중인 상품</h2>
        </div>
        <SearchForm className={styles.form} searchHandler={searchHandler} />
        <LinkButton
          className={styles.addItem}
          to="../additem"
          btnName="상품 등록하기"
        />
        <SortOptions
          isOpen={isSortOpen}
          showOptions={showSortOptionHandler}
          sortHandler={sortHandler}
          sortText={sortText}
        />
      </div>
      <div className={styles.productList}>
        {isLoading && itemList.length === 0 ? (
          <Loading className={styles.loading} />
        ) : (
          <div className={styles.listContainer}>
            {itemList &&
              itemList.map((list) => (
                <ItemList key={`product-${list.id}`} {...list} />
              ))}
          </div>
        )}
      </div>
      <Pagination
        maxPage={maxPage}
        currentPage={options.currentPage}
        pageHandler={pageHandler}
      />
    </Section>
  );
}
