import { useEffect, useState } from "react";
import { GetServerSidePropsContext } from "next";
import { Article } from "@/types/article";
import axios from "@/lib/axios";

import DetailArticle from "@/components/DetailArticle";
import ReturnButton from "@/components/Buttons/ReturnButton";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params || {};
  const response = await axios.get(`/articles/${id}`);
  const article = response.data ?? [];

  return {
    props: {
      article,
    },
  };
}

interface DetailBoardProps {
  article: Article;
}

function DetailBoard({ article }: DetailBoardProps) {
  return (
    <div>
      <DetailArticle article={article} />
      {/* <AddComment />
      <CommentList /> */}
      <ReturnButton href="/boards" text="목록으로 돌아가기" />
    </div>
  );
}

export default DetailBoard;
