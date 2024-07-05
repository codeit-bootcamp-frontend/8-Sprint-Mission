import "./Comment.css";

function Comment({ comment }) {
  const {
    writer: { image, nickname },
    content,
    updateAt,
  } = comment;

  const updateDate = new Date(updateAt);
  const updatedTime = new Date(updateAt) - new Date();

  return (
    <div className="comment-wrapper">
      <div className="comment-content">{content}</div>
      <div className="writer">
        <img
          className="writer image"
          src={image}
          alt={nickname}
          width="40px"
          height="40px"
        />
        <div className="writer nickname">{nickname}</div>
        <div>{updateAt}</div>
      </div>
    </div>
  );
}

export default Comment;
