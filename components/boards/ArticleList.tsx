import { IArticle } from '@/apis/getArticles';
import Article from './Article';
import styles from './ArticleList.module.scss';

interface ArticleListProps {
  articleList: IArticle[];
}

function ArticleList({ articleList }: ArticleListProps) {
  return (
    <>
      <h2>게시글</h2>
      <section className={styles.articleList}>
        {articleList.map((article) => {
          const {
            id,
            title,
            writer: { nickname },
            image,
            likeCount,
            createdAt,
          } = article;

          const createDate = createdAt.split('T')[0];
          return (
            <Article
              key={id}
              title={title}
              nickname={nickname}
              imageUrl={image}
              likeCount={likeCount}
              createdAt={createDate}
            />
          );
        })}
      </section>
    </>
  );
}

export default ArticleList;
