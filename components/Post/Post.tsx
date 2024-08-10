import axios from '@/lib/axios';
import { useRouter } from 'next/router';
import { useState, useEffect, MouseEvent } from 'react';
import PostList from './PostList';
import Section from '@/components/Section/Section';
import SearchForm from '../SearchForm/SearchForm';
import SortOptions from '../DropDown/SortOptions';
import styles from './Post.module.css';
import LinkButton from '../Button/LinkButton';
import { PostListProps } from './@types/Post';

interface OptionType {
  orderBy: string | string[] | undefined;
  keyword: string | undefined;
}

export default function Post() {
  const router = useRouter();
  const query = router.query;
  const [posts, setPosts] = useState<PostListProps[]>([]);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [options, setOptions] = useState<OptionType>({
    orderBy: 'recent',
    keyword: '',
  });

  async function getPost() {
    try {
      const res = await axios.get(
        `/articles?orderBy=${options.orderBy}&keyword=${options.keyword}`
      );
      const allPosts = res.data.list;
      setPosts(allPosts);
    } catch (err) {
      throw new Error('데이터를 불러오는데 실패했습니다.');
    }
  }

  useEffect(() => {
    getPost();
  }, [options]);

  const showSortOptionHandler = () => {
    setIsSortOpen(prev => !prev);
  };

  const sortHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const sortType = e.currentTarget.dataset.type;
    router.push(`/boards?orderBy=${sortType}`);
    setOptions(prevOption => ({
      ...prevOption,
      orderBy: sortType,
    }));
    setIsSortOpen(false);
  };

  const searchHandler = (keyword: string) => {
    router.push(`/boards?keyword=${keyword}`);
    setOptions(prevOption => ({
      ...prevOption,
      keyword: keyword,
    }));
  };

  const sortText = options.orderBy === 'recent' ? '최신순' : '좋아요순';

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
      {posts.map(list => (
        <PostList key={list.id} postList={list} />
      ))}
    </Section>
  );
}
