import Section from '../Section/Section';
import Image from 'next/image';
import { PostTypes } from './types/PostType';
import styles from './PostDetail.module.css';

interface PostDetailType {
  post: PostTypes;
}

export default function PostDetail({ post }: PostDetailType) {
  const convertDate = new Date(post.createdAt)
    .toLocaleDateString('ko-KR')
    .slice(0, -1);
  return (
    <Section>
      <div className={styles.detailContainer}>
        <h2 className={styles.detailTitle}>{post.title}</h2>
        <div className={styles.profileContainer}>
          <div className={styles.userProfile}>
            <Image
              width={40}
              height={40}
              src="/images/profile@2.png"
              sizes="width: 40px, heigth: 40px "
              alt="프로필 이미지"
            />
            <span className={styles.writerNickName}>
              {post.writer.nickname}
            </span>
            <span className={styles.writerDate}>{convertDate}</span>
          </div>
          <div className={styles.likeContainer}>
            <Image
              width={32}
              height={32}
              src="/images/icon/heart_icon.png"
              alt="좋아요 아이콘"
              sizes="width: 32px, heigth: 32px "
            />
            <span className={styles.likeCount}>{post.likeCount}</span>
          </div>
        </div>
        <div>
          <p className={styles.content}> {post.content}</p>
        </div>
      </div>
    </Section>
  );
}
