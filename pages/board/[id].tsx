import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getPost, getPostComment } from '@/utils/api';
import PostDetail from '@/components/Post/PostDetail';
import PostComment from '@/components/PostComment/PostComment';
import useDataList from '@/hooks/useDataList';

export default function Post() {
  const { dataList: post, fetchPost: getDetailPost } = useDataList<any>(
    getPost,
    null
  );
  const { dataList: comment, fetchPost: getComment } = useDataList<any>(
    getPostComment,
    []
  );

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const query = {
      limit: 10,
    };
    if (!id) return;
    getComment({ query }, id);
    getDetailPost(id);
  }, [id]);

  if (!post || !comment) return null;

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <PostDetail post={post} />
      <PostComment comment={comment} />
    </>
  );
}
