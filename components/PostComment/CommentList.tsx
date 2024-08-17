import Image from "next/image";
import styles from "./PostComment.module.css";
import { PostListProps } from "../Post/types/PostType";
import convertTime from "@/utils/convertTime";

interface PostList {
  comment: PostListProps;
}

export default function CommentList({ comment }: PostList) {
  return (
    <article>
      <div className={styles.listContainer}>
        <div className={styles.contentContainer}>
          <h2 className={styles.commentContent}>{comment.content}</h2>
        </div>
        <div className={styles.writerContainer}>
          <div className={styles.profileContainer}>
            <div className={styles.profileImage}>
              <Image fill src="/images/profile@2.png" alt="프로필 이미지" />
            </div>
            <div className={styles.commentInfomation}>
              <span className={styles.nickName}>{comment.writer.nickname}</span>
              <span className={styles.date}>
                {convertTime(comment.updatedAt)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
