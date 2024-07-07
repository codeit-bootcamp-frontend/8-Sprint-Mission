import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getCommentById } from "../../api";
import "./CommentList.css";
import emptyComment from "../../images/empty_comment_img.png";

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

  if (comment.length === 0) {
    return (
      <div className="empty-comment">
        <img src={emptyComment} alt="No comments" />
        <p>아직 문의가 없습니다.</p>
      </div>
    );
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
      {error && <p className="comment-section__error">Error: {error}</p>}
      <section className="comment-section">
        <ul className="comment-section__list">
          {comment.map(({ id, content, updatedAt, writer }) => (
            <li key={id} className="comment-section__list-item">
              <p className="comment-section__top">{content}</p>
              <div className="comment-section__bottom">
                <img
                  className="comment-section__writer-img"
                  src={writer.image}
                  alt="프로필 이미지"
                />
                <div className="comment-section__info">
                  <h1 className="comment-section__writer">{writer.nickname}</h1>
                  <p className="comment-section__updatedAt">
                    {formatRelativeTime(updatedAt)}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CommentList;
