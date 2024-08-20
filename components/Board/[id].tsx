import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

type Article = {
  id: number;
  content: string;
  title: string;
};

export default function Articles() {
  const [article, setArticle] = useState<Article | null>(null);
  //   const [articleList, setArticleList] = useState();

  const router = useRouter();
  const { id } = router.query;

  async function getArticle(articleId: string) {
    const res = await axios.get(`/articles/${articleId}`);
    const nextArticle = res.data;
    setArticle(nextArticle);
  }

  useEffect(() => {
    if (!id) return;

    getArticle(id as string);
  }, [id]);

  if (!article) return null;

  return <div>article {article.title}</div>;
}
