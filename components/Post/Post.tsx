import { useRouter } from "next/router";
import { useState, useEffect, useRef, MouseEvent } from "react";
import PostList from "./PostList";
import Section from "@/components/Section/Section";
import SearchForm from "@/components/SearchForm/SearchForm";
import SortOptions from "@/components/DropDown/SortOptions";
import EllipsisLoading from "@/components/Loading/EllipsisLoading";
import styles from "./Post.module.css";
import LinkButton from "@/components/Button/LinkButton";
import { getPostList } from "@/utils/api";
import usePostList from "@/hooks/usePostList";
import { AllPropsListProps, OptionType } from "./types/PostType";

export default function Post({ initialPosts }: AllPropsListProps) {
  const router = useRouter();
  const {
    loading,
    error,
    dataList: posts,
    fetchPost: getPost,
  } = usePostList(getPostList, initialPosts);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [options, setOptions] = useState<OptionType>({
    orderBy: "recent",
    keyword: "",
    pageSize: 10,
  });

  useEffect(() => {
    const query = {
      orderBy: options.orderBy,
      pageSize: options.pageSize,
    };
    getPost({ query });
  }, [options.orderBy, options.pageSize]);

  const showSortOptionHandler = () => {
    setIsSortOpen((prev) => !prev);
  };

  const sortHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const sortType = e.currentTarget.dataset.type as "recent" | "like";
    router.push(`/boards?orderBy=${sortType}`);
    setOptions((prevOption) => ({
      ...prevOption,
      orderBy: sortType,
    }));
    setIsSortOpen(false);
  };

  const searchHandler = (keyword: string) => {
    router.push(`/boards?keyword=${keyword}`);
    setOptions((prevOption) => ({
      ...prevOption,
      keyword: keyword,
    }));
  };

  const sortText = options.orderBy === "recent" ? "recent" : "like";

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Section>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>게시글</h2>
        <LinkButton href="/" btnName="글쓰기" />
      </div>
      <div className={styles.userActionContainer}>
        <SearchForm searchHandler={searchHandler} />
        <SortOptions
          isOpen={isSortOpen}
          showOptions={showSortOptionHandler}
          sortHandler={sortHandler}
          sortText={sortText}
        />
      </div>
      {loading ? (
        <EllipsisLoading />
      ) : (
        <div>
          {posts.map((list) => (
            <PostList key={list.id} postList={list} />
          ))}
        </div>
      )}
    </Section>
  );
}
