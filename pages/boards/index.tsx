import s from '@/styles/boards.module.scss';
import BestPost from '@/components/BestPost';
import AllPost from '@/components/AllPost';

export async function getStaticProps() {
  const response = await fetch(`https://panda-market-api.vercel.app/articles?orderBy=recent`);
  const data: ArticleListResponse = await response.json();

  return {
    props: {
      initialArticles: data.list,
    },
  };
}

type Boards = {
  initialArticles: Article[];
};

function Boards({ initialArticles }: Boards) {
  return (
    <div className={s.container}>
      <BestPost />
      <AllPost initialArticles={initialArticles} />
    </div>
  );
}

export default Boards;
