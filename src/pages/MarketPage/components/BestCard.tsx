import { useEffect, useState } from "react";
import "./style/BestCard.css";
import { getProducts } from "../../../API/ItemAPI";
import ItemCard from "./ItemCard";

interface product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string;
  createdAt: string;
  favoriteCount: number;
  tags: string;
}

interface ProductList {
  list: product[];
}

export const getTopFavoriteItems = (
  data: ProductList,
  n: number
): product[] => {
  const sortedItems = data.list.sort(
    (a, b) => b.favoriteCount - a.favoriteCount
  );
  return sortedItems.slice(0, n);
};

function BestCard() {
  const [itemList, setItemList] = useState<product[]>([]);

  useEffect(() => {
    const fetchAndProcessData = async () => {
      try {
        const data: ProductList = await getProducts();
        const topFavoriteItems = getTopFavoriteItems(data, 4);
        setItemList(topFavoriteItems);
      } catch (error) {
        console.error("데이터를 가져오지 못했습니다", error);
      }
    };
    fetchAndProcessData();
  }, []);

  return (
    <div className="bestItemsContainer">
      <h1 className="sectionTitle">베스트 상품</h1>

      <div className="bestItemsCardSection">
        {itemList.map((item) => {
          return (
            <li key={item.id}>
              <ItemCard item={item} />
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default BestCard;
