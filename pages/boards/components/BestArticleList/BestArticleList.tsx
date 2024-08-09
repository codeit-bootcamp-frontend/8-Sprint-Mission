import { Article } from "@/types/article";
import styles from "./BestArticleList.module.css";
import BestArticle from "./BestArticle";

interface BestArticleListProps {
  articles: Article[];
}

function BestArticleList({ articles }: BestArticleListProps) {
  return (
    <div className={styles.articlesWrapper}>
      {articles.map((article: Article) => (
        <div key={article.id}>
          <BestArticle article={article} />
        </div>
      ))}
    </div>
  );
}

export default BestArticleList;
