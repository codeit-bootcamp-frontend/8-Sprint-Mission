import styles from './BasicArticleCard.module.scss';

import Link from 'next/link';
import Image from 'next/image';
import { formatUpdatedAt } from '@lib/utils/DateUtil';
import { BasicType } from '@type/BasicTypes';

type BasicArticleCardProps = Pick<BasicType, 'article'>;

const BasicArticleCard = ({ ...props }: BasicArticleCardProps) => {
  const dateString = formatUpdatedAt(props.article.createdAt);

  return (
    <>
      <Link
        className={styles['card__wrapper']}
        href={`/boards/${props.article.id}`}
      >
        <div className={styles['card__titleWrapper']}>
          <p className={styles['card__title']}>{props.article.title}</p>
          {props.article.image && (
            <div className={styles['card__thumnailWrapper']}>
              <div className={styles['card__ImageWrapper']}>
                <Image
                  fill
                  src={props.article.image}
                  alt={`${props.article.id}번 게시글 이미지`}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          )}
        </div>

        <div className={styles['card__infoWrapper']}>
          <div className={styles['card__info']}>
            {props.article.writer.nickname}
            <div className={styles['card__timestamp']}>{dateString}</div>
          </div>

          {/* <LikeCountDisplay count={article.likeCount} iconWidth={24} gap={8} /> */}
        </div>
      </Link>
    </>
  );
};

export default BasicArticleCard;
