import { Article } from "@/types/article";

import BestArticle from "./BestArticle";

interface BestArticleListProps {
  articles: Article[];
}

function BestArticleList({ articles }: BestArticleListProps) {
  let pageSize = 3;
  const sortedArticles = [...articles]
    .sort((a, b) => {
      return b.likeCount - a.likeCount;
    })
    .slice(0, pageSize);

  return (
    <div>
      {sortedArticles.map((article: Article) => (
        <div key={article.id}>
          <BestArticle article={article} />
        </div>
      ))}
    </div>
  );
}

export default BestArticleList;
