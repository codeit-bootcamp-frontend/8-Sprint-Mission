import { MouseEvent, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllProduct } from "../../utils/http";
import { useAsyncStatus } from "../../hooks/useAsyncStatus";
import Pagination from "../Pagination/Pagination";
import ItemList from "./ItemList";
import SortOptions from "../SortOptions/SortOptions";
import SearchForm from "../SearchForm/SearchForm";
import LinkButton from "../../ui/Button/LinkButton";
import Section from "../../ui/Section/Section";
import Loading from "../../ui/Loading/Loading";
import styles from "./AllProduct.module.css";
import { ResponseProducts } from "./@types/Products";

interface Options {
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
  const {
    loading,
    error,
    fetchData: itemList,
    totalItem: maxPage,
    fetchProducts,
  } = useAsyncStatus(getAllProduct, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);
  const [options, setOptions] = useState<Options>({
    size: getResponseProducts(),
    keyword: "",
    order: "recent",
  });

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
    const storedPage: string = sessionStorage.getItem("page");
    searchParams.set("page", storedPage === "null" ? "1" : storedPage);
    setSearchParams(searchParams);
  }, []);

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

  useEffect(() => {
    const query = {
      currentPage: Number(searchParams.get("page")) || undefined,
      order: options.order,
      size: options.size,
      keyword: options.keyword,
    };
    fetchProducts({ query });
  }, [searchParams, options]);

  const pageHandler = (page: string) => {
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };

  const sortText = options.order === "recent" ? "최신순" : "좋아요순";

  if (error) {
    return <p>{error}</p>;
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
        {loading ? (
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
      <Pagination maxPage={maxPage} pageHandler={pageHandler} />
    </Section>
  );
}
