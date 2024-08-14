import { GetServerSideProps } from "next"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { getArticle, getArticleComments } from "@/pages/api/apis";
import ArticleType from "@/DTO/article";
import CommentType from "@/DTO/commentType";
import useAsync from "@/lib/hooks/useAsync";
import formatComparedTime from "@/lib/formatComparedTime";
import styles from "@/styles/Article.module.css";

const COMMENTS_LIMIT = 5;

interface ArticleProps {
  id: string;
  article: ArticleType;
  comments: CommentType[];
  nextCursor: number | null;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params ? context.params['id'] as string : '0';

  let article: ArticleType;
  try {
    article = await getArticle(id);
  } catch {
    return {
      notFound: true
    }
  }

  let comments: CommentType[];
  let nextCursor: number | null;
  try {
    const response = await getArticleComments(id, COMMENTS_LIMIT);
    comments = response.list;
    nextCursor = response.nextCursor;
  } catch {
    comments = [];
    nextCursor = null;
  }

  return {
    props: {
      id,
      article,
      comments,
      nextCursor
    }
  }
}

export default function Article({ id, article, comments: initialComments, nextCursor: initialCursor }: ArticleProps) {
  const [comments, setComments] = useState(initialComments);
  const [nextCursor, setNextCursor] = useState(initialCursor);
  const { isPending: isCommentsPending, error: commentsError, wrappedAsyncFunction: getArticleCommentsAsync } = useAsync(getArticleComments);

  const handleLoadMoreComments = async () => {
    if(nextCursor === null) return;
    const response = await getArticleCommentsAsync(id, COMMENTS_LIMIT, nextCursor);
    const nextComments: CommentType[] = response.list ?? [];
    setComments((prev) => [...prev, ...nextComments]);
    setNextCursor(response.nextCursor);
  }

  return (
    <>
      <main className={styles.main}>
        <section className={styles.articleSection}>
          <h1 className={styles.articleTitle}>{article.title}</h1>
          <div className={styles.articleInfo}>
            <div className={styles.articleWriter}>
              <div className={styles.articleWriterProfileContainer}>
                <Image fill src="/images/ic_profile.svg" alt="프로필" />
              </div>
              <div className={styles.articleWriterInfo}>
                <span>{article.writer.nickname}</span>
                <span className={styles.articleCreatedAt}>{formatComparedTime(article.createdAt)}</span>
              </div>
            </div>
            <div className={styles.articleLike}>
              <div className={styles.heartContainer}>
                <Image fill src="/images/ic_heart.svg" alt="좋아요" />
              </div>
              <span>{article.likeCount}</span>
            </div>
          </div>
          <div className={styles.articleContent}>{article.content}</div>
        </section>
        <section className={styles.commentsSection}>
          <div className={styles.commentSubmitContainer}>
            <label className={styles.commentSubmitLabel}>
              <span>댓글달기</span>
              <textarea className={styles.commentSubmitInput} placeholder="댓글을 입력해주세요." />
            </label>
            <button className={styles.commentSubmitButton}>등록</button>
          </div>
          <ul className={styles.commentsList}>
            {comments.map((comment) => 
              <li className={styles.commentsListItem} key={comment.id}>
                <div className={styles.commentContent}>{comment.content}</div>
                <div className={styles.commentWriterContainer}>
                  <div className={styles.commentWriterProfileContainer}>
                    <Image fill src={comment.writer.image || "/images/ic_profile.svg"} alt="프로필" />
                  </div>
                  <div className={styles.commentWriterInfo}>
                    <span>{comment.writer.nickname}</span>
                    <span className={styles.commentCreatedAt}>{formatComparedTime(comment.createdAt)}</span>
                  </div>
                </div>
              </li>
            )}
            {((nextCursor !== null) && !isCommentsPending) && 
              <li className={styles.commentsListFooter} onClick={handleLoadMoreComments}>
                더보기
              </li>
            }
            {isCommentsPending && 
              <li className={styles.commentsListFooter}>
                불러오는중...
              </li>
            }
            {commentsError &&
              <li className={styles.commentsListFooter}>
                {`댓글을 불러오는중 에러가 발생했습니다${commentsError.message ? `:${commentsError.message}` : '.'}`}
              </li>
            }
          </ul>
        </section>
        <div className={styles.backButtonContainer}>
          <Link href="/boards" style={{ textDecoration: "none" }}>
            <div className={styles.backButton}>
              <span>목록으로 돌아가기</span>
              <div className={styles.backIconContainer}>
                <Image fill src="/images/ic_back.svg" alt="뒤로" />
              </div>
            </div>
          </Link>
        </div>
      </main>
    </>
  )
}