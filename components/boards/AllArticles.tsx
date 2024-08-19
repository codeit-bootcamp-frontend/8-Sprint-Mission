import Image from "next/image";
import { Article, ArticlesResponse, GetArticles } from "@/types/types";
import React, { ChangeEvent, useEffect, useState } from "react";
import profileIcon from "@/public/images/icons/ic_profile.svg";
import heartIcon from "@/public/images/icons/ic_heart.svg";
import searchIcon from "@/public/images/icons/ic_search.svg";
import emptyImage from "@/public/images/icons/emptyImage.png";

import styles from "./AllArticles.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { getArticles } from "@/lib/articleApi";
import useDateFormat from "@/lib/hooks/useDateFormat";

const AllArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [orderBy, setOrderBy] = useState<GetArticles["orderBy"]>("recent");
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const { format: dateFormat } = useDateFormat();

  const router = useRouter();
  const keyword = (router.query.keyword as string) || "";

  const getAllArticles = async ({
    page,
    pageSize,
    orderBy,
    keyword,
  }: GetArticles) => {
    const encodedKeyword = keyword?.trim()
      ? encodeURIComponent(keyword)
      : undefined;

    const result = await getArticles({
      page,
      pageSize,
      orderBy,
      keyword: encodedKeyword,
    });

    setArticles(result.list);
  };

  useEffect(() => {
    getAllArticles({ page: 1, pageSize: 10, orderBy, keyword });
  }, [keyword, orderBy]);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  const handleOrderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(e.target.value as "recent" | "like");
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
        <Link href="/addBoard" className={styles.writeButton}>
          글쓰기
        </Link>
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
            <Link href={`/board/${article.id}`} key={article.id}>
              <div className={styles.articleCard}>
                <div className={styles.articleCardContents}>
                  <p className={styles.articleCardTitle}>{article.title}</p>
                  <div className={styles.articleThumbnail}>
                    <div className={styles.imageWrapper}>
                      <Image
                        fill
                        src={
                          article.image === null ? emptyImage : article.image
                        }
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
