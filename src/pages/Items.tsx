import React from "react";
import BestItemsContainer from "../components/Items/BestItemsContainer";
import AllItemsContainer from "../components/Items/AllItemsContainer";

function Items() {
  return (
    <main className="flex flex-col gap-10 font-pretendard pt-24 w-[1200px] max-md:w-full max-xl:w-full m-auto mb-10 max-md:px-4 max-xl:px-6">
      <BestItemsContainer />
      <AllItemsContainer />
    </main>
  );
}

export default Items;
