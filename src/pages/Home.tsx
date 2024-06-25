import React from "react";

import { Header, Main, Footer } from "./items/home";

const Home: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
