import React from "react";
import BannerTop from "./banner-top/BannerTop";
import Guide from "./guide/Guide";
import BannerBot from "./banner-bot/BannerBot";

const Main: React.FC = () => {
  return (
    <main
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <BannerTop />
      <Guide />
      <BannerBot />
    </main>
  );
};

export default Main;
