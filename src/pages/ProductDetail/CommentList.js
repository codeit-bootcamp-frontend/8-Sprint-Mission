import { useParams } from "react-router-dom";
import { getCommentById } from "../../api";
import useFetch from "../../hooks/useFetch";
import "./CommentList.css";
import emptyComment from "../../images/empty_comment_img.png";
import FormatRelativeTime from "../../utils/FormatRelativeTime";

function CommentList() {
  const { productId } = useParams();

  const {
    data: comments,
    error,
    loading,
  } = useFetch(async () => {
    const result = await getCommentById(productId);
    return result.list;
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (comments.length === 0) {
    return (
      <div className="empty-comment">
        <img src={emptyComment} alt="No comments" />
        <p>아직 문의가 없습니다.</p>
      </div>
    );
  }

  return (
    <div>
      <section className="comment-section">
        <ul className="comment-section__list">
          {comments.map(({ id, content, updatedAt, writer }) => (
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
                    <FormatRelativeTime time={updatedAt} />
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
