import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getPost, getPostComment } from '@/utils/api';
import PostDetail from '@/components/Post/PostDetail';
import PostComment from '@/components/PostComment/PostComment';
import { PostTypes } from '@/components/Post/types/PostType';

export default function Post() {
  const [post, setPost] = useState<PostTypes>();
  const [comment, setComment] = useState();
  const router = useRouter();
  const { id } = router.query;

  const getDetailPost = async (id: string | string[] | undefined) => {
    const res = await getPost(id);
    setPost(res);
  };

  const getComment = async (id: string | string[] | undefined) => {
    const query = {
      limit: 10,
    };
    const { list } = await getPostComment({ query }, id);
    setComment(list);
    console.log(list);
  };

  useEffect(() => {
    getComment(id);
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
