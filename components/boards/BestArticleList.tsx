import useArticlesQuery from '@/hooks/queries/useArticlesQuery';
import BestArticle from './BestArticle';
import styles from './BestArticleList.module.scss';
import useDynamicPageSize from '@/hooks/customs/useDynamicPageSize';

function BestArticleList() {
  const pageSize = useDynamicPageSize({ desktop: 3, tablet: 2, mobile: 1 });
  const {
    data: { list: BestArticleList },
  } = useArticlesQuery({ order: 'like', size: pageSize });

  return (
    <>
      <div className={styles.BestArticleList}>
        {BestArticleList.map((bestArticle) => (
          <BestArticle
            key={bestArticle.id}
            title={bestArticle.title}
            nickname={bestArticle.writer.nickname}
            imageUrl={bestArticle.image}
            likeCount={bestArticle.likeCount}
            createdAt={bestArticle.createdAt.split('T')[0]}
          />
        ))}
      </div>
    </>
  );
}

export default BestArticleList;
