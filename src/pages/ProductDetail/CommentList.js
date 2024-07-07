import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getCommentById } from "../../api";
import "./CommentList.css";

function CommentList() {
  const { productId } = useParams();
  const [comment, setComment] = useState(null);
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

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <section className="commment-section">
        <ul>
          {comment.map(({ id, content, updateAt, writer }) => (
            <li key={id} className="comment-list-item">
              <img
                className="commment-writer-img"
                src={writer.image}
                alt="프로필 이미지"
              />
              <div className="detail-container">
                <h1 className="commment-writer">{writer.nickname}</h1>
                <p className="commment-content">{content}</p>
                <p className="commment-updateAt">{updateAt}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CommentList;
