import { useEffect, useState } from "react";
import CommentCard from "./CommentCards";
import axios from "@/lib/axios";
import style from "@/components/BestComment.module.css";
import { Comment } from "@/api/types/comment";

interface CommentList {
  list: Comment[];
}

export const getTopLikeCount = (data: CommentList, n: number): Comment[] => {
  const sortedItems = data.list.sort((a, b) => b.likeCount - a.likeCount);
  return sortedItems.slice(0, n);
};

export async function getComment({
  page,
  pageSize,
}: {
  page: number;
  pageSize: number;
}) {
  const res = await axios.get("https://panda-market-api.vercel.app/articles?", {
    params: { page, pageSize },
  });
  const comment = res.data;
  return comment;
}

const BestComment = () => {
  const [comment, setComment] = useState<Comment[]>([]);

  useEffect(() => {
    const getCommentData = async () => {
      try {
        const data: CommentList = await getComment({ page: 1, pageSize: 100 });
        const topLikeCount = getTopLikeCount(data, 3);
        setComment(topLikeCount);
      } catch (error) {
        console.error("데이터를 가져오지 못함", error);
      }
    };
    getCommentData();
  }, []);

  return (
    <div className={style.bestCommentContainer}>
      <h1 className={style.sectionTitle}>베트스 게시글</h1>
      <ul className={style.bestCommentsCard}>
        <li>
          <CommentCard comments={comment} showBest={true} />
        </li>
      </ul>
    </div>
  );
};

export default BestComment;
