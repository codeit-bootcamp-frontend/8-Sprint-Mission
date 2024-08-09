import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./AllBoard.module.scss";
import Icon from "@/components/ui/Icon";
import LinkButton from "@/components/ui/LinkButton";
import SearchForm from "@/components/form/SearchForm";
import Dropdown from "@/components/ui/Dropdown";
import { useRouter } from "next/router";
import axios from "@/lib/axios";
import { formatDate } from "@/utils/formatDate";

function AllBoard({ initialArticles }) {
  const [orderBy, setOrderBy] = useState("recent");
  const [articles, setArticles] = useState(initialArticles);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedOption, setSelectedOption] = useState({
    value: "recent",
    label: "최신순",
  });
  const sortOptions = [
    { value: "recent", label: "최신순" },
    { value: "popular", label: "인기순" },
  ];
  const router = useRouter();
  const keyword = router.query.q || "";

  const handleSortSelection = (sortOption) => {
    setOrderBy(sortOption);
  };

  function handleSearch() {
    const query = { ...router.query };
    if (searchKeyword.trim()) {
      query.q = searchKeyword;
    } else {
      delete query.q;
    }
    router.replace({
      pathname: router.pathname,
      query,
    });
  }

  useEffect(() => {
    const fetchArticles = async () => {
      let url = `https://panda-market-api.vercel.app/articles?orderBy=${orderBy}`;
      if (keyword.trim()) {
        url += `&keyword=${encodeURIComponent(keyword)}`;
      }
      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.list || []);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
        setArticles([]);
      }
    };

    fetchArticles();
  }, [orderBy, keyword]);

  return (
    <section className={styles["all-board-wrap"]}>
      <div className={styles["section-header"]}>
        <h2 className={styles.title}>게시글</h2>
        <LinkButton href="#" size="sm" color="primary">
          글쓰기
        </LinkButton>
      </div>
      <div className={styles["input-search-wrap"]}>
        <SearchForm
          searchKeyword={searchKeyword}
          onSearch={(keyword) => {
            setSearchKeyword(keyword);
            handleSearch();
          }}
        />
        <Dropdown
          onSortSelection={handleSortSelection}
          selectedOption={selectedOption}
          sortOptions={sortOptions}
        />
      </div>
      <ul className={styles["board-list"]}>
        {articles.length
          ? articles.map((article) => (
              <li key={article.id}>
                <div className={styles["title-info"]}>
                  <p className={styles.title}>{article.title}</p>
                  <div className={styles["thumb-wrap"]}>
                    <Image
                      fill
                      src={article.image || "/img/sample.png"}
                      alt={`${article.id}번 게시글 이미지`}
                    />
                  </div>
                </div>
                <div className={styles["writer-info"]}>
                  <div className={styles["profile-info"]}>
                    <div className={styles["profile-wrap"]}>
                      <Image src="/img/profile.png" alt="프로필 이미지" fill />
                    </div>
                    <div className={styles["nick-name"]}>
                      {article.writer.nickname}
                    </div>
                  </div>
                  <div className={styles.date}>
                    {formatDate(article.createdAt)}
                  </div>
                  <div className={styles.favorite}>
                    <Icon type="heart" size="md" />
                    <span className={styles.num}>{article.likeCount}</span>
                  </div>
                </div>
              </li>
            ))
          : keyword && (
              <div className={styles["search-none"]}>
                {keyword}로 검색된 결과가 없어요.
              </div>
            )}
      </ul>
    </section>
  );
}

export default AllBoard;
