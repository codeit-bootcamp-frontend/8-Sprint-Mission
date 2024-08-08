import React, { useState, useEffect } from "react";
import ItemContainer from "./ItemContainer";
import DropDownList from "../common/UI/DropDownList";
import Pagination from "./Pagination";
import { getProducts } from "../../core/api";
import useFetch from "../../lib/hooks/useFetch";
import countPageItems from "../../lib/utils/countPageItems";
import { ProductResponse } from "../../DTO/product";
import SearchForm from "../common/UI/SearchForm";
import Button from "components/common/UI/Button";

function AllItemsContainer() {
  const [page, setPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("최신순");
  const [pageSize, setPageSize] = useState<number>(countPageItems(4, 6, 10));

  const { data } = useFetch<ProductResponse>(
    getProducts,
    {
      page,
      pageSize,
      orderBy: selectedCategory === "최신순" ? "recent" : "favorite",
    },
    { list: [], totalCount: 0 }
  );

  const { list = [], totalCount = 0 } = data;

  const totalPages = Math.ceil(totalCount / pageSize);

  const handleResize = () => {
    const newPageSize = countPageItems(4, 6, 10);
    if (newPageSize !== pageSize) {
      setPageSize(newPageSize);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pageSize]);

  return (
    <>
      <section className="flex flex-col gap-6">
        <div className="flex justify-between content-center flex-wrap">
          <h1 className="font-bold text-xl content-center">판매 중인 상품</h1>
          <div className="relative flex flex-row gap-[10px]">
            <SearchForm />
            <Button buttonText="상품 등록하기" to="/addItem" />
            <DropDownList
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
        </div>
        <div className="grid grid-cols-5 grid-rows-2 gap-6">
          {list.map((item) => (
            <ItemContainer key={item.id} item={item} />
          ))}
        </div>
      </section>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </>
  );
}

export default AllItemsContainer;
