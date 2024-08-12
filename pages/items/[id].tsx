import React from "react";
import { useRouter } from "next/router";

const Item = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h2>ID: {id}의 아이템 상세</h2>
      <h2> 공사 중</h2>
    </div>
  );
};

export default Item;
