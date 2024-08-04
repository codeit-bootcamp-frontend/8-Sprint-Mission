import ImageCard from '../../cards/ImageCard/ImageCard';
import styles from './CommentItem.module.scss';

interface CommentItemProps {
  profileImageSrc: string;
  nickname: string;
  content: string;
  updatedAt: string;
}

export default function CommentItem({
  profileImageSrc,
  nickname = 'nickname',
  content = 'content',
  updatedAt = '0시간 전',
}: CommentItemProps) {
  return (
    <>
      <div className={styles.comment}>
        <p className={styles.comment__content}>{content}</p>
        <div className={styles['comment__wrapper-info']}>
          <div className={styles.comment__avatar}>
            <ImageCard
              imageSrc={profileImageSrc}
              ImgDeafault={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrYO97QZyLAUdjVTXl8n2tzoce2lBmZMBf1g&s'
              }
              isRound={true}
            />
          </div>
          <div className={styles['comment__wrapper-nickname']}>
            <div className={styles['comment__nickname']}>{nickname}</div>
            <div className={styles['comment__updated-at']}>{updatedAt}</div>
          </div>
        </div>
      </div>
    </>
  );
}
