import React from "react";
import BestItemsContainer from "../components/items/BestItemsContainer";
import AllItemsContainer from "../components/items/AllItemsContainer";
import PageNavBar from "../components/items/PageNavBar";
import "./Items.css";

function Items() {
  return (
    <>
      <BestItemsContainer />
      <AllItemsContainer />
      <PageNavBar />
    </>
  );
}

export default Items;
