import React from "react";

import { Header } from "./items/home";
import { Main } from "./items/old";

const Items: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Header />
      <Main />
    </div>
  );
};

export default Items;
