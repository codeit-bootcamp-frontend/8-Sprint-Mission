import React from "react";
import BestPosts from "../components/Boards/BestPosts";
import AllPosts from "../components/Boards/AllPosts";

function Boards() {
  return (
    <main className="flex flex-col gap-10 font-pretendard pt-24 w-[1200px] m-auto mb-10 max-md:px-4 max-xl:px-6">
      <BestPosts />
      <AllPosts />
    </main>
  );
}

export default Boards;
