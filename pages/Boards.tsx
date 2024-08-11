import BestComment from "@/components/BestComment";
import CommentCard from "@/components/CommentCard";
import SearchFrom from "@/components/SearchForm";
import style from "@/styles/Boards.module.css";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";

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
        <CommentCard comments={comment} showBest={false} />
      </li>
    </div>
  );
};

export default Board;
