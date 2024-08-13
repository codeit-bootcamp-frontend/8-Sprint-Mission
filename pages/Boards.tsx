import BestComment from "@/components/BestComment";
import CommentCards from "@/components/CommentCards";
import SearchFrom from "@/components/SearchForm";
import style from "@/styles/Boards.module.css";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import { Comment } from "@/api/types/comment";

const Board = () => {
  const [comment, setCommen] = useState<Comment[]>([]);

  async function getComment() {
    const res = await axios.get("/articles/");
    const nextComment = res.data.list;
    setCommen(nextComment);
  }

  useEffect(() => {
    getComment();
  }, []);

  return (
    <div className={style.container}>
      <BestComment />
      <SearchFrom />
      <li>
        <CommentCards comments={comment} showBest={false} />
      </li>
    </div>
  );
};

export default Board;
