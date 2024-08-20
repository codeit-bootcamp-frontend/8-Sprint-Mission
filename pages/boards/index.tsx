import Head from 'next/head';
import BestPost from '@/components/Post/BestPost';
import AllPost from '@/components/Post/AllPost';
import { getPostList } from '@/utils/api';
import { AllPropsListProps } from '@/components/Post/types/PostType';

export async function getServerSideProps() {
  const query = {
    orderBy: 'recent' as 'recent' | 'like',
    pageSize: 6,
  };
  const res = await getPostList({ query });
  const posts = res.list;
  return {
    props: {
      initialPosts: posts,
    },
  };
}

export default function Board({ initialPosts }: AllPropsListProps) {
  return (
    <>
      <Head>
        <title>판다마켓 - 자유게시판</title>
        <meta name="description" content="일상의 모든 물건을 거래해보세요" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BestPost />
      <AllPost initialPosts={initialPosts} />
    </>
  );
}
