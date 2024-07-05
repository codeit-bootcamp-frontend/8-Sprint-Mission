import "./Comment.css";

import getTimeElapsed from "../../utils/getTimeElapsed";

function Comment({ comment }) {
  const {
    writer: { image, nickname },
    content,
    updatedAt,
  } = comment;

  const timeElapsed = getTimeElapsed(new Date(updatedAt));

  return (
    <div className="comment-wrapper">
      <div className="comment-content">{content}</div>
      <div className="writer-wrapper">
        <img
          className="writer image"
          src={image}
          alt={nickname}
          width="40px"
          height="40px"
        />
        <div className="comment-info">
          <div className="nickname">{nickname}</div>
          <div className="time-elapsed">{timeElapsed}</div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
