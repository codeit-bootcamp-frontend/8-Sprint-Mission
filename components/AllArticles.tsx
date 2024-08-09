import { useState, useEffect } from "react";
import axios from "@/lib/axios";
import Image from "next/image";
import styles from "./AllArticles.module.css";
import LikeButton from "./LikeButton";
import Dropdown from "./Dropdown";
import SearchForm from "./SearchForm";
import formatDate from "@/utils/fomatDate";
import Article from "@/types/types";

export default function AllArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [option, setOption] = useState<string>("recent");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const options = [
    { label: "최신순", value: "recent" },
    { label: "좋아요순", value: "like" },
  ];

  async function getArticles(query: string, keyword: string) {
    try {
      const res = await axios.get(
        `/articles?orderBy=${query}&keyword=${keyword}`
      );
      const nextArticles = res.data.results || res.data.list || [];
      setArticles(nextArticles);
    } catch (error) {
      console.error("Failed to fetch articles", error);
    }
  }

  useEffect(() => {
    getArticles(option, searchTerm);
  }, [option, searchTerm]);

  //정렬 옵션 선택
  const handleOptionChange = (value: string) => {
    setOption(value);
  };

  if (!Array.isArray(articles) || articles.length === 0) {
    return <p>게시글 없음</p>;
  }

  return (
    <div className={styles.allArticles}>
      <div className={styles.allArticlesTitle}>
        <h2>게시글</h2>
        <div className={styles.writing}>글쓰기</div>
      </div>
      <div className={styles.searchForm}>
        <SearchForm onSearch={setSearchTerm} />
        <Dropdown
          options={options}
          selectedValue={option}
          onSelect={handleOptionChange}
        />
      </div>
      <ul className={styles.articleList}>
        {articles.map((article) => (
          <li key={article.id} className={styles.article}>
            <div className={styles.titleImage}>
              <div className={styles.title}>{article.title}</div>
              <img
                className={styles.image}
                src={article.image}
                alt="게시글 이미지"
                width="72px"
                height="72px"
              />
            </div>
            <div className={styles.writer}>
              <Image
                src="/profile.png"
                alt="프로필 이미지"
                width={24}
                height={24}
                priority
              />
              <div className={styles.nickname}>{article.writer.nickname}</div>
              <div className={styles.createdAt}>
                {formatDate(article.createdAt)}
              </div>
              <LikeButton article={article} />
            </div>
            <hr className={styles.lineDivider} />
          </li>
        ))}
      </ul>
    </div>
  );
}
