import Link from 'next/link';
import Image from 'next/image';
import { PostListProps } from './types/PostType';
import styles from './BestPostList.module.css';

interface BestPostList {
  postList: PostListProps;
}

export default function BestPostList({ postList }: BestPostList) {
  const convertDate = new Date(postList.createdAt)
    .toLocaleDateString('ko-KR')
    .slice(0, -1);

  return (
    <article className={styles.postListContainer}>
      <Link href={`/board/${postList.id}`}>
        <div className={styles.badgeContainer}>
          <div className={styles.medalIcon}>
            <Image fill src="/images/icon/medal@2x.png" alt="메달 아이콘" />
          </div>
          <span>Best</span>
        </div>
        <div className={styles.titleContainer}>
          <h2 className={styles.postTitle}>{postList.title}</h2>
          <div className={styles.postImage}>
            {postList.image ? (
              <Image
                width={74}
                height={74}
                src={postList.image}
                alt="게시글 이미지"
              />
            ) : (
              <Image
                width={74}
                height={74}
                src="/images/img_default@2x.png"
                alt="게시글 이미지"
              />
            )}
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
