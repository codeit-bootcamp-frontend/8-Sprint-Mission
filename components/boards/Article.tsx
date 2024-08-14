import styles from './Article.module.scss';
import likeImg from '@/public/images/market/like-icon.png';
import profileIcon from '@/public/images/@shared/profile-icon.png';
import Image from 'next/image';

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
        <Image src={imageUrl} alt={'게시글 썸네일'} height={72} width={72} />
      </div>

      <div className={styles.articleInfo}>
        <div className={styles.profileArea}>
          <Image
            src={profileIcon}
            alt={'프로필 썸네일'}
            height={24}
            width={24}
          />
          <span className={styles.name}>{nickname}</span>
          <span className={styles.createdAt}>{createdAt}</span>
        </div>
        <div className={styles.likeArea}>
          <Image src={likeImg} alt={'좋아요 아이콘'} height={24} width={24} />
          <span>{likeCount}</span>
        </div>
      </div>
    </article>
  );
}

export default Article;
