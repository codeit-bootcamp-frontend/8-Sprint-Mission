import { getProductDetail } from "../../lib/api";
import { useParams } from "react-router-dom";
import ItemProfile from "./components/ItemProfile";
import ItemComment from "./components/ItemComment";
import BackImg from "../../assets/ic_back.svg";
import "./ItemDetail.css";
import { useQuery } from "@tanstack/react-query";

function ItemDetail() {
  const { productId } = useParams<Record<string, string | undefined>>();

  const { data, isError } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductDetail(Number(productId)),
  });
  console.log(data);
  const product = data;

  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

  return (
    <>
      <ItemProfile product={product} />
      <ItemComment productId={Number(productId)} />
      <section className="go-back">
        <div className="title">목록으로 돌아가기</div>
        <img src={BackImg} alt="목록으로 돌아가기 이미지" />
      </section>
    </>
  );
}

export default ItemDetail;
