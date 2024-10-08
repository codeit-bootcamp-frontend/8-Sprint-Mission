import { Await, useParams } from "react-router-dom";
import { Suspense } from "react";
import Section from "../ui/Section/Section";
import Loading from "../ui/Loading/Loading";
import DetailProduct from "../components/DetailProduct/DetailProduct";
import Comment from "../components/DetailProduct/Comment/Comment";
import { getProductDetail, getCommentList, queryClient } from "../utils/http";
import { useQuery } from "@tanstack/react-query";

interface LoaderProps {
  request: Request;
  params: {
    productId: string;
  };
}

export default function ProductDetailPage() {
  const params = useParams();

  const {
    data: productData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["productDetail", params.productId],
    queryFn: () => getProductDetail(parseInt(params.productId, 10)),
  });

  const {
    data: commentList,
    isLoading: commentLoading,
    error: commentError,
  } = useQuery({
    queryKey: ["commentList", params.productId],
    queryFn: () => getCommentList(parseInt(params.productId, 10)),
  });

  if (isLoading || commentLoading) {
    return <Loading />;
  }

  if (error || commentError) {
    return <p>{error.message}</p>;
  }

  return (
    <Section>
      <Suspense fallback={<Loading />}>
        <Await resolve={productData}>
          {(productData) => <DetailProduct product={productData} />}
        </Await>
      </Suspense>
      <Suspense>
        <Await resolve={commentList}>
          {(commentList) => <Comment commentList={commentList} />}
        </Await>
      </Suspense>
    </Section>
  );
}

export async function loader({ params }: LoaderProps) {
  const [productDetail, commentList] = await Promise.all([
    queryClient.fetchQuery({
      queryKey: ["productDetail", params.productId],
      queryFn: () => getProductDetail(parseInt(params.productId, 10)),
    }),
    queryClient.fetchQuery({
      queryKey: ["commentList", params.productId],
      queryFn: () => getCommentList(parseInt(params.productId, 10)),
    }),
  ]);

  return {
    productDetail,
    commentList,
  };
}
