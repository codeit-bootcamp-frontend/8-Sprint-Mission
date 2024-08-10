import { useRouter } from "next/router";
import React from "react";

const BoardsThreadPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>{id}번 게시글 페이지</div>;
};

export default BoardsThreadPage;
