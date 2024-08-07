import { useEffect, useState } from "react";
import { Article } from "@/types/article";
import axios from "@/lib/axios";

import Search from "@/components/Search";
import Sort from "@/components/Sort";
import BestArticleList from "./components/BestArticleList/BestArticleList";
import AllArticleList from "./components/AllArticleList/AllArticleList";

function Board() {
  const [articles, setArticles] = useState<Article[]>([]);

  async function getArticles() {
    const response = await axios.get("/articles");
    setArticles(response.data.list ?? []);
    return;
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <main>
      <div>
        <h3>베스트 게시글</h3>
        <BestArticleList articles={articles} />
      </div>
      <div>
        <h3>게시글</h3>
        <Search />
        <Sort articles={articles} setArticles={setArticles} />
        <AllArticleList articles={articles} />
      </div>
    </main>
  );
}

export default Board;
