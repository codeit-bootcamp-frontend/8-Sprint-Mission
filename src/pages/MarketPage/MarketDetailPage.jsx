import React, { useEffect, useState } from "react";
import { getProduct, getComments } from "../../api/itemApi";
import { useParams } from "react-router-dom";
import "./MarketDetailPage.css";
import MarketDetailContent from "./MarketDetailContent";
import MarketDetailComment from "./MarketDetailComment";

function MarketDetailPage() {
  const parm = useParams();
  const [data, setData] = useState({});
  const [comments, setComments] = useState({});

  useEffect(() => {
    getProduct(parm.id).then((data) => {
      if (data) {
        setData(data);
      }
    });
    getComments(parm.id).then((comments) => {
      if (comments && comments.list.length > 0) {
        setComments(comments.list);
      }
    });
  }, [parm.id]);

  return (
    Object.keys(data).length >= 1 && (
      <div>
        <MarketDetailContent data={data}></MarketDetailContent>
        <MarketDetailComment comments={comments}></MarketDetailComment>
      </div>
    )
  );
}

export default MarketDetailPage;
