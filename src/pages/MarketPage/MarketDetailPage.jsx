import React, { useEffect, useState } from "react";
import { getProduct } from "../../api/itemApi";
import { useParams } from "react-router-dom";
import "./MarketDetailPage.css";
import MarketDetailContent from "./MarketDetailContent";

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
    Object.keys(data).length >= 1 && (
      <MarketDetailContent data={data}></MarketDetailContent>
    )
  );
}

export default MarketDetailPage;
