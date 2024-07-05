import { useRouteLoaderData, json, defer, Await } from "react-router-dom";
import { Suspense } from "react";
import Section from "../ui/Section/Section";
import Loading from "../ui/Loading/Loading";
import DetailProduct from "../components/DetailProduct/DetailProduct";
import Comment from "../components/DetailProduct/Comment/Comment";

export default function ProductDetailPage() {
  const { product, comment } = useRouteLoaderData("product-detail");
  return (
    <Section>
      <Suspense fallback={<Loading />}>
        <Await resolve={product}>
          {(loadedProduct) => <DetailProduct product={loadedProduct} />}
        </Await>
      </Suspense>
      <Suspense>
        <Await resolve={comment}>
          {(loadedComment) => <Comment comment={loadedComment} />}
        </Await>
      </Suspense>
    </Section>
  );
}

async function loadProduct(id) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products/${id}`
  );

  if (!response.ok) {
    throw json({ message: "상품을 불러오지 못했습니다." }, { status: 500 });
  } else {
    const productData = await response.json();
    return productData;
  }
}

async function loadComment(id) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products/${id}/comments?limit=10`
  );
  if (!response.ok) {
    throw new Error("댓글 불러오기 실패");
  }
  const { list } = await response.json();
  return list;
}

export async function loader({ request, params }) {
  const id = params.productId;
  return defer({
    product: loadProduct(id),
    comment: loadComment(id),
  });
}
