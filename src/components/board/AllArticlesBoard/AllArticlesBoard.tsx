import SectionTitle from '@/src/core/ui/SectionTitle/SectionTitle';
import styles from './AllArticlesBoard.module.scss';
import UButton from '@/src/core/ui/buttons/UButton/UButton';

const AllArticlesBoard = ({}) => {
  return (
    <>
      <div className={styles['header']}>
        <SectionTitle title="게시글" />
        <UButton children={'글쓰기'} type="box" handleClick={() => {}} />
      </div>
      <div className={styles['searchBar']}></div>
      <div className={styles['articleList']}></div>
    </>
  );
};

export default AllArticlesBoard;
