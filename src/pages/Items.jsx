import { useLocation } from "react-router";

import HeaderNav from "../components/reusable/HeaderNav";
import ItemsMain from "../components/items/ItemsMain";

function Items() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <HeaderNav path={path} />
      <ItemsMain />
    </>
  );
}

export default Items;
