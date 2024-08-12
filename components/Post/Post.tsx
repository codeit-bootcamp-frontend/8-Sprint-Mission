import { useRouter } from "next/router";
import { useState, useEffect, MouseEvent } from "react";
import PostList from "./PostList";
import Section from "@/components/Section/Section";
import SearchForm from "../SearchForm/SearchForm";
import SortOptions from "../DropDown/SortOptions";
import styles from "./Post.module.css";
import LinkButton from "../Button/LinkButton";
import { PostListProps } from "./@types/Post";
import { getPostList } from "@/utils/api";
import usePostList from "@/hooks/usePostList";

interface OptionType {
  orderBy: string | string[] | undefined;
  keyword: string | undefined;
}

interface AllPropsListProps {
  initialPosts: PostListProps[];
}

export default function Post({ initialPosts }: AllPropsListProps) {
  const router = useRouter();
  const { dataList: posts, fetchPost: getPost } = usePostList(
    getPostList,
    initialPosts
  );
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [options, setOptions] = useState<OptionType>({
    orderBy: "recent",
    keyword: "",
  });

  useEffect(() => {
    const query = {
      orderBy: options.orderBy,
      keyword: options.keyword,
    };
    getPost({ query });
  }, [options]);

  const showSortOptionHandler = () => {
    setIsSortOpen((prev) => !prev);
  };

  const sortHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const sortType = e.currentTarget.dataset.type;
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

  const sortText = options.orderBy === "recent" ? "최신순" : "좋아요순";

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
      {posts.map((list) => (
        <PostList key={list.id} postList={list} />
      ))}
    </Section>
  );
}
