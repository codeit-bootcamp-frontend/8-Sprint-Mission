import BestPost from './BestPost';
import styles from './BestPostList.module.scss';

function BestPostList() {
  return (
    <section className={styles.BestPostList}>
      <h2>베스트 게시글</h2>
      <BestPost />
    </section>
  );
}

export default BestPostList;
