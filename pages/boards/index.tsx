import BestPost from "@/components/Post/BestPost";
import Post from "@/components/Post/Post";
import { PostListProps } from "@/components/Post/@types/Post";
import { getPostList } from "@/utils/api";

interface AllPropsListProps {
  initialPosts: PostListProps[];
}

export async function getServerSideProps() {
  const query = {
    orderBy: "recent",
    keyword: "",
    pageSize: 10,
  };
  const res = await getPostList({ query });
  const posts = res;
  return {
    props: {
      initialPosts: posts,
    },
  };
}

export default function Board({ initialPosts }: AllPropsListProps) {
  return (
    <>
      <BestPost />
      <Post initialPosts={initialPosts} />
    </>
  );
}
