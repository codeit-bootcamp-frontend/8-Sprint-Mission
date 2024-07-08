import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ReactComponent as HeartIcon } from "@assets/icons/ic_heart.svg";
import { getProduct } from "@js/itemApi";

import Input from "@components/UI/jsx/Input";
import Button from "@components/UI/jsx/Button";
import "@pages/ProductPage/ProductPage.scss";

import default_image from "@assets/ItemsPage/alt_image.png"; // 테스트 이미지

function ProductPage() {
  // State
  const [product, setProduct] = useState();
  const [comment, setComment] = useState("");

  // useParams()
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // 유효하지 않은 productId 확인 로직 (예: 숫자가 아닌 경우)
    if (!productId || isNaN(productId)) {
      navigate("/items");
    }
  }, [productId, navigate]);

  const fetchData = async ({ productId }) => {
    const product = await getProduct({ productId });
    setProduct(product);
  };

  const onErrorImg = (e) => {
    e.target.src = default_image;
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setComment(value); // 파일 또는 값을 State에 반영
  };

  const handleCommentAdd = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const commentValue = e.target.value.trim();

      e.target.value = "";
    }
  };

  // 페이지 로드 시,
  useEffect(() => {
    fetchData({ productId });
  }, []);

  return (
    <main className="productPage">
      <section className="productPage__infoSection infoSection">
        <img
          className="infoSection__img"
          alt="상품 이미지"
          src="@assets/ItemsPage/alt_image.png"
          onError={onErrorImg}
        />
        <div className="infoSection__info">
          <div className="infoSection__infoHeader">
            <h1 className="infoSection__name">아이패드 미니 팔아요</h1>
            <span className="infoSection__price">500,000원</span>
          </div>
          <hr className="globalDivider" />
          <div className="infoSection__infoBody">
            <label className="infoSection__contentHeader">상품 소개</label>
            <p className="infoSection__description">
              액정에 잔기스랑 주변부 스크래치있습니다만 예민하신분아니면 전혀
              신경쓰이지않을정도입니다. 박스 보관중입니다. 메모용과
              넷플릭스용으로만쓰던거라 뭘 해보질 않아 기능이나 문제점을
              못느꼈네요 잘 안써서 싸게넘깁니다! 택배거래안합니다.
            </p>
            <label className="infoSection__contentHeader">상품 태그</label>
            {/* 반복문 사용으로 태그 로딩 */}
            {/* 좋아요 수 표시 */}
          </div>
        </div>
      </section>
      <hr className="globalDivider" />
      <section className="productPage__commentSection commentSection">
        <div>
          <label className="commentSection__contentHeader">문의하기</label>
          <form>
            <Input
              type="text"
              id="comment"
              name="comment"
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              onChange={handleChange}
              onKeyDown={handleCommentAdd}
              value={comment}
            />
            <Button className="commentSection__commentSubmit" type="submit">
              등록
            </Button>
          </form>
        </div>
        <div>
          혹시 사용기간이 어떻게 대충 프로필 이미지 사용자명 게시한 시간 ---
          구분선 --- 어쩌구 --- 구분선 ---
          <Button
            to="/items"
            className="commentSection__goToItems"
            size="medium"
          >
            목록으로 돌아가기
          </Button>
        </div>
      </section>
    </main>
  );
}

export default ProductPage;
