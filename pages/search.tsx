import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BestComment from "@/components/BestComment";
import SearchFrom from "@/components/SearchForm";
import axios from "@/lib/axios";
import CommentCard from "@/components/CommentCard";

interface Comment {
  updateAt: string;
  createdAt: string;
  likeCount: number;
  image: string;
  content: string;
  title: string;
  nickname: string;
  id: number;
}

const Search = () => {
  const [comment, setComment] = useState<Comment[]>([]);
  const router = useRouter();
  const { q } = router.query;

  async function getComment(query: string | string[] | undefined) {
    if (!query) {
      return;
    }
    const res = await axios.get(`/articles?keyword=${query}`);
    const nextComment = res.data.list;
    setComment(nextComment);
  }

  useEffect(() => {
    getComment(q);
  }, [q]);

  return (
    <div>
      <BestComment />
      <SearchFrom initalValue={q as string | undefined} />
      <CommentCard comments={comment} />
    </div>
  );
};

export default Search;
