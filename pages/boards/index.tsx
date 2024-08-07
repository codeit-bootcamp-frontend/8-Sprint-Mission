import axios from "@/lib/axios";
import { useEffect, useState } from "react";

export default function Board() {
  const [articles, setArticles] = useState([]);

  async function getArticles() {
    const response = await axios.get("/articles");
    setArticles(response.data.list ?? []);
    return;
  }

  useEffect(() => {
    if (!articles) return;
    getArticles();
  }, []);

  return <main>베스트 게시글 게시글</main>;
}
