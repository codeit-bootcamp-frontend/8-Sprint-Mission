import React from "react";
import AllItemsContainer from "components/items/AllItemsContainer";
import BestItemsContainer from "components/items/BestItemsContainer";
import Main from "components/@shared/Layout/Main";

function Items() {
  return (
    <Main>
      <BestItemsContainer />
      <AllItemsContainer />
    </Main>
  );
}

export default Items;
