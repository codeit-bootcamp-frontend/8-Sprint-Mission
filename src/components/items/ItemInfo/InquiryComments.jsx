import React from "react";
import { useNavigate } from "react-router-dom";
import { getProductComments } from "../../../core/api";
import { INITIAL_COMMENTS } from "../../../constants";
import useFetch from "../../../lib/hooks/useFetch";
import { countTime } from "../../../lib/utils/countTime";

function InquiryComments({ productId, limit }) {
  const { data: commentsData } = useFetch(
    getProductComments,
    { productId, limit },
    { list: [INITIAL_COMMENTS] }
  );
  const navigate = useNavigate();

  const comments = commentsData.list;

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
