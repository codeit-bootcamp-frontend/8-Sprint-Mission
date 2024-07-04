import React from "react";
import BestItemsContainer from "../components/Items/BestItemsContainer";
import AllItemsContainer from "../components/Items/AllItemsContainer";
import PageNavBar from "../components/Items/PageNavBar";
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
