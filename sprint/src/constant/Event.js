"use strict";

import CustomRouter from "../utils/CustomRouter.js";
import ID from "./ID.js";
import Regex from "./Regex.js";
import Message from "./Message.js";

function navigateTo(to, root) {
  CustomRouter.setRoute(to, root);
  if (to === "home") {
    window.location.reload();
    window.scrollTo(0, 0);
  }
}

function submitToggle(form, isCompleted) {
  const button = form.querySelector(".btn-submit");
  button.classList.toggle("btn-primary", isCompleted);
  button.classList.toggle("btn-inactive", !isCompleted);
}

function formCheck(target, root) {
  const section = target.closest("section");
  const desc = section.querySelector(".form-desc");
  let { name, value } = target;
  desc.textContent = "";

  if (!value) {
    target.classList.toggle("error", true);
    desc.textContent = Message[name]["empty"];
    return;
  }
  target.classList.toggle("error", false);

  const form = target.closest("form");
  const formData = new FormData(form);

  let isValid;
  if (name !== "_password") {
    isValid = Regex[name].test(value);
  } else {
    const password = formData.get("password");
    isValid = password === value;
  }

  if (!isValid) {
    desc.textContent = Message[name]["invalid"];
    target.classList.add("error");
    target.value = "";
    submitToggle(form, false);
    return;
  }

  let isCompleted = formData.entries().every((entry) => entry[1]);
  submitToggle(form, isCompleted);
}

function passwordVisibility(target) {
  const pwInput = target.previousElementSibling;
  const visible = target.dataset.visible === "true";
  pwInput.setAttribute("type", visible ? "text" : "password");
  target.src = visible
    ? "./assets/svg/ic_visibility_on.svg"
    : "./assets/svg/ic_visibility_off.svg";
  target.dataset.visible = String(!visible);
}

export default {
  [ID.HOME_CONTAINER]: {
    click: ({ target }, root) => {
      const dataset = target.dataset;
      if (dataset.hasOwnProperty("to")) {
        navigateTo(dataset.to, root);
      } else if (dataset.hasOwnProperty("visible")) {
        passwordVisibility(target);
      }
    },
  },
  [ID.SIGN_IN_CONTAINER]: {
    click: ({ target }, root) => {
      const dataset = target.dataset;
      if (dataset.hasOwnProperty("to")) {
        navigateTo(dataset.to, root);
      } else if (dataset.hasOwnProperty("visible")) {
        passwordVisibility(target);
      }
    },
    focusout: ({ target }) => {
      if (target.classList.contains("form-input")) {
        formCheck(target, root);
      }
    },
  },
  [ID.SIGN_UP_CONTAINER]: {
    click: ({ target }, root) => {
      const dataset = target.dataset;
      if (dataset.hasOwnProperty("to")) {
        navigateTo(dataset.to, root);
      } else if (dataset.hasOwnProperty("visible")) {
        passwordVisibility(target);
      }
    },
    focusout: ({ target }) => {
      if (target.classList.contains("form-input")) {
        formCheck(target, root);
      }
    },
  },
};
