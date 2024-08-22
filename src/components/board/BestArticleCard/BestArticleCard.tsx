import styles from './BestArticleCard.module.scss';

import Image from 'next/image';
import icBest from '@assets/images/icons/ic_medal.svg';
import { formatUpdatedAt } from '@lib/utils/DateUtil';
import { Article } from '@type/ArticleTypes';

type BestArticleCardProps = {
  article: Article;
};

const BestArticleCard = ({ article }: BestArticleCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <time className={styles.date}>
          {formatUpdatedAt(article.createdAt)}
        </time>
      </div>
      <main className={styles.content}>
        <h2 className={styles.title}>{article.title}</h2>
        <figure className={styles.imageWrapper}>
          <Image
            className={styles.articleImage}
            alt={`${article.title} 관련 이미지`}
            src={article.image || ''}
            width={50}
            height={50}
          />
        </figure>
        <aside className={styles.bestBadge} aria-label="베스트 게시물">
          <Image
            className={styles.bestIcon}
            alt=""
            src={icBest}
            width={20}
            height={20}
          />
          <span className={styles.bestText}>Best</span>
        </aside>
      </main>
      <div className={styles.footer}>
        <address className={styles.author}>
          <span className={styles.authorName}>{article.writer?.nickname}</span>
        </address>
        <div className={styles.icHeartParent}>
          <div className={styles.icHeart} />
          <div className={styles.likeCount}>
            {article.likeCount < 9999 ? article.likeCount : '9999+'}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BestArticleCard;
