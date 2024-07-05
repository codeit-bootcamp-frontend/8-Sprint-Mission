import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail, getProductComments } from "../../api/api";
import Header from "../../components/@shared/Header/Header";

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

  const elapsedTimeCalc = (comparedDate) => {
    const currentDate = new Date();
    const specificDate = new Date(comparedDate);

    console.log(`현재시각 : ${currentDate}`);
    console.log(`등록시각 : ${specificDate}`);

    const timeDifference = currentDate - specificDate;

    const min = 1000 * 60;
    const hour = min * 60;
    const day = hour * 24;
    const week = day * 7;

    if (timeDifference >= week) {
      return `${Math.floor(timeDifference / week)}주 전`;
    } else if (timeDifference >= day) {
      return `${Math.floor(timeDifference / day)}일 전`;
    } else if (timeDifference >= hour) {
      return `${Math.floor(timeDifference / hour)}시간 전`;
    } else if (timeDifference >= min) {
      return `${Math.floor(timeDifference / min)}분 전`;
    } else {
      return `방금 전`;
    }
  };

  return (
    <>
      <Header pageType="item" />
      <div className="product-detail-container">
        {comments.map((comment) => {
          const {
            writer: { nickname, image },
            content,
            updatedAt,
          } = comment;

          console.log(comment);
          console.log(elapsedTimeCalc(updatedAt));

          return (
            <div key={comment.id}>
              <div>{nickname}</div>
              <img src={image} alt="이미지" />
              <div>{updatedAt}</div>
              <div>{content}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ItemDetailPage;
