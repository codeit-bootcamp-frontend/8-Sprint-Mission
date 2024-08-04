import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./ItemsPage.scss";

import Header from "../../layout/Header";
import Loadingbar from "../../components/ui/Loadingbar";
import useProductId from "../../hooks/useProductId";
import useInquery from "../../hooks/useInquery";
import ProductInfo from "./components/ProductInfo";
import InqueryForm from "./components/InqueryForm";
import InqueryList from "./components/InqueryList";

function ItemsPage() {
  const { productId } = useParams<{ productId: string }>();
  const {
    product,
    isLoading: productLoading,
    error: productError,
  } = useProductId(Number(productId));
  const {
    inquiries,
    isLoading: inquiriesLoading,
    error: inquiriesError,
  } = useInquery(Number(productId));

  const [newComment, setNewComment] = useState<string>("");

  const handleSubmit = () => {
    alert("문의하기가 등록되었습니다.");
    setNewComment("");
  };

  if (productLoading || inquiriesLoading) {
    return (
      <div className="bg-dark">
        <Loadingbar />
      </div>
    );
  }

  if (productError) {
    return (
      <div className="error">
        <p>상품을 불러오는 데 실패했습니다.</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="error">
        <p>상품이 존재하지 않습니다.</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>판다마켓</title>
      </Helmet>
      <Header />
      <main className="main-top">
        <ProductInfo product={product} />
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
