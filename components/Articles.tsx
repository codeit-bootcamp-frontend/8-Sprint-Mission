import Image from "next/image";
import { FormEvent, MouseEvent, useEffect, useState } from "react";
import styles from "./Articles.module.css";
import { getArticles } from "@/pages/api/apis";
import Article from "@/DTO/article";
import formatComparedTime from "@/lib/formatComparedTime";
import getRenderedPages from "@/lib/getRenderedPages";
import useDropdownState from "@/lib/hooks/useDropdownState";

const ORDER_EN_KO_PAIR: {
  [key: string]: string,
} = {
  recent: "최신순",
  like: "좋아요순",
}

const PAGE_SIZE = 10;

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState<"recent" | "like">("recent");
  const [keyword, setKeyword] = useState('');
  const [totalPages, setTotalPages] = useState(1);

  const { isDropdownOpen, handleDropdown } = useDropdownState();

  const renderedPages = getRenderedPages(page, totalPages);

  const handleLoad = async (page: number, pageSize: number, orderBy: "recent" | "like", keyword: string) => {
    const result = await getArticles(page, pageSize, orderBy, keyword);
    if(!result) return;
    setArticles(result.list);
    setTotalPages(Math.floor(result.totalCount / pageSize) + 1);
  }

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    setKeyword(target["search"].value);
    target["search"].value = '';
  }

  const handlePageClick = (page: number) => {
    setPage(page);
    handleLoad(page, PAGE_SIZE, orderBy, keyword);
  }

  useEffect(() => {
    setPage(1);
    handleLoad(1, PAGE_SIZE, orderBy, keyword);
  }, [PAGE_SIZE, orderBy, keyword]);

  return (
    <section className={styles.articlesSection}>

      <div className={styles.articlesSectionHeader}>
        <span>게시글</span>
        <button className={styles.writeButton}>글쓰기</button>
      </div>
      
      <div className={styles.queryHandlersContainer}>
        <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
          <input className={styles.searchInput} name="search" placeholder="검색할 상품을 입력해주세요" />
        </form>
        <div className={styles.searchIconContainer}>
          <Image fill src="/images/ic_search.png" alt="검색" />
        </div>
        <div className={styles.orderDropdownHandler} onClick={handleDropdown}>
          <span>{ORDER_EN_KO_PAIR[orderBy]}</span>
          <div className={styles.arrowDownImageContainer}>
            <Image fill src="/images/ic_arrow_down.png" alt="보기" />
          </div>
          <div className={styles.sortIconContainer}>
            <Image fill src="/images/ic_sort.svg" alt="보기" />
          </div>
          <ul className={`${styles.dropdownList} ${isDropdownOpen ? '' : "hidden"}`}>
            <li className={styles.dropdownListItem} onClick={() => setOrderBy("recent")}>
              {ORDER_EN_KO_PAIR["recent"]}
            </li>
            <li className={styles.dropdownListItem} onClick={() => setOrderBy("like")}>
              {ORDER_EN_KO_PAIR["like"]}
            </li>
          </ul>
        </div>
      </div>

      <ul className={styles.articlesList}>
        {articles.map(article => 
          <li className={styles.articlesListItem} key={article.id}>
            <div className={styles.articlesListItemContent}>
              <span>{article.title}</span>
              <div className={styles.articleImageContainer}>
                <Image fill src={article.image} alt="이미지" />
              </div>
            </div>
            <div className={styles.articlesListItemFooter}>
              <div className={styles.articleWriter}>
                <div className={styles.profileImageContainer}>
                  <Image fill src="/images/ic_profile.png" alt="프로필" />
                </div>
                <span>{article.writer.nickname}</span>
                <span className={styles.articleDate}>
                  {formatComparedTime(article.createdAt)}
                </span>
              </div>
              <div className={styles.likeyContainer}>
                <div className={styles.heartContainer}>
                  <Image fill src="/images/ic_heart.png" alt="하트" />
                </div>
                <span>{(article.likeCount > 9999) ? "9999+" : article.likeCount}</span>
              </div>
            </div>
          </li>
        )}
      </ul>

      <ul className={styles.pages}>
        <li className={styles.page}>
          <div className={styles.pageArrowContainer}>
            <Image fill src="/images/arrow_left.svg" alt="이전" />
          </div>
        </li>
        {renderedPages.map((renderedPage) =>
        <li className={`${styles.page} ${(renderedPage === page) ? styles.pageActive : ''}`} key={renderedPage} onClick={() => handlePageClick(renderedPage)}>
          {renderedPage}
        </li>
        )}
        <li className={styles.page}>
          <div className={styles.pageArrowContainer}>
            <Image fill src="/images/arrow_right.svg" alt="다음" />
          </div>
        </li>
      </ul>

    </section>
  )
}