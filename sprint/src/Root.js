"use strict";

import CustomRouter from "./utils/CustomRouter.js";

export default function () {
  function template(root) {
    return CustomRouter.routing(root);
  }

  function event() {}
  function css() {}
  return { template, event, css };
}
