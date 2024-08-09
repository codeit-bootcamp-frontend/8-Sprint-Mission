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

export default function Post() {
  const router = useRouter();
  const query = router.query;
  const [posts, setPosts] = useState<PostListProps[]>([]);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [options, setOptions] = useState({
    orderBy: 'recent',
    keyword: '',
  });

  async function getPost() {
    const res = await axios.get(`/articles?orderBy=${options.orderBy}`);
    const allPosts = res.data.list;
    setPosts(allPosts);
  }

  useEffect(() => {
    getPost();
  }, [options]);

  const showSortOptionHandler = () => {
    setIsSortOpen(prev => !prev);
  };

  const sortHandler = (e: MouseEvent<HTMLElement>) => {
    const sortType = e.currentTarget.dataset.type;
    router.push(`/boards?orderBy=${sortType}`);
    setOptions(prevOption => ({
      ...prevOption,
      order: sortType,
    }));
    setIsSortOpen(false);
  };

  const sortText = options.orderBy === 'recent' ? '최신순' : '좋아요순';

  return (
    <Section>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>게시글</h2>
        <LinkButton href="/" btnName="글쓰기" />
      </div>
      <div className={styles.userActionContainer}>
        <SearchForm />
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
