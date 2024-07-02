import { useEffect, useState } from "react";
import ItemsMain from "../components/items/ItemsMain";
import { useParams } from "react-router-dom";

function Items() {
  const itemId = useParams();
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

  let timer = false;
  const onResize = () => {
    if (!timer) {
      timer = true;
      sizeNaming();
      setTimeout(() => {
        timer = false;
      }, 50);
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
      <ItemsMain sizeName={sizeName} />
    </>
  );
}

export default Items;
