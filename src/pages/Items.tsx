import React from "react";
import BestItemsContainer from "../components/Items/BestItemsContainer";
import AllItemsContainer from "../components/Items/AllItemsContainer";
import "./Items.css";

function Items() {
  return (
    <main className="flex flex-col gap-10 font-pretendard pt-24 w-[1200px] m-auto mb-10">
      <BestItemsContainer />
      <AllItemsContainer />
    </main>
  );
}

export default Items;
