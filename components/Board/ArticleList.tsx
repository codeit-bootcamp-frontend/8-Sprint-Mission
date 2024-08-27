import Link from "next/link";
import styles from "@/components/Board/ArticleList.module.css";
import Image from "next/image";

type articles = {
  updatedAt: string;
  createdAt: string;
  likeCount: number;
  writer: Writer;
  image: string;
  title: string;
  id: number;
};

type Writer = {
  nickname: string;
  id: number;
};

export default function ArticleList({ articles = [] }) {
  return (
    <>
      {/* <ul className={styles.articleList}>
        {articles.map((article) => (
          <li key={article.id}>
            <Link className={styles.article} href={`/articles/${article.id}`}>
              <Image src={}
                // alt={article.name}
              />
              <span className={styles.articleName}>{article}</span>
              <br />
            </Link>
          </li>
        ))}
      </ul> */}
    </>
  );
}
