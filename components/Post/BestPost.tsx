import axios from '@/lib/axios';
import { useState, useEffect } from 'react';
import Section from '@/components/Section/Section';
import BestPostList from './BestPostList';
import styles from './BestPost.module.css';
import { PostListProps } from './@types/Post';

export default function BestPost() {
  const [bestposts, setBestPosts] = useState<PostListProps[]>([]);

  async function getBestPost() {
    const res = await axios.get('/articles?pageSize=3&orderBy=like');
    const BestPosts = res.data.list;
    setBestPosts(BestPosts);
  }

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
