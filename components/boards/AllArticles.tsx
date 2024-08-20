import { useState, useEffect } from "react";
import { fetchAllArticles } from "@/lib/api";
import Image from "next/image";
import styles from "./AllArticles.module.css";
import LikeButton from "../LikeButton";
import Dropdown from "../Dropdown";
import SearchForm from "../SearchForm";
import formatDate from "@/utils/fomatDate";
import Article from "@/types/types";
import Spinner from "../Spinner";
import { useRouter } from "next/router";
import Link from "next/link";

interface AllArticlesProps {
  initialArticles: Article[];
}

export default function AllArticles({ initialArticles }: AllArticlesProps) {
  const router = useRouter();
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [option, setOption] = useState<string>("recent");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const options = [
    { label: "최신순", value: "recent" },
    { label: "좋아요순", value: "like" },
  ];

  async function getArticles(orderBy: string, keyword: string) {
    const nextArticles: Article[] = await fetchAllArticles(orderBy, keyword);
    setArticles(nextArticles);
  }

  useEffect(() => {
    // URL 쿼리에서 검색어를 가져와 상태를 업데이트
    const initialKeyword = router.query.keyword || "";
    if (typeof initialKeyword === "string") {
      setSearchTerm(initialKeyword);
    }
  }, [router.query.keyword]);

  useEffect(() => {
    getArticles(option, searchTerm);
  }, [option, searchTerm]);

  //정렬 옵션 선택
  const handleOptionChange = (value: string) => {
    setOption(value);
  };

  if (!Array.isArray(articles) || articles.length === 0) {
    return (
      <div className={styles.loading}>
        <Spinner />
      </div>
    );
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
            <Link className={styles.articleLink} href={`/boards/${article.id}`}>
              <div className={styles.titleImage}>
                <div className={styles.title}>{article.title}</div>
                <Image
                  className={styles.image}
                  src={article.image}
                  alt="게시글 이미지"
                  width={72}
                  height={72}
                />
              </div>
              <div className={styles.writer}>
                <Image
                  src="/profile.png"
                  alt="프로필 이미지"
                  width={24}
                  height={24}
                />
                <div className={styles.nickname}>{article.writer.nickname}</div>
                <div className={styles.createdAt}>
                  {formatDate(article.createdAt)}
                </div>
                <LikeButton article={article} />
              </div>
              <hr className={styles.lineDivider} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
