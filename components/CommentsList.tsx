import CommentType from "@/types/types";
import Image from "next/image";
import styles from "./CommentsList.module.css";

interface CommentProps {
  comment: CommentType;
}

export function CommentsList({ comment }: CommentProps) {
  const createdDate = new Date(comment.createdAt);
  const updatedDate = new Date(comment.updatedAt);

  const timeDifference = updatedDate.getTime() - createdDate.getTime();

  const hoursDifference = Math.ceil(timeDifference / (1000 * 60 * 60));

  return (
    <>
      <section className={styles.contentWrapper}>
        <p className={styles.content}>{comment.content}</p>
        <Image src="/ic_modify.png" alt="수정 아이콘" width={24} height={24} />
      </section>
      <section className={styles.profile}>
        <Image src="/profile.png" alt="프로필 이미지" width={32} height={32} />
        <div className={styles.writer}>
          <p className={styles.nickname}>{comment.writer.nickname}</p>
          <p className={styles.time}>{hoursDifference}시간 전</p>
        </div>
      </section>
    </>
  );
}

export function CommentEmpty() {
  return (
    <>
      <Image
        src="/Img_reply_empty.png"
        className={styles.emptyImg}
        alt="아직 댓글이 없어요 이미지"
        width={140}
        height={140}
      />
      <p className={styles.emptyTitle}>
        아직 댓글이 없어요, <br />
        지금 댓글을 달아보세요!
      </p>
    </>
  );
}
