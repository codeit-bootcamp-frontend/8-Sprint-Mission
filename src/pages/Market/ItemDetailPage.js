import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductDetail, getProductComments } from "../../api/api";

import Header from "../../components/@shared/Header/Header";
import ProductDetails from "../../components/Market/ProductDetails";
import ProductCommentInput from "../../components/Market/ProductCommentInput";
import ProductDetailComments from "../../components/Market/ProductDetailComments";
import ReturnToListBtn from "../../components/Market/ReturnToListBtn";
import StyledLink from "../../components/@shared/StyledLink";

function ItemDetailPage() {
  const [details, setDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentsCursor, setCommentsCursor] = useState(null);
  const params = useParams();

  /**
   * 상품 디테일 정보를 요청하고 디테일을 받아옴
   * @param {string} productId - 상품 ID
   */
  const handleProductDetailLoad = async ({ productId }) => {
    const { name, description, price, tags, favoriteCount, isFavorite } =
      await getProductDetail({ productId });
    setDetails({ name, description, price, tags, favoriteCount, isFavorite });
  };

  /**
   * 해당 상품 정보에 달린 댓글을 불러옴
   * @param {string} prouctId - 상품 ID
   * @param {number} limit - 한번에 불러올 댓글 개수
   */
  const handleProductComments = async ({ productId, limit = 3 }) => {
    const { list, nextCursor } = await getProductComments({ productId, limit });
    setComments(list);
    setCommentsCursor(nextCursor);
  };

  // 최초 페이지 정보를 로드
  useEffect(() => {
    const productId = params.itemId;
    handleProductDetailLoad({ productId });
    handleProductComments({ productId });
  }, []);

  return (
    <>
      <Header pageType="item" />
      <ProductDetails details={details} />
      <ProductCommentInput />
      <ProductDetailComments comments={comments} />
      <StyledLink to="/items">
        <ReturnToListBtn />
      </StyledLink>
    </>
  );
}

export default ItemDetailPage;
