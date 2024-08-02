import { Link, useParams } from "react-router-dom";
import { getProducts } from "../api.js";
import { getComments } from "../api.js";
import { useCallback, useEffect, useState } from "react";

type Writer = {
  id: number;
  nickname: string;
  image: string;
};

interface Product {
  id: number;
  name: string;
  info: string;
  price: number;
  tags: string[];
  images: string;
  description: string;
  favoriteCount: number;
}

interface Comment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: Writer;
}

interface InquiryBtn {
  disabled: boolean;
  btnClass: string;
}

function ProductDetail() {
  const { productId } = useParams<{ productId: string | undefined }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentLimit, setCommentLimit] = useState<number>(3);
  const [loading, setLoading] = useState<boolean>(true);
  const [inquiryTxt, setInquiryTxt] = useState<string>("");
  const [inquiryBtn, setInquiryBtn] = useState<InquiryBtn>({
    disabled: true,
    btnClass: "",
  });

  const findProductId = (id: number) => {
    return products.find((product) => product.id === id);
  };

  const foundProduct = findProductId(Number(productId));

  const validInquiry = useCallback(() => {
    return inquiryTxt.trim() !== "";
  }, [inquiryTxt]);

  // 상품 가져오기
  useEffect(() => {
    const handleLoad = async () => {
      try {
        const { list } = await getProducts({ page: 1 });
        setProducts(list);
      } catch (error) {
        console.error("Error message:", error);
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    handleLoad();
  }, []);

  // 상품 댓글 가져오기
  useEffect(() => {
    const handleLoad = async (option: {
      productId: string | undefined;
      commentLimit: number;
    }) => {
      try {
        const { list } = await getComments(option);
        setComments(list);
      } catch (error) {
        console.error("Error message:", error);
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    handleLoad({ productId, commentLimit });
  }, [productId, commentLimit]);

  // 문의하기 유효성 검사
  useEffect(() => {
    if (validInquiry()) {
      setInquiryBtn({
        disabled: false,
        btnClass: "on",
      });
    } else {
      setInquiryBtn({
        disabled: true,
        btnClass: "",
      });
    }
  }, [validInquiry]);

  // 로딩중
  if (loading) {
    return (
      <div className="loading">
        <h2>상품 정보를 찾고 있습니다.</h2>
      </div>
    );
  }

  // 상품을 찾지 못했을 경우
  if (!foundProduct) {
    return (
      <div className="loading">
        <h2>상품을 찾지 못했습니다.</h2>
        <Link to="/Items">중고마켓 페이지로 가기</Link>
      </div>
    );
  }

  // 상품 이미지 경로 확인후 잘못된 이미지면 기본 이미지로 적용
  const imgUrl = foundProduct
    ? foundProduct.images
    : "/images/card01-small.png";

  return (
    <section className="max-wrap product-detail-wrap">
      <div className="product-detail-top">
        <div className="detail-img">
          <img src={imgUrl} alt={foundProduct.name} />
        </div>
        <div className="detail-txt-wrap">
          <div>
            <div className="detail-txt-title">
              <h2>{foundProduct.name}</h2>
              <button type="button">
                <img src="/images/i-menu.png" alt="메뉴 아이콘" />
              </button>
            </div>

            <h3>{foundProduct.price.toLocaleString("ko-KR")}원</h3>
            <hr />
            <p className="detail-txt">
              <span>상품소개</span>
              {foundProduct.description}
            </p>
            <span>상품 태그</span>
            <ul className="detail-tag">
              {foundProduct.tags.map((tag: string, i: number) => {
                return <li key={i}># {tag}</li>;
              })}
            </ul>
          </div>
          <div>
            <button className="detail-like-btn">
              <img src="/images/i-detail-like.png" alt="하트 이미지" />
              {foundProduct.favoriteCount}
            </button>
          </div>
        </div>
      </div>
      <hr className="middle-line" />
      <div className="detail-inquiry-wrap">
        <div className="detail-inquiry">
          <label htmlFor="inquiry-txt">문의하기</label>
          <textarea
            id="inquiry-txt"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            value={inquiryTxt}
            onChange={(e) => {
              setInquiryTxt(e.target.value);
            }}
          />
          <div className="inquiry-btn">
            <button
              type="button"
              className={inquiryBtn.btnClass}
              disabled={inquiryBtn.disabled}
            >
              등록
            </button>
          </div>
        </div>
        <div className="detail-inquiry-list">
          {comments.map((comment) => {
            const updateTime = new Date(comment.updatedAt);
            const currentTime = new Date();

            const timeDiff = currentTime.getTime() - updateTime.getTime();
            const resultTime = Math.round(timeDiff / (1000 * 60 * 60));
            return (
              <div key={comment.id} className="inquiry-list-txt">
                <div className="comment-title">
                  <p>{comment.content}</p>
                  <button>
                    <img src="/images/i-menu.png" alt="메뉴 아이콘" />
                  </button>
                </div>
                <div className="inquiry-list-profile">
                  <img src={comment.writer.image} alt="프로필 이미지" />
                  <div>
                    <span>{comment.writer.nickname}</span>
                    <span>{resultTime}시간 전</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="list-btn-area">
        <Link to="/Items">
          목록으로 돌아가기
          <img src="/images/i-back.png" alt="뒤로가기 아이콘" />
        </Link>
      </div>
    </section>
  );
}

export default ProductDetail;
