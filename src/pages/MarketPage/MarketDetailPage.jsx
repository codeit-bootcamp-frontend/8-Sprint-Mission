import React, { useEffect, useState } from "react";
import { getProduct } from "../../api/itemApi";
import { useParams } from "react-router-dom";
import "./MarketDetailPage.css";
import { ReactComponent as Heart } from "../../assets/images/icons/ic_heart.svg";

function MarketDetailPage() {
  const parm = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    getProduct(parm.id).then((data) => {
      if (data) {
        setData(data);
      }
    });
  }, [parm.id]);

  return (
    // Object.keys(data).length >= 1 && (
    <div className="MarketDetailItem">
      <img
        className="MarketDetailItem-img"
        src={data.images}
        alt={data.title}
      />
      <div className="MarketDetailContentContainer">
        <div className="MarketMarketDetailContent">
          <p className="itemName">{data.name}</p>
          <p className="itemPrice">{data.price}원</p>
          <hr className="line" />
          <p className="itemIntroduce">상품소개 </p>
          <p className="itemDescription">{data.description}</p>
          <p className="itemTagName">상품 태그</p>
          <div style={{ display: "flex", gap: "10px" }}>
            {data.tags &&
              data.tags.map((v, i) => {
                return (
                  <span className="itemTag" key={i}>
                    # {v}
                  </span>
                );
              })}
          </div>
        </div>

        <div className="likeContainer">
          <span className="like">
            <Heart /> {data.favoriteCount}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MarketDetailPage;
