import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getCommentById } from "../../api";
import "./CommentList.css";

function CommentList() {
  const { productId } = useParams();
  const [comment, setComment] = useState([]);
  const [error, setError] = useState(null);

  const fetchComment = useCallback(async () => {
    try {
      const result = await getCommentById(productId);
      const commentData = result.list;
      setComment(commentData);
    } catch (error) {
      setError(error.message);
    }
  }, [productId]);

  useEffect(() => {
    fetchComment();
  }, [fetchComment]);
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!comment) {
    return <div>Loading...</div>;
  }

  function formatRelativeTime(dateString) {
    const dateObject = new Date(dateString);
    const targetDate = dateObject.getTime();

    const liveDateObject = new Date();
    const now = liveDateObject.getTime();

    const diff = now - targetDate;

    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));

    if (minutes < 60) {
      return `${minutes}분 전`;
    } else if (hours < 24) {
      return `${hours}시간 전`;
    } else if (days < 31) {
      return `${days}일 전`;
    } else {
      return `${months}개월 전`;
    }
  }

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <section className="commment-section">
        <ul>
          {comment.map(({ id, content, updatedAt, writer }) => (
            <li key={id} className="comment-list-item">
              <p className="commment-content">{content}</p>
              <div className="commment-info-container">
                <img
                  className="commment-writer-img"
                  src={writer.image}
                  alt="프로필 이미지"
                />

                <h1 className="commment-writer">{writer.nickname}</h1>

                <p className="commment-updateAt">
                  {formatRelativeTime(updatedAt)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CommentList;
