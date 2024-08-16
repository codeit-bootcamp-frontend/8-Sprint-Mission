import React from "react";
import { useRouter } from "next/router";
import Article from "@/components/boards/Article";
import Inquery from "@/components/inquery/Inquery";

const board = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Article />
      <Inquery />
    </>
  );
};

export default board;
