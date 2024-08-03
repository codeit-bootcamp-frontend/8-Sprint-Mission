import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";
import { getProducts } from "../../../api/itemApi";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    // Mobile viewport
    return 1;
  } else if (width < 1280) {
    // Tablet viewport
    return 2;
  } else {
    // Desktop viewport
    return 4;
  }
};

interface ItemListProps {
  id: string;
  images: string[];
  name: string;
  price: number;
  favoriteCount: number;
}

interface FetchSortedDataProps {
  orderBy: string;
  pageSize: number;
}

function BestItemsSection() {
  const [itemList, setItemList] = useState<ItemListProps[]>([]);
  const [pageSize, setPageSize] = useState(getPageSize());

  const fetchSortedData = async ({
    orderBy,
    pageSize,
  }: FetchSortedDataProps) => {
    const products = await getProducts({ orderBy, pageSize });
    setItemList(products.list);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    // 화면 크기 변경할 때마다 pageSize를 다시 계산해 넣음
    window.addEventListener("resize", handleResize);
    fetchSortedData({ orderBy: "favorite", pageSize });

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pageSize]);

  return (
    <div className="bestItemsContainer">
      <h1 className="sectionTitle">베스트 상품</h1>

      <div className="bestItemsCardSection">
        {itemList?.map((item) => (
          <Link to={`/items/${item.id}`}>
            <ItemCard item={item} key={`best-item-${item.id}`} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BestItemsSection;
