import ArticleSection from "@/components/Boards/ArticleSection";
import BestArticleSection from "@/components/Boards/BestArticleSection";
import Header from "@/components/Header";

export default function Boards() {
  return (
    <div>
      <Header />
      <BestArticleSection />
      <ArticleSection />
    </div>
  );
}
