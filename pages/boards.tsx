

import BestArticleList from "@/components/boards/BestArticleList";
import ArticleList from "@/components/boards/ArticleList";

export default function Boards() {
  return (
    <div className="m-container mt-[70px] pt-4 md:pt-6">
      <BestArticleList />
      <ArticleList />
    </div>
  );
}
