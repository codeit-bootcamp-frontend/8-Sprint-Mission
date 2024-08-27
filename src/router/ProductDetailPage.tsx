import { useRouteLoaderData, defer, Await } from "react-router-dom";
import { Suspense } from "react";
import Section from "../ui/Section/Section";
import Loading from "../ui/Loading/Loading";
import DetailProduct from "../components/DetailProduct/DetailProduct";
import Comment from "../components/DetailProduct/Comment/Comment";
import { getProductDetail, getCommentList } from "../utils/http";

interface LoaderProps {
  request: Request;
  params: {
    productId: string;
  };
}

interface Product {
  id: number;
  images: string;
  name: string;
  favoriteCount: number;
  tags: string[];
}

interface Comments {
  id: number;
  writer: {
    image: string;
    nickname: string;
  };
  updateAt: Date;
  content: string;
}

interface RouteData {
  product: Product;
  comment: Comments;
}

export default function ProductDetailPage() {
  const LoaderData = useRouteLoaderData("product-detail") as RouteData;
  const { product, comment } = LoaderData;
  return (
    <Section>
      <Suspense fallback={<Loading />}>
        <Await resolve={product}>
          {(loadedProduct) => <DetailProduct product={loadedProduct} />}
        </Await>
      </Suspense>
      <Suspense>
        <Await resolve={comment}>
          {(loadedComment) => <Comment commentList={loadedComment} />}
        </Await>
      </Suspense>
    </Section>
  );
}

export async function loader({ request, params }: LoaderProps) {
  const id = parseInt(params.productId, 10);
  return defer({
    product: getProductDetail(id),
    comment: getCommentList(id),
  });
}
