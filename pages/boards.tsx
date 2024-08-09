import BestPostList from '@/components/boards/BestPostList';
import PostList from '@/components/boards/PostList';
import styles from './boards.module.scss';

export default function Boards() {
  return (
    <div className={styles.boards}>
      <BestPostList />
      <PostList />
    </div>
  );
}
