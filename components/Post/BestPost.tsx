import axios from '@/lib/axios';
import { useState, useEffect } from 'react';
import Section from '@/components/Section/Section';
import BestPostList from './BestPostList';
import styles from './BestPost.module.css';
import { PostListProps } from './@types/Post';

const DEVICE_SIZE = {
  tablet: 1028,
  mobile: 768,
};

function getBestPostSize() {
  if (window.innerWidth <= DEVICE_SIZE.mobile) {
    return 1;
  } else if (window.innerWidth <= DEVICE_SIZE.tablet) {
    return 2;
  } else return 3;
}

export default function BestPost() {
  const [bestposts, setBestPosts] = useState<PostListProps[]>([]);
  const [pageSize, setPageSize] = useState<number | null>(3);

  async function getBestPost() {
    const res = await axios.get(`/articles?pageSize=${pageSize}&orderBy=like`);
    const BestPosts = res.data.list;
    setBestPosts(BestPosts);
  }

  useEffect(() => {
    if (pageSize !== null) {
      getBestPost();
    }
  }, [pageSize]);

  useEffect(() => {
    const updatePageSize = () => {
      const newPageSize = getBestPostSize();
      setPageSize(newPageSize);
    };
    updatePageSize();

    window.addEventListener('resize', updatePageSize);
    return () => {
      window.removeEventListener('resize', updatePageSize);
    };
  }, []);

  useEffect(() => {
    getBestPost();
  }, []);

  return (
    <Section>
      <h2 className={styles.title}>베스트 게시글</h2>
      <div className={styles.container}>
        {bestposts.map(list => (
          <BestPostList key={list.id} postList={list} />
        ))}
      </div>
    </Section>
  );
}
