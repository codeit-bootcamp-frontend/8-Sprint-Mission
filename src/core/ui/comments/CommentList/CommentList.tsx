import HorizontalLine from '../../lines/HorizontalLine/HorizontalLine';
import CommentItem from '../CommentItem/CommentItem';
import styles from './CommentList.module.scss';

export default function CommentList({
  initCommentCount = 3,
  comments = [],
  emptyIcon,
  emptyMessage = '',
}) {
  return (
    <>
      <div className={styles.list}>
        {comments.length > 0 &&
          comments.map((comment) => (
            <div
              className={styles['list__wrapper-item']}
              key={`comment-${comment.id}`}
            >
              <div className={styles.list__item}>
                <CommentItem
                  profileImageSrc={comment.writer.image}
                  content={comment.content}
                  nickname={comment.writer.nickname}
                  updatedAt={comment.updatedAt}
                />
              </div>
              <HorizontalLine />
            </div>
          ))}
        {comments.length < 1 && (
          <div className={styles['list__wrapper-empty']}>
            {emptyIcon}
            <span className={styles['list__empty-message']}>
              {emptyMessage}
            </span>
          </div>
        )}
      </div>
    </>
  );
}
