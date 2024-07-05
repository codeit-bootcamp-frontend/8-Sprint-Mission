import React from "react";
import DetailCard from "./DetailCard";
import Inquiry from "./Inquiry";
import Comment from "./Comments";

function ProductDetail() {
  return (
    <div>
      <DetailCard />
      <Inquiry />
      <Comment />
    </div>
  );
}

export default ProductDetail;
