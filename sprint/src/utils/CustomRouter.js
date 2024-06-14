"use strict";

import CustomElement from "./CustomElement.js";

export default (function () {
  let routes;
  let route;

  function createRouteElements(initRoutes) {
    routes = initRoutes;
    route = routes.find((route) => route.default);
  }

  function currentRoute() {
    return route;
  }

  function setRoute(newPath, root) {
    route = routes.find((route) => route.path === newPath);
    routing(root);
  }

  function routing(root) {
    root.innerHTML = "";
    root.innerHTML = "<div id='router'></div>";
    CustomElement().define(document.getElementById("router"), route.component);
  }

  return { createRouteElements, currentRoute, setRoute, routing };
})();
