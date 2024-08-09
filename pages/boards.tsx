import axios from "@/lib/axios";

import BestArticleList from "@/components/BestArticleList";
import ArticleList from "@/components/ArticleList";

export default function Boards() {
  return (
    <div className="m-container mt-[70px] pt-4 md:pt-6">
      <BestArticleList />
      <ArticleList />
    </div>
  );
}
