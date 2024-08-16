import { useEffect, useState } from "react";
import styles from "./Article.module.scss";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import axios from "@/lib/axios";
import { Article as ArticleType } from "@/types/article";
import { formatDate } from "@/lib/utils/formatDate";

interface ArticleProps {
  id: number;
}

function Article({ id }: ArticleProps) {
  const [article, setArticle] = useState<ArticleType | null>(null);

  const fetchArticle = async (articleId: number) => {
    try {
      const response = await axios.get(`/articles/${articleId}`);
      setArticle(response.data);
    } catch (error) {
      console.error("Failed to fetch the article:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchArticle(id);
    }
  }, [id]);

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <article className={styles.article}>
      <h3 className={styles["article-title"]}>{article.title}</h3>
      <div className={styles["writer-info"]}>
        <div className={styles["profile-info"]}>
          <div className={styles["profile-wrap"]}>
            <Image
              src={article.image || "/img/profile.png"}
              alt="프로필 이미지"
              className={styles["profile-image"]}
              fill
            />
          </div>
          <div className={styles["nick-name"]}>{article.writer.nickname}</div>
        </div>
        <div className={styles.date}>{formatDate(article.createdAt)}</div>
        <div className={styles.divided}></div>
        <button className={styles["btn-favorite"]}>
          <Icon type="heart" size="md" />
          {article.likeCount}
        </button>
      </div>
      <div className={styles["article-content"]}>
        <p>{article.content}</p>
      </div>
    </article>
  );
}

export default Article;
