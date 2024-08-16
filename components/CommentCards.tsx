import style from "@/components/CommentCards.module.css";
import Best from "@/image/icons/ic_best.svg";
import Heart from "@/image/icons/ic_heart.svg";
import { Comment } from "@/api/types/comment";

interface CommentProps {
  comments: Comment[];
  showBest?: boolean;
}

const CommentCards: React.FC<CommentProps> = ({
  comments,
  showBest = false,
}) => {
  return (
    <>
      {comments.map((comments) => (
        <div key={comments.id} className={style.cardcontainer}>
          {showBest && <Best className={style.besticon} />}
          <div className={style.sectioncontent}>
            <p className={style.commentcontent}>{comments.content}</p>
            <img
              src={comments.image}
              alt={comments.title}
              className={style.commentimage}
            />
          </div>
          <div className={style.commentmetacontainer}>
            <div className={style.commentmeta}>
              <span>{comments.nickname}</span>
              <Heart />
              <span>{comments.likeCount}</span>
            </div>
            <p>{comments.createdAt}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CommentCards;
