import { getArticle, getComments } from "@/lib/articleApi";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import kebabIcon from "@/public/images/icons/ic_kebab.svg";
import Image from "next/image";
import { Article, CommentsResponse } from "@/types/types";
import styles from "./board.module.css";
import profileIcon from "@/public/images/icons/ic_profile.svg";
import heartIcon from "@/public/images/icons/ic_heart.svg";

const DetailBoard = () => {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState<Article>();
  const [comments, setComments] = useState<CommentsResponse>();

  const fetchArticle = async (articleId: number) => {
    const result = await getArticle(articleId);
    setArticle(result);
  };

  useEffect(() => {
    id && fetchArticle(Number(id));
  }, [id]);

  const fetchComments = async (articleId: number, limit: number) => {
    const result = await getComments(articleId, limit);
    setComments(result);
  };

  useEffect(() => {
    id && fetchComments(Number(id), 5);
  }, [id]);

  const dateFormat = (date: Date) => {
    const newDate = new Date(date);
    const formatDate = `${newDate.getFullYear()}.${String(
      newDate.getMonth() + 1
    ).padStart(2, "0")}.${String(newDate.getDate()).padStart(2, "0")}`;
    return formatDate;
  };

  return (
    <>
      <div className={styles.articleDetail}>
        <div className={styles.articleHeader}>
          <h2 className={styles.articleTitle}>{article?.title}</h2>
          <Image src={kebabIcon} alt="kebabIcon" />
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
      <form>
        <label htmlFor="commentTextarea">댓글달기</label>
        <textarea
          name="comment"
          id="commentTextarea"
          placeholder="댓글을 입력해주세요"
        />
        <button>등록</button>
      </form>
      <div>
        {comments?.list.map((comment) => {
          return (
            <div key={comment.id}>
              <div>
                <span>{comment.content}</span>
                <Image src={kebabIcon} alt="kebabIcon" />
              </div>
              <div>
                <Image
                  src={
                    comment.writer.image ? comment.writer.image : profileIcon
                  }
                  alt="profileIcon"
                  width={32}
                  height={32}
                />
                <div>
                  <p>{comment.writer.nickname}</p>
                  <p>{comment.createdAt}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DetailBoard;
