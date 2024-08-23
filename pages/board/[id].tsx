import { getArticle, getComments } from "@/lib/articleApi";
import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import kebabIcon from "@/public/images/icons/ic_kebab.svg";
import Image from "next/image";
import { Article, CommentsResponse } from "@/types/types";
import styles from "./board.module.css";
import profileIcon from "@/public/images/icons/ic_profile.svg";
import heartIcon from "@/public/images/icons/ic_heart.svg";
import backIcon from "@/public/images/icons/ic_back.svg";
import Link from "next/link";
import useDateFormat from "@/lib/hooks/useDateFormat";

const DetailBoard = () => {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState<Article>();
  const [comments, setComments] = useState<CommentsResponse>();
  const [commentValue, setCommentValue] = useState("");
  const { format: dateFormat } = useDateFormat();

  const fetchArticle = async (articleId: number) => {
    const result = await getArticle(articleId);
    setArticle(result);
  };

  const fetchComments = async (articleId: number, limit: number) => {
    const result = await getComments(articleId, limit);
    setComments(result);
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(e.target.value);
  };

  useEffect(() => {
    if (id) {
      fetchArticle(Number(id));
      fetchComments(Number(id), 5);
    }
  }, [id]);

  return (
    <>
      <div className={styles.articleDetail}>
        <div className={styles.articleHeader}>
          <h2 className={styles.articleTitle}>{article?.title}</h2>
          <Image src={kebabIcon} alt="kebabIcon" width={24} height={24} />
        </div>
        <div className={styles.writerSection}>
          <div className={styles.writer}>
            <Image src={profileIcon} alt="profileIcon" width={40} height={40} />
            <span className={styles.ArticleNickname}>
              {article?.writer.nickname}
            </span>
            <span className={styles.ArticleCreateAt}>
              {article?.createdAt ? dateFormat(article?.createdAt) : ""}
            </span>
          </div>
          <div className={styles.verticalLine}></div>
          <div className={styles.likeCountSection}>
            <Image src={heartIcon} alt="heartIcon" width={25} height={25} />
            <span className={styles.likeCount}>{article?.likeCount}</span>
          </div>
        </div>
        <hr className={styles.horizontalLine} />
        <h3 className={styles.articleContent}>{article?.content}</h3>
      </div>
      <form className={styles.commentForm}>
        <label htmlFor="commentTextarea" className={styles.commentLabel}>
          댓글달기
        </label>
        <textarea
          name="comment"
          id="commentTextarea"
          className={styles.commentTextarea}
          placeholder="댓글을 입력해주세요"
          value={commentValue}
          onChange={handleChange}
        />
        <button
          className={styles.commentSubmitBtn}
          disabled={commentValue ? false : true}
        >
          등록
        </button>
      </form>
      <div>
        {comments?.list.map((comment) => {
          return (
            <div className={styles.comment} key={comment.id}>
              <div className={styles.commentContentSection}>
                <span>{comment.content}</span>
                <Image src={kebabIcon} alt="kebabIcon" />
              </div>
              <div className={styles.commentWriter}>
                <Image
                  src={
                    comment.writer.image ? comment.writer.image : profileIcon
                  }
                  alt="profileIcon"
                  width={32}
                  height={32}
                />
                <div>
                  <p className={styles.writerNickname}>
                    {comment.writer.nickname}
                  </p>
                  <p className={styles.writerTime}>
                    {comment.createdAt ? dateFormat(comment.createdAt) : ""}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.backSection}>
        <Link href="/boards" className={styles.backBtn}>
          <span>목록으로 돌아가기</span>
          <Image src={backIcon} alt="backIcon" />
        </Link>
      </div>
    </>
  );
};

export default DetailBoard;
