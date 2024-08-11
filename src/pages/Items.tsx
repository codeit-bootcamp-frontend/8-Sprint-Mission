import React from "react";
import BestItemsContainer from "../components/Items/BestItemsContainer";
import AllItemsContainer from "../components/Items/AllItemsContainer";
import Main from "components/common/Layout/Main";

function Items() {
  return (
    <Main>
      <BestItemsContainer />
      <AllItemsContainer />
    </Main>
  );
}

export default Items;
