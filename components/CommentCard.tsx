import style from "@/components/CommentCard.module.css";
import Best from "@/image/icons/ic_best.svg";
import Heart from "@/image/icons/ic_heart.svg";

interface Comment {
  updateAt: string;
  createdAt: string;
  likeCount: number;
  image: string;
  content: string;
  title: string;
  nickname: string;
  id: number;
}

interface CommentProps {
  comments: Comment[];
  showBest?: boolean;
}

const CommentCard: React.FC<CommentProps> = ({
  comments,
  showBest = false,
}) => {
  return (
    <>
      {comments.map((comments) => (
        <div className={style.cardcontainer}>
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

export default CommentCard;
