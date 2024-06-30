import { Fragment, useEffect, useState } from "react";
import "./style/BestCard.css";
import { getProducts } from "../../../API/ItemAPI";

export const getTopFavoriteItems = (data, n) => {
  const sortedItems = data.list.sort(
    (a, b) => b.favoriteCount - a.favoriteCount
  );
  return sortedItems.slice(0, n);
};

export function CardItem({ item }) {
  return (
    <Fragment>
      <img className="CardImg" src={item.images} alt={item.name} />
      <h1>{item.name}</h1>
      <p>{item.price}원</p>
      <p>{item.ownerId}</p>
    </Fragment>
  );
}

function BestCard() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const fetchAndProcessData = async () => {
      try {
        const data = await getProducts();
        const topFavoriteItems = getTopFavoriteItems(data, 4);
        setItemList(topFavoriteItems);
      } catch (error) {
        console.error("데이터를 가져오지 못했습니다", error);
      }
    };
    fetchAndProcessData();
  }, []);

  return (
    <ul className="card-container">
      {itemList.map((item) => {
        return (
          <li key={item.id}>
            <CardItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default BestCard;
