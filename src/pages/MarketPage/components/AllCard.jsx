import { useContext } from "react";
import { Link } from "react-router-dom";
import "./style/AllCard.css";
import ItemCard from "./ItemCard";
import { ItemContext } from "../../../context/ItemContext";

function AllCard() {
  const itemList = useContext(ItemContext);

  return (
    <div>
      <div className="allItemsSectionHeader">
        <h1 className="sectionTitle">판매 중인 상품</h1>
        <Link to="/additem" className="loginLinkButton">
          상품 등록하기
        </Link>
      </div>

      <div className="allItemsCardSection">
        {itemList.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id} className="itemLink">
            <ItemCard item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AllCard;
