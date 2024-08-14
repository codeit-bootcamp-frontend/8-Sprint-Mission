import Navbar from "@/components/Navbar";
import AllArticles from "@/components/AllArticles";
import BestArticles from "@/components/BestArticles";
import { GetServerSideProps } from "next";
import Article from "@/types/types";
import axios from "axios";

export const getServerSideProps: GetServerSideProps = async () => {
  let allArticles = [];
  try {
    const res = await axios.get(`/articles?orderBy=recent`);
    allArticles = res.data.results || res.data.list || [];
  } catch (error) {
    console.error("Failed to fetch all articles", error);
  }

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
