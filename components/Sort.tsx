import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { Article } from "@/types/article";
import axios from "@/lib/axios";

interface SortProps {
  setArticles: Dispatch<SetStateAction<Article[]>>;
}

function Sort({ setArticles }: SortProps) {
  const [order, setOrder] = useState<string>("recent");

  async function getArticles(order: string) {
    const response = await axios.get(`/articles/?orderBy=${order}`);
    setArticles(response.data.list ?? []);
  }

  useEffect(() => {
    getArticles(order);
  }, [order]);

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrder(e.target.value);
  };

  return (
    <div>
      <select name="order" id="order" onChange={handleOrderChange}>
        <option value="recent">최신순</option>
        <option value="like">좋아요순</option>
      </select>
    </div>
  );
}

export default Sort;
