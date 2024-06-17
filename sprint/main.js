"use strict";

import CustomRouter from "./src/utils/CustomRouter.js";
import CustomElement from "./src/utils/CustomElement.js";
import Root from "./src/Root.js";
import Home from "./src/pages/Home.js";
import In from "./src/pages/sign/in.js";
import Up from "./src/pages/sign/Up.js";

document.addEventListener("DOMContentLoaded", () => {
  CustomRouter.createRouteElements([
    {
      path: "home",
      component: Home,
      default: true,
    },
    {
      path: "sign-in",
      component: In,
    },
    {
      path: "sign-up",
      component: Up,
    },
  ]);

  CustomElement().define(document.getElementById("root"), Root);
});
