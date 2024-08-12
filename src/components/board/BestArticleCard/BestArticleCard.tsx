import styles from './BestArticleCard.module.scss';

import Image from 'next/image';
import icBest from '@/src/assets/images/icons/ic_medal.svg';
import { formatUpdatedAt } from '@/src/lib/utils/DateUtil';
import { Article } from '@/src/types/ArticleTypes';

type BestArticleCardProps = {
  article: Article;
};

const BestArticleCard = ({ article }: BestArticleCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.parent}>
        <div className={styles.date}>{formatUpdatedAt(article.createdAt)}</div>
        <div className={styles.group}>
          <div className={styles.title}>{article.title}</div>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.articleImage}
              alt="게시물 사진"
              src={article.image}
              width={50}
              height={50}
            />
          </div>
        </div>
        <div className={styles.imgBadge}>
          <div className={styles.listCommunityicMedalParent}>
            <div className={styles.listCommunityicMedal}>
              <div className={styles.listCommunityicMedalChild} />
              <Image
                className={styles.vectorIcon}
                alt="베스트 아이콘"
                src={icBest}
              />
            </div>
            <div className={styles.best}>Best</div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.div2}>{article.writer.nickname}</div>
          <div className={styles.icHeartParent}>
            <div className={styles.icHeart} />
            <div className={styles.div2}>
              {article.likeCount < 9999 ? article.likeCount : '9999+'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestArticleCard;
