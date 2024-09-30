import { useState } from "react";
import { GetServerSidePropsContext } from "next";
import { Article } from "@/types/article";
import { CommentTypes } from "@/types/comment";
import instance from "@/lib/instance";
import { API_PATH } from "@/lib/path";

import DetailArticle from "@/components/DetailArticle";
import AddComment from "@/components/AddComment";
import CommentList from "@/components/CommentList/CommentList";
import ReturnButton from "@/components/Buttons/ReturnButton";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params || {};
  const articleId = Array.isArray(id) ? id[0] : id;

  if (!articleId) {
    return {
      notFound: true,
    };
  }
  const articleResponse = await instance.get(API_PATH.articleById(articleId));
  const article = articleResponse.data ?? [];

  const LIMIT = 10;
  const commentResponse = await instance.get(
    API_PATH.articleCommentsWithLimit(articleId, LIMIT),
  );
  const commentList = commentResponse.data.list ?? [];

  return {
    props: {
      articleId,
      article,
      commentList,
    },
  };
}

interface DetailBoardProps {
  id: number;
  article: Article;
  commentList: CommentTypes[];
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
