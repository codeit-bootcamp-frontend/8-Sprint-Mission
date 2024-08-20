import { useState, useEffect } from 'react';
import Section from '@/components/Section/Section';
import BestPostList from './BestPostList';
import EllipsisLoading from '@/components/Loading/EllipsisLoading';
import styles from './BestPost.module.css';
import { PostListProps } from './types/PostType';
import { getPostList } from '@/utils/api';
import useDataList from '@/hooks/useDataList';

const DEVICE_SIZE = {
  tablet: 1028,
  mobile: 768,
};

export default function BestPost() {
  const [pageSize, setPageSize] = useState<number>(getBestPostSize());
  const {
    loading,
    error,
    dataList: bestposts,
    fetchPost: getBestPost,
  } = useDataList<PostListProps>(getPostList, []);

  function getBestPostSize() {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth <= DEVICE_SIZE.mobile) {
      return 1;
    } else if (window.innerWidth <= DEVICE_SIZE.tablet) {
      return 2;
    } else return 3;
  }

  useEffect(() => {
    const query = {
      orderBy: 'like',
      pageSize: getBestPostSize(),
    };
    getBestPost({ query });
  }, []);

  useEffect(() => {
    const updatePageSize = () => {
      const newPageSize = getBestPostSize();
      const query = {
        orderBy: 'like',
        pageSize: newPageSize,
      };
      if (newPageSize !== pageSize) {
        setPageSize(newPageSize);
        getBestPost({ query });
      }
    };
    window.addEventListener('resize', updatePageSize);
    return () => {
      window.removeEventListener('resize', updatePageSize);
    };
  }, [pageSize]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Section>
      <h2 className={styles.title}>베스트 게시글</h2>
      {loading ? (
        <EllipsisLoading />
      ) : (
        <div className={styles.container}>
          {bestposts.map(list => (
            <BestPostList key={list.id} postList={list} />
          ))}
        </div>
      )}
    </Section>
  );
}
