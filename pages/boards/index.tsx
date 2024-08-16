import s from '@/styles/Boards.module.scss';
import BestPostSection from '@/components/BestPostSection';
import AllPostSection from '@/components/AllPostSection';

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
    <div>
      <div className={s.container}>
        <BestPostSection />
        <AllPostSection initialArticles={initialArticles} />
      </div>
    </div>
  );
}

export default Boards;
