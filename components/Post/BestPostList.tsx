import Link from "next/link";
import Image from "next/image";
import styles from "./BestPostList.module.css";
import { IPostList } from "./types/PostType";

export default function BestPostList({ postList }: IPostList) {
  const convertDate = new Date(postList.createdAt).toLocaleDateString("ko-KR");

  return (
    <article className={styles.postListContainer}>
      <Link href="/">
        <div className={styles.badgeContainer}>
          <div className={styles.medalIcon}>
            <Image
              fill
              src="/images/icon/medal@2x.png"
              alt="메달 아이콘"
              sizes="width : 16px, height : 16px"
            />
          </div>
          <span>Best</span>
        </div>
        <div className={styles.titleContainer}>
          <h2 className={styles.postTitle}>{postList.title}</h2>
          <div className={styles.postImage}>
            <Image
              fill
              src={postList.image}
              alt="게시글 이미지"
              sizes="width : 74px, height : 74px"
            />
          </div>
        </div>
        <div className={styles.writerContainer}>
          <div className={styles.postLike}>
            <span className={styles.nickName}>{postList.writer.nickname}</span>
            <span className={styles.favoriteicon}>
              <Image
                fill
                src="/images/icon/heart_Icon.png"
                alt="좋아요 아이콘"
                sizes="width : 16px, height : 16px"
              />
            </span>
            <span className={styles.likeCount}>{postList.likeCount}</span>
          </div>
          <span className={styles.date}>{convertDate}</span>
        </div>
      </Link>
    </article>
  );
}
