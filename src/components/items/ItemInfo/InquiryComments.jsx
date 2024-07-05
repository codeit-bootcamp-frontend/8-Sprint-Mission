import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProductComments } from "../../../core/api";

const INITIAL_COMMENTS = {
  id: 0,
  content: "",
  createdAt: "",
  updatedAt: "",
  writer: { id: 0, image: "", nickname: "" },
};

function InquiryComments({ productId, limit }) {
  const [comments, setComments] = useState([INITIAL_COMMENTS]);
  const navigate = useNavigate();

  //get comments data
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await getProductComments({ productId, limit });
        setComments(data.list);
      } catch (error) {
        console.error("fetchComments 실패:", error);
      }
    };

    fetchComments();
  }, [productId, limit]);

  function countTime(comment) {
    const now = new Date();
    const createdAt = new Date(comment.createdAt);
    const diff = (now - createdAt) / 60000;

    if (diff < 60) {
      return `${Math.floor(diff)}분 전`;
    } else if (diff < 1440) {
      // 1440분 = 24시간
      return `${Math.floor(diff / 60)}시간 전`;
    } else {
      return `${Math.floor(diff / 1440)}일 전`;
    }
  }

  return (
    <section className="inquiry-comments">
      <ul className="comments-ul">
        {comments.map((comment) => (
          <li className={`comments-li-${comment.id}`} key={comment.id}>
            <p>{comment.content}</p>
            <div className="comment-user-info">
              <img className="comment-user-img" src={comment.writer.image} />
              <span className="comment-user-name">
                {comment.writer.nickname}
              </span>
              <p className="comment-user-times">{countTime(comment)}</p>
            </div>
            <div className="line" />
          </li>
        ))}
      </ul>
      <button className="back-btn" onClick={() => navigate(-1)}>
        목록으로 돌아가기
        <div className="ic-back" />
      </button>
    </section>
  );
}
export default InquiryComments;
