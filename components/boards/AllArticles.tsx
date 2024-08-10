import axios from "@/lib/axios";
import Image from "next/image";
import { Article, ArticlesResponse } from "@/types/types";
import React, { ChangeEvent, useEffect, useState } from "react";
import profileIcon from "@/public/images/icons/ic_profile.svg";
import heartIcon from "@/public/images/icons/ic_heart.svg";
import searchIcon from "@/public/images/icons/ic_search.svg";

import styles from "./AllArticles.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const AllArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [order, setOrder] = useState<string>("recent");
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const router = useRouter();
  const keyword = (router.query.keyword as string) || "";

  useEffect(() => {
    const getAllArticles = async () => {
      let params = `/articles?page=1&pageSize=10&orderBy=${order}`;
      if (keyword.trim()) {
        params += `&keyword=${encodeURIComponent(keyword)}`;
      }
      const res = await axios.get<ArticlesResponse>(params);
      const articles = res.data;
      setArticles(articles.list);
    };

    getAllArticles();
  }, [order, keyword]);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  const dateFormat = (date: Date) => {
    const newDate = new Date(date);
    const formatDate = `${newDate.getFullYear()}.${String(
      newDate.getMonth() + 1
    ).padStart(2, "0")}.${String(newDate.getDate()).padStart(2, "0")}`;
    return formatDate;
  };

  const handleOrderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrder(e.target.value);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };
  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const query = { ...router.query };
    if (e.key === "Enter") {
      if (searchKeyword.trim()) {
        query.keyword = searchKeyword;
      } else {
        delete query.keyword;
      }

      router.replace({
        pathname: router.pathname,
        query: query,
      });
    }
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
            value={searchKeyword}
            onChange={handleSearchChange}
            onKeyDown={handleSearchKeyDown}
          />
        </div>
        <select
          className={styles.orderSelect}
          name="order"
          onChange={handleOrderChange}
        >
          <option value="recent">최신순</option>
          <option value="like">좋아요순</option>
        </select>
      </div>
      <div className={styles.articleList}>
        {articles.map((article) => {
          return (
            <Link href={`/boards/${article.id}`} key={article.id}>
              <div className={styles.articleCard}>
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
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default AllArticles;
