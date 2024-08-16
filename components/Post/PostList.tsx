import Link from "next/link";
import Image from "next/image";
import styles from "./PostList.module.css";
import { IPostList } from "./types/PostType";

export default function PostList({ postList }: IPostList) {
  const convertDate = new Date(postList.createdAt).toLocaleDateString("ko-KR");

  return (
    <article>
      <Link href="/">
        <div className={styles.postListContainer}>
          <div className={styles.titleContainer}>
            <h2 className={styles.postTitle}>{postList.title}</h2>
            <div className={styles.postImage}>
              <Image
                fill
                src={postList.image}
                alt="게시글 이미지"
                sizes="width : 72px, height : 72px"
              />
            </div>
          </div>
          <div className={styles.writerContainer}>
            <div className={styles.profileContainer}>
              <div className={styles.profileImage}>
                <Image
                  fill
                  src="/images/profile@2.png"
                  alt="프로필 이미지"
                  sizes="width : 24px, height : 24px"
                />
              </div>
              <span className={styles.nickName}>
                {postList.writer.nickname}
              </span>
              <span className={styles.date}>{convertDate}</span>
            </div>
            <div className={styles.postLike}>
              <span className={styles.favoriteicon}>
                <Image
                  fill
                  src="/images/icon/heart_Icon.png"
                  alt="좋아요 아이콘"
                  sizes="width : 24px, height : 24px"
                />
              </span>
              <span className={styles.likeCount}>{postList.likeCount}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
