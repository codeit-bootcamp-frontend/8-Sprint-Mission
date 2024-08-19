import ArticleComments from '@/components/article/ArticleComments';
import ArticleInfo from '@/components/article/ArticleInfo';
import MainContainer from '@/components/container/MainContainer';
import NavLayout from '@/layouts/NavLayout';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

function ArticleDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <MainContainer className="mt-[94px]">
      <div className="mx-4 flex flex-col gap-4">
        <ArticleInfo articleId={id as string} />
        <ArticleComments />
      </div>
    </MainContainer>
  );
}

ArticleDetail.getLayout = function getLayout(page: ReactElement) {
  return <NavLayout>{page}</NavLayout>;
};

export default ArticleDetail;
