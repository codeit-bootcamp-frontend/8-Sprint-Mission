import AllBoard from "@/components/boards/AllBoard";
import BestBoard from "@/components/boards/BestBoard";

export const getStaticProps = async () => {
  const response = await fetch(
    `https://panda-market-api.vercel.app/articles?orderBy=recent`
  );
  const data = await response.json();

  return {
    props: {
      initialArticles: data.list,
    },
  };
};

function Board({ initialArticles }) {
  return (
    <>
      <BestBoard />
      <AllBoard initialArticles={initialArticles} />
    </>
  );
}

export default Board;
