import styles from './ArticleSection.module.scss';

import SectionTitle from '@core/ui/SectionTitle/SectionTitle';
import { ArticleDetailResponse } from '@type/ArticleTypes';
import HorizontalLine from '@core/ui/lines/HorizontalLine/HorizontalLine';
import UIImage from '@core/ui/UIImage/UIImage';
import IconProfile from '@assets/images/icons/ic_profile.svg';
import { formatUpdatedAt } from '@lib/utils/DateUtil';
import VerticalLine from '@core/ui/lines/VerticalLine/VerticalLine';
import UIButton from '@core/ui/buttons/UIButton/UIButton';
import IconHeart from '@assets/images/icons/ic_heart.svg';

type ArticleSectionProps = { article: ArticleDetailResponse };

const ArticleSection = ({ article }: ArticleSectionProps) => {
  return (
    <>
      <div className={styles['article']}>
        <div className={styles['article__header']}>
          {/* <SectionTitle title={article.title || ''} /> */}
          <SectionTitle title={'제목입니다'} />
          <div className={styles['article__meta']}>
            <UIImage
              className={styles['article__avatar']}
              isRound={true}
              src={IconProfile}
              // src={article.image}
              alt="게시글 작성자 사진"
            />
            {/* <p>{article.writer?.nickname}</p> */}
            <p className={styles['article__nickname']}>{'총명한 판다'}</p>
            <p className={styles['article__date']}>
              {article.createdAt
                ? formatUpdatedAt(article.createdAt)
                : '2024.01.02'}
            </p>
            <VerticalLine />
            <UIButton className={styles['article__likeButton']} type="like">
              <UIImage
                className={styles['article__heartIcon']}
                src={IconHeart}
                alt="하트 아이콘"
              />
              {article.likeCount || 123}
            </UIButton>
          </div>
          <HorizontalLine />
        </div>
        <div className={styles['article__contentWrapper']}>
          <p className={styles['article__content']}>
            {article.content ||
              '맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?'}
          </p>
        </div>
      </div>
    </>
  );
};

export default ArticleSection;
