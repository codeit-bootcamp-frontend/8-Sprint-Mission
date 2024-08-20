import { useState } from "react";
import { GetServerSidePropsContext } from "next";
import { Article } from "@/types/article";
import { IComment } from "@/types/comment";
import axios from "@/lib/axios";

import DetailArticle from "@/components/DetailArticle";
import AddComment from "@/components/AddComment";
import CommentList from "@/components/CommentList/CommentList";
import ReturnButton from "@/components/Buttons/ReturnButton";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params || {};
  const articleResponse = await axios.get(`/articles/${id}`);
  const article = articleResponse.data ?? [];

  const LIMIT = 10;
  const commentResponse = await axios.get(
    `/articles/${id}/comments?limit=${LIMIT}`,
  );
  const commentList = commentResponse.data.list ?? [];

  return {
    props: {
      id,
      article,
      commentList,
    },
  };
}

interface DetailBoardProps {
  id: number;
  article: Article;
  commentList: IComment[];
}

function DetailBoard({
  id,
  article,
  commentList: initialCommentList,
}: DetailBoardProps) {
  const [commentList, setCommentList] = useState(initialCommentList);

  return (
    <div>
      <div className="mb-8">
        <DetailArticle article={article} />
      </div>
      <div className="mb-10">
        <AddComment id={id} setCommentList={setCommentList} />
      </div>
      <CommentList commentList={commentList} />
      <ReturnButton href="/boards" text="목록으로 돌아가기" />
    </div>
  );
}

export default DetailBoard;
