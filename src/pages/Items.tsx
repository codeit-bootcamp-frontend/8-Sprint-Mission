import AllItemsContainer from "components/Items/AllItemsContainer";
import BestItemsContainer from "components/Items/BestItemsContainer";
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
