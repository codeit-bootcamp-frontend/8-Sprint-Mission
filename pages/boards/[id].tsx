import Article from "@/types/types";
import CommentType from "@/types/types";
import instance from "@/lib/api";
import { GetServerSidePropsContext } from "next";
import styles from "./id.module.css";
import Spinner from "@/components/Spinner";
import formatDate from "@/utils/fomatDate";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import { CommentsList } from "@/components/CommentsList";
import { CommentEmpty } from "@/components/CommentsList";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params as { id: string };

  let article = null;
  try {
    const res = await instance.get(`/articles/${id}`);
    article = res.data;
  } catch (error) {
    console.error("Error fetching article:", error);
    return {
      notFound: true,
    };
  }

  const res = await instance.get(`/articles/${id}/comments?limit=10`);
  const articleComments = res.data.results || res.data.list || [];

  return {
    props: {
      article,
      articleComments,
    },
  };
}

interface ArticleProps {
  article: Article | null;
  articleComments: CommentType[];
}

export default function ArticleDetail({
  article,
  articleComments,
}: ArticleProps) {
  const [value, setValue] = useState("");

  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const isSubmitDisabled = !value;

  if (!article) {
    return (
      <div className={styles.loading}>
        <Spinner />
        <p>로딩중입니다. 잠시만 기다려주세요.</p>
      </div>
    );
  }
  return (
    <>
      <section className={styles.articleDetail}>
        <h2 className={styles.title}>{article.title}</h2>
        <div className={styles.writerWrapper}>
          <div className={styles.writer}>
            <Image
              src="/profile.png"
              alt="프로필 이미지"
              width={40}
              height={40}
            />
            <div className={styles.nickname}>{article.writer.nickname}</div>
            <div className={styles.createdAt}>
              {formatDate(article.createdAt)}
            </div>
          </div>
          <hr className={styles.variableLine}></hr>
          <div className={styles.likeCount}>
            <Image
              src="/ic_heart.png"
              alt="좋아요 아이콘"
              width={32}
              height={32}
            />
            <div className={styles.likeCountNumber}>{article.likeCount}</div>
          </div>
        </div>
        <hr className={styles.lineDivider} />
        <h3 className={styles.content}>{article.content}</h3>
      </section>
      <section className={styles.commentsFormWrapper}>
        <h3>댓글달기</h3>
        <form className={styles.commentsForm} onSubmit={handleCommentSubmit}>
          <input
            className={styles.commentInput}
            name="comment"
            value={value}
            placeholder="댓글을 입력해주세요."
            onChange={handleCommentChange}
          />
          <button
            className={`${styles.button} ${
              !isSubmitDisabled ? styles.active : ""
            }`}
            type="submit"
            disabled={isSubmitDisabled}
          >
            등록
          </button>
        </form>
        {articleComments.length === 0 ? (
          <CommentEmpty />
        ) : (
          <div className={styles.commentsList}>
            {articleComments.map((comment) => (
              <CommentsList comment={comment} key={comment.id} />
            ))}
          </div>
        )}
      </section>
      <section className={styles.goBack}>
        <div className={styles.goBackTitle}>목록으로 돌아가기</div>
        <Image
          src="/ic_back.png"
          alt="목록으로 돌아가기 이미지"
          width={24}
          height={24}
        />
      </section>
    </>
  );
}
