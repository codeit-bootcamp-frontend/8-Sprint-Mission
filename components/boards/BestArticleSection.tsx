import { Suspense } from 'react';
import styles from './BestArticleSection.module.scss';
import dynamic from 'next/dynamic';

const BestArticleList = dynamic(() => import('../boards/BestArticleList'), {
  ssr: false,
});

function BestArticleSection() {
  return (
    <div className={styles.bestArticleSection}>
      <h2>베스트 게시글</h2>
      <Suspense fallback={<div>...loading</div>}>
        <BestArticleList />
      </Suspense>
    </div>
  );
}

export default BestArticleSection;
