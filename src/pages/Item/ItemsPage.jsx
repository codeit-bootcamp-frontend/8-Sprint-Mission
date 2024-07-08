import { useParams } from "react-router-dom";
import { useState } from "react";
import "./ItemsPage.css";

import Header from "../../components/Layout/Header";

import useProductId from "../../hooks/useProductId";
import useInquery from "../../hooks/useInquiry";

import ItemDetails from "./components/ItemDetails";
import InqueryForm from "./components/InqueryForm";
import InqueryList from "./components/InqueryList";

function ItemsPage() {
  const { productId } = useParams();
  const { product } = useProductId(productId);
  const { inquiries } = useInquery(productId);

  const [newComment, setNewComment] = useState("");

  const handleSubmit = () => {
    alert("문의하기가 등록되었습니다.");
    setNewComment("");
  };

  return (
    <>
      <title>판다마켓</title>
      <Header />
      <main className="main-top">
        <ItemDetails product={product} />
        <section className="inquiry-wrap">
          <InqueryForm
            newComment={newComment}
            setNewComment={setNewComment}
            handleSubmit={handleSubmit}
          />
          <InqueryList inquiries={inquiries} />
        </section>
      </main>
    </>
  );
}

export default ItemsPage;
