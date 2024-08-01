import React from "react";
import { useState, useEffect } from "react";
import { getProductComments } from "../../../api/api";
import ModifyComment from "../../../assets/ic_kebab.svg";
import ProfileImg from "../../../assets/ic_profile.svg";
import "./CommentsList.css";

interface CommentType {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  writer: {
    nickname: string;
  };
}

interface CommentProps {
  item: CommentType;
}

const Comment = ({ item }: CommentProps) => {
  // 문자열을 Date 객체로 변환합니다
  const createdDate = new Date(item.createdAt);
  const updatedDate = new Date(item.updatedAt);

  // 두 날짜 사이의 시간 차이를 밀리초 단위로 계산합니다
  const timeDifference = updatedDate.getTime() - createdDate.getTime();

  // 밀리초를 시간으로 변환합니다
  const hoursDifference = Math.ceil(timeDifference / (1000 * 60 * 60));

  return (
    <>
      <section className="comment-title">
        <p className="content">{item.content}</p>
        <img src={ModifyComment} alt="수정 아이콘" />
      </section>
      <section className="comment-profile">
        <img src={ProfileImg} alt="프로필 이미지" />
        <div className="comment-writer">
          <p className="nickname">{item.writer.nickname}</p>
          <p className="time">{hoursDifference}시간 전</p>
        </div>
      </section>
      <hr className="comment-line-divider" />
    </>
  );
};

interface ProductIdProps {
  productId: number;
}

function CommentsList({ productId }: ProductIdProps) {
  const [comments, setComments] = useState<CommentType[]>([]);

  useEffect(() => {
    async function fetchComment() {
      if (!productId) return;
      const params = { limit: 10 };
      try {
        const data = await getProductComments({ productId, params });
        setComments(data.list);
      } catch (error) {
        console.error("상품 코멘트를 가져오는 중 오류 발생:", error);
      }
    }
    fetchComment();
  }, [productId]);

  return (
    <div className="comment-list-container">
      {comments.map((item) => (
        <Comment item={item} key={item.id} />
      ))}
    </div>
  );
}

export default CommentsList;
