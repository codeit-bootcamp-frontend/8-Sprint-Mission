import styles from './BestArticleCard.module.scss';

import { BasicType } from '@/src/types/BasicTypes';
import Image from 'next/image';
import icBest from '@/src/assets/images/icons/ic_medal.svg';
import { formatUpdatedAt } from '@/src/lib/utils/\bDateUtil';

type BestArticleCardProps = Pick<
  BasicType,
  'title' | 'writer' | 'likeCount' | 'createdAt' | 'image' | 'id'
>;

const BestArticleCard = ({ ...props }: BestArticleCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.parent}>
        <div className={styles.date}>{formatUpdatedAt(props.createdAt)}</div>
        <div className={styles.group}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.articleImage}
              alt="게시물 사진"
              src="https://d21x3meyyr2jva.cloudfront.net/image_temp/1667192556000_%EB%85%B8%ED%8A%B8%EB%B6%81_%EB%A7%A5%EB%B6%81.png"
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
          <div className={styles.div2}>{props.writer.nickname}</div>
          <div className={styles.icHeartParent}>
            <div className={styles.icHeart} />
            <div className={styles.div2}>
              {props.likeCount < 9999 ? props.likeCount : '9999+'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestArticleCard;
