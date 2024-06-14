"use strict";

export default function () {
  let root;
  let component;

  function define(initRoot, initComponent) {
    root = initRoot;
    component = initComponent;
    connected();
  }

  function connected() {
    const { css, template, event } = component();

    css(root);
    template(root);
    event(root);
  }

  return { define };
}
