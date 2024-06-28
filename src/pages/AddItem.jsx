import React, { useEffect } from "react";
import HeaderNav from "../components/reusable/HeaderNav";
import AddItemMain from "../components/addItem/AddItemMain";

function AddItem(props) {
  return (
    <>
      <HeaderNav nowPath="items" />
      <AddItemMain />
    </>
  );
}

export default AddItem;
