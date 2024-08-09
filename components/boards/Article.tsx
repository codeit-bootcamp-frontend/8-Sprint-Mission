import CustomImage from '../@shared/CustomImage';
import styles from './Article.module.scss';
import sampleImage from '@/public/images/@shared/no-image-placeholder.png';
import likeImg from '@/public/images/market/like-icon.png';
import profileIcon from '@/public/images/@shared/profile-icon.png';

interface ArticleProps {
  title: string;
  imageUrl: string;
  likeCount: number;
  createdAt: string;
  nickname: string;
}

function Article({
  title,
  imageUrl,
  likeCount,
  createdAt,
  nickname,
}: ArticleProps) {
  return (
    <article className={styles.articleContainer}>
      <div className={styles.titleArea}>
        <div>{title}</div>
        <CustomImage
          src={imageUrl}
          alt={'게시글 썸네일'}
          height={72}
          width={72}
        />
      </div>

      <div className={styles.articleInfo}>
        <div className={styles.profileArea}>
          <CustomImage
            src={profileIcon}
            alt={'프로필 썸네일'}
            height={24}
            width={24}
            radius={50}
          />
          <span className={styles.name}>{nickname}</span>
          <span className={styles.createdAt}>{createdAt}</span>
        </div>
        <div className={styles.likeArea}>
          <CustomImage
            src={likeImg}
            alt={'좋아요 아이콘'}
            height={24}
            width={24}
          />
          <span>{likeCount}</span>
        </div>
      </div>
    </article>
  );
}

export default Article;
