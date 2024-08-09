import axios from "@/lib/axios";
import Image from "next/image";
import { Article, ArticlesResponse } from "@/types/types";
import { useEffect, useState } from "react";
import profileIcon from "@/public/images/icons/ic_profile.svg";
import heartIcon from "@/public/images/icons/ic_heart.svg";
import searchIcon from "@/public/images/icons/ic_search.svg";

import styles from "./AllArticles.module.css";

const AllArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const getAllArticles = async () => {
    const res = await axios.get<ArticlesResponse>(
      `/articles?page=1&pageSize=10&orderBy=recent`
    );
    const articles = res.data;
    setArticles(articles.list);
  };

  useEffect(() => {
    getAllArticles();
  }, []);

  const dateFormat = (date: Date) => {
    const newDate = new Date(date);
    const formatDate = `${newDate.getFullYear()}.${String(
      newDate.getMonth() + 1
    ).padStart(2, "0")}.${String(newDate.getDate()).padStart(2, "0")}`;
    return formatDate;
  };

  return (
    <>
      <div className={styles.articleHeader}>
        <h1 className={styles.articleTitle}>게시글</h1>
        <button className={styles.writeButton}>글쓰기</button>
      </div>
      <div className={styles.articleSearch}>
        <div className={styles.articleInputBox}>
          <Image src={searchIcon} alt="searchIcon" />
          <input
            type="text"
            className={styles.articleInput}
            placeholder="검색할 상품을 입력해주세요"
          />
        </div>
        <select name="order" id="order">
          <option value="recent">최신순</option>
          <option value="like">좋아요순</option>
        </select>
      </div>
      <div className={styles.articleList}>
        {articles.map((article) => {
          return (
            <div className={styles.articleCard} key={article.id}>
              <div className={styles.articleCardContents}>
                <p className={styles.articleCardTitle}>{article.title}</p>
                <div className={styles.articleThumbnail}>
                  <div className={styles.imageWrapper}>
                    <Image
                      fill
                      src={article.image}
                      alt={`${article.id}번 게시글 이미지`}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.articleCardInfo}>
                <div className={styles.articleCardInfoContents}>
                  <Image src={profileIcon} alt="profileIcon" />
                  <span>{article.writer.nickname}</span>
                  <span>{dateFormat(article.createdAt)}</span>
                </div>
                <div className={styles.articleCardLikeCount}>
                  <Image src={heartIcon} alt="heartIcon" />
                  <span>{article.likeCount}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default AllArticles;
