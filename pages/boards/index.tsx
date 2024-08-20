import Navbar from "@/components/Navbar";
import AllArticles from "@/components/boards/AllArticles";
import BestArticles from "@/components/boards/BestArticles";
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
      <BestArticles />
      <AllArticles initialArticles={allArticles} />
    </>
  );
}
