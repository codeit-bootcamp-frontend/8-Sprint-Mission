import React from "react";
import BestItemsContainer from "../components/Items/BestItemsContainer";
import AllItemsContainer from "../components/Items/AllItemsContainer";
import "./Items.css";

function Items() {
  return (
    <>
      <BestItemsContainer />
      <AllItemsContainer />
    </>
  );
}

export default Items;
