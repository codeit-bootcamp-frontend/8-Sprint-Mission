import React from "react";
import BestItemsSection from "../Market/components/BestItemsSection";
import AllItemsSection from "../Market/components/AllItemsSection";
import "../Market/Market.css";

function Login() {
  return (
    <div className="wrapper">
      <BestItemsSection />
      <AllItemsSection />
    </div>
  );
}

export default Login;
