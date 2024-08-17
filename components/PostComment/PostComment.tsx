import Image from "next/image";
import CommentList from "./CommentList";
import { CommentType } from "./types/CommentType";
import Section from "../Section/Section";
import CommnetForm from "./CommentForm";
import styles from "./PostComment.module.css";
import Link from "next/link";

interface CommentListType {
  comment: CommentType;
}

export default function PostComment({ comment }: CommentListType) {
  const commentList = comment.length ? (
    <div>
      {comment.map((list) => (
        <CommentList comment={list} />
      ))}
    </div>
  ) : (
    <div className={styles.emptyComment}>
      <Image
        width={140}
        height={140}
        src="/images/Img_reply_empty@2x.png"
        alt="문의가 없습니다"
      />
      <span>
        아직 댓글이 없어요!
        <br />
        지금 댓글을 달아보세요!
      </span>
    </div>
  );

  return (
    <Section>
      <CommnetForm />
      {commentList}
      <div className={styles.historyAction}>
        <Link className={styles.historyBtn} href="/boards">
          목록으로 돌아가기
          <Image
            width={24}
            height={24}
            src="/images/icon/ic_back.png"
            alt="목록으로 돌아가기"
          />
        </Link>
      </div>
    </Section>
  );
}
