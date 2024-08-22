import React from "react";
import BestPosts from "../components/Boards/BestPosts";
import AllPosts from "../components/Boards/AllPosts";
import Main from "components/@shared/Layout/Main";

function Boards() {
  return (
    <Main>
      <BestPosts />
      <AllPosts />
    </Main>
  );
}

export default Boards;
