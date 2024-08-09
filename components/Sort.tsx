import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { Article } from "@/types/article";

interface SortProps {
  articles: Article[];
  setArticles: Dispatch<SetStateAction<Article[]>>;
}

function Sort({ articles, setArticles }: SortProps) {
  const [order, setOrder] = useState<string>("createdAt");

  useEffect(() => {
    const sortedArticles = [...articles].sort((a, b) => {
      if (order === "createdAt") {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }
      return b.likeCount - a.likeCount;
    });

    if (JSON.stringify(sortedArticles) !== JSON.stringify(articles)) {
      setArticles(sortedArticles);
    }
  }, [order, articles]);

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrder(e.target.value);
  };

  return (
    <div>
      <select name="order" id="order" onChange={handleOrderChange}>
        <option value="createdAt">최신순</option>
        <option value="favoriteCount">좋아요순</option>
      </select>
    </div>
  );
}

export default Sort;
