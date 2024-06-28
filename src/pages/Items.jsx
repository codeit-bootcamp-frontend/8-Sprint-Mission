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
  const sizeNaming = () => {
    if (window.innerWidth >= 1200) {
      setSizeName("large");
    } else if (window.innerWidth < 1200 && window.innerWidth >= 765) {
      setSizeName("medium");
    } else if (window.innerWidth < 765) {
      setSizeName("small");
    }
  };
  console.log(sizeName);

  // let timer;
  // const onResize = () => {
  //   if (timer) {
  //     clearTimeout(timer);
  //   }

  //   timer = setTimeout(() => {
  //     sizeNaming();
  //   }, 200);
  // };

  let timer = false;
  const onResize = () => {
    if (!timer) {
      timer = true;
      sizeNaming();
      setTimeout(() => {
        timer = false;
      }, 100);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <>
      <HeaderNav nowPath="items" />
      <ItemsMain sizeName={sizeName} />
    </>
  );
}

export default Items;
