import React, { useEffect, useState } from "react";
import { getProduct } from "../../api/itemApi";
import { useParams } from "react-router-dom";

function MarketDetailPage() {
  const parm = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    getProduct(parm.id).then((data) => {
      if (data) {
        setData(data);
      }
    });
  });

  return (
    Object.keys(data).length >= 1 && (
      <div className="wrapper">{JSON.stringify(data, null, 2)}</div>
    )
  );
}

export default MarketDetailPage;
