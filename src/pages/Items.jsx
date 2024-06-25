import { useLocation } from "react-router";
import { useEffect, useState } from "react";

import HeaderNav from "../components/reusable/HeaderNav";
import ItemsMain from "../components/items/ItemsMain";

function Items() {
  const [sizeName, setSizeName] = useState(
    window.innerWidth > 1200
      ? "large"
      : window.innerWidth > 765
      ? "medium"
      : "small"
  );
  const location = useLocation();
  const path = location.pathname;

  const sizeNaming = () => {
    if (window.innerWidth === 1200) {
      setSizeName("large");
    } else if (window.innerWidth === 1199 || window.innerWidth === 765) {
      setSizeName("medium");
    } else if (window.innerWidth === 764) {
      setSizeName("small");
    }
  };
  useEffect(() => {
    window.addEventListener("resize", sizeNaming);
  }, []);

  return (
    <>
      <HeaderNav path={path} />
      <ItemsMain sizeName={sizeName} />
    </>
  );
}

export default Items;
