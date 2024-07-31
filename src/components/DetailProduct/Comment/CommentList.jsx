import { Link } from 'react-router-dom';
import styles from './CommentList.module.css';
import convertTime from '../../../utils/convertTime';
import commentEmpty from '../../../assets/images/Img_inquiry_empty.png';
import backIcon from '../../../assets/images/ic_back.png';

export default function CommentList({ commentList }) {
  const comment = commentList.length ? (
    <ul className={styles.commentContainer}>
      {commentList.map(comment => (
        <li
          key={`${comment.writer.nickname}-${comment.id}`}
          className={styles.commentList}
        >
          <div className={styles.review}>{comment.content}</div>
          <div className={styles.userInfo}>
            <img
              className={styles.userProfile}
              src={comment.writer.image}
              alt={`${comment.writer.nickname} 프로필`}
            />
            <div className={styles.userComment}>
              <div className={styles.userName}>{comment.writer.nickname}</div>
              <div className={styles.commentTime}>
                {convertTime(comment.updatedAt)}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <div className={styles.emptyComment}>
      <img src={commentEmpty} alt="문의가 없습니다" />
      <span>아직 문의가 없습니다.</span>
    </div>
  );

  const savePagination = sessionStorage.getItem('page');

  return (
    <>
      <div>{comment}</div>
      <div className={styles.historyAction}>
        <Link
          className={styles.historyBtn}
          to={`/items?page=${savePagination}`}
        >
          목록으로 돌아가기
          <img src={backIcon} alt="목록으로 돌아가기" />
        </Link>
      </div>
    </>
  );
}
