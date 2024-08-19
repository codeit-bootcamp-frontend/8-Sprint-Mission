import { getArticleByID, Article } from "@/axios/articles";
import { getArticleComments, ArticleCommentsResponse } from "@/axios/comments";
import React from "react";
import { GetServerSidePropsContext } from "next";
import GlobalNavBar from "@/components/@shared/GlobalNavBar";
import PostDetail from "@/components/boards/id/PostDetail";
import PostCommentForm from "@/components/boards/id/PostCommentForm";
import PostCommentCard from "@/components/boards/id/PostCommentCard";
import BlueButton from "@/components/@shared/BlueButton";
import Image from "next/image";
import Link from "next/link";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params ? Number(context.params["id"]) : null;
  try {
    if (id === null) {
      throw new Error("id 값이 올바르지 않습니다.");
    }
    const article = await getArticleByID({ articleId: id });
    const commentsRes = await getArticleComments({ articleId: id, limit: 10 });
    return { props: { article, commentsRes } };
  } catch {
    return { notFound: true };
  }
}

function NoComments() {
  return (
    <div className="w-[151px] h-[208px] mx-auto">
      <Image width={151} height={208} src="/images/img_no_comments.png" alt="댓글 없음 이미지" />
    </div>
  );
}

function BackToBoardsPageButton() {
  return (
    <Link
      href="/boards"
      className="block w-[240px] h-[48px] mx-auto mt-[40px] md:mt-[56px] xl:mt-[64px]"
    >
      <BlueButton shape="pill">
        <div>목록으로 돌아가기</div>
        <Image width={24} height={24} src="/images/ic_back_arrow.svg" alt="돌아가기 아이콘" />
      </BlueButton>
    </Link>
  );
}

interface PostDetailPageProps {
  article: Article;
  commentsRes: ArticleCommentsResponse;
}

export default function PostDetailPage({ article, commentsRes }: PostDetailPageProps) {
  const { nextCursor, list } = commentsRes;
  const [comments, setComments] = React.useState(list);
  const [cursor, setCursor] = React.useState(nextCursor);

  return (
    <>
      <GlobalNavBar />
      <main className="mx-[16px] my-[24px] md:mx-[24px] xl:mx-auto xl:w-[1200px]">
        <PostDetail article={article} />
        <PostCommentForm onChangeComments={setComments} />
        {comments.length !== 0 ? (
          <ul className="flex flex-col gap-[16px] md:gap-[24px]">
            {comments.map((comment) => (
              <PostCommentCard key={comment.id} comment={comment} />
            ))}
          </ul>
        ) : (
          <NoComments />
        )}
        <BackToBoardsPageButton />
      </main>
    </>
  );
}
