import Navbar from "@/components/Navbar";
import AllArticles from "@/components/AllArticles";
import BestArticles from "@/components/BestArticles";
import { GetServerSideProps } from "next";
import Article from "@/types/types";
import { fetchArticles } from "@/lib/api";

export const getServerSideProps: GetServerSideProps = async () => {
  let allArticles = [];

  allArticles = await fetchArticles();
  return {
    props: {
      allArticles,
    },
  };
};

interface BoardsProps {
  allArticles: Article[];
}

export default function Boards({ allArticles }: BoardsProps) {
  return (
    <>
      <Navbar />
      <BestArticles />
      <AllArticles initialArticles={allArticles} />
    </>
  );
}
