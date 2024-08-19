import { Article } from "@/types/article";
import AllArticle from "./AllArticle";

interface AllArticleListProps {
  articles: Article[];
}

function AllArticleList({ articles }: AllArticleListProps) {
  return (
    <div>
      {articles.map((article: Article) => (
        <div key={article.id}>
          <AllArticle article={article} />
        </div>
      ))}
    </div>
  );
}

export default AllArticleList;
