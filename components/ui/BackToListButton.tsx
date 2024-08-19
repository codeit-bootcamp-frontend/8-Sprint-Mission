import { useRouter } from "next/router";
import React from "react";

function BackToListButton() {
  const router = useRouter();
  const onClickBack = () => {
    router.back();
  };
  return (
    <button
      onClick={onClickBack}
      className="bg-my-blue w-[240px] h-12 mx-auto mb-44 mt-10 text-white rounded-[40px]"
    >
      목록으로 돌아가기
    </button>
  );
}

export default BackToListButton;
