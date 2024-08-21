import styles from './ArticleCommentCard.module.scss';

import UIImage from '@core/ui/UIImage/UIImage';
import { ArticleComment } from '@type/ArticleTypes';
import IconProfile from '@assets/images/icons/ic_profile.svg';
import { formatUpdatedAt } from '@lib/utils/DateUtil';

type ArticleCommentCardProps = { comment: ArticleComment };

const ArticleCommentCard = ({ comment }: ArticleCommentCardProps) => {
  return (
    <>
      <div className={styles['card']}>
        <div className={styles['card__contentWrapper']}>
          <p className={styles['card__content']}>{comment.content}</p>
        </div>
        <div className={styles['card__metaWrapper']}>
          <div className={styles['card__profileImageWrapper']}>
            <UIImage
              className={styles['card__profileImage']}
              src={comment.writer.image || IconProfile}
              alt="댓글 작성자 사진"
            />
          </div>
          <div className={styles['card__writerWrapper']}>
            <p className={styles['card__nickname']}>
              {comment.writer.nickname}
            </p>
            <p className={styles['card__date']}>
              {formatUpdatedAt(comment.updatedAt)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCommentCard;
