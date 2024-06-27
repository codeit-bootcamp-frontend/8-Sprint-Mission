import React from "react";
import "../Main.css";

function PageNavBar() {
  return (
    <div className="page-nav-bar">
      <button className="page-nav-btn page-previous">{"<"}</button>
      <button className="page-nav-btn page-1">1</button>
      <button className="page-nav-btn page-2">2</button>
      <button className="page-nav-btn page-3">3</button>
      <button className="page-nav-btn page-4">4</button>
      <button className="page-nav-btn page-5">5</button>
      <button className="page-nav-btn page-next">{">"}</button>
    </div>
  );
}

export default PageNavBar;
