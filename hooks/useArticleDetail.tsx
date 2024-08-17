import { getArticlesById } from "@/apis/article";
import { Article } from "@/types/article";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useArticleDetail = () => {
  const [article, setArticle] = useState<Article>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const loadArticle = async () => {
    setIsLoading(true);
    try {
      if (typeof id !== "string") {
        //리다이렉션이나 404처리
        return;
      }
      const data = await getArticlesById(parseInt(id));
      setArticle(data);
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    loadArticle();
  }, [id]);

  return { article, isLoading, isError };
};

export default useArticleDetail;
