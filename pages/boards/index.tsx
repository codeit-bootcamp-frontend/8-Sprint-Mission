import BestComment from "@/components/BestComment";
import CommentCards from "@/components/CommentCards";
import SearchFrom from "@/components/SearchForm";
import style from "@/styles/Boards.module.css";
import axios from "@/lib/axios";
import { Comment } from "@/api/types/comment";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const fetchComments = async () => {
  const res = await axios.get("/articles/");
  return res.data.list;
};

const Board = () => {
  const {
    data: comment = [],
    isLoading,
    error,
  } = useQuery<Comment[]>({
    queryKey: ["comment"],
    queryFn: fetchComments,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading comments</div>;

  return (
    <div className={style.container}>
      <BestComment />
      <SearchFrom />
      <li>
        <Link href={`/boardrs/`}>
          <CommentCards comments={comment} showBest={false} />
        </Link>
      </li>
    </div>
  );
};

export default Board;
