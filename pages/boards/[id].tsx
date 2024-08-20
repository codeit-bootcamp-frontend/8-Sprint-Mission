import React from "react";
import { useRouter } from "next/router";
import Article from "@/components/boards/Article";
import Inquery from "@/components/inquery/Inquery";

const Board = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Article id={id} />
      <Inquery id={id} />
    </>
  );
};

export default Board;
