import React from "react";
import axios from "@/lib/axios";
import AllBoard from "@/components/boards/AllBoard";
import BestBoard from "@/components/boards/BestBoard";
import { Article } from "@/types/article";

interface GetStaticPropsResult {
  initialArticles: Article[];
}

export const getStaticProps: GetStaticProps<
  GetStaticPropsResult
> = async () => {
  try {
    const response = await axios.get<{ list: Article[] }>(
      `/articles?orderBy=recent`
    );
    const data = response.data;

    return {
      props: {
        initialArticles: data.list,
      },
    };
  } catch (error) {
    console.error("Error fetching articles:", error);

    return {
      props: {
        initialArticles: [],
      },
    };
  }
};

interface BoardProps {
  initialArticles: Article[];
}

function Board({ initialArticles }: BoardProps) {
  return (
    <>
      <BestBoard />
      <AllBoard initialArticles={initialArticles} />
    </>
  );
}

export default Board;
