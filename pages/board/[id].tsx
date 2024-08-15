import { useEffect, useState } from "react";
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
  const commentsResponse = await axios.get(
    `/products/${id}/comments?limit=${LIMIT}`,
  );
  const comments = commentsResponse.data.list ?? [];

  return {
    props: {
      article,
      comments,
    },
  };
}

interface DetailBoardProps {
  article: Article;
  comments: IComment[];
}

function DetailBoard({ article, comments }: DetailBoardProps) {
  return (
    <div>
      <DetailArticle article={article} />
      <AddComment />
      <CommentList comments={comments} />
      <ReturnButton href="/boards" text="목록으로 돌아가기" />
    </div>
  );
}

export default DetailBoard;
