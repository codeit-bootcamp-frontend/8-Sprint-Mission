import AllArticlesBoard from '@/src/components/board/AllArticlesBoard/AllArticlesBoard';
import BestArticlesSection from '@/src/components/board/BestArticlesSection/BestArticlesSection';
import BasicLayout from '@/src/components/layout/BasicLayout/BasicLayout';

const BoardPage = ({}) => {
  return (
    <>
      <BasicLayout>
        <BestArticlesSection />
        <AllArticlesBoard />
      </BasicLayout>
    </>
  );
};

export default BoardPage;
