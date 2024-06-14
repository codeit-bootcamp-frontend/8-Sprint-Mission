import {
  validEmail,
  validPassword,
  validNickname,
  validConfirmPassword,
} from "./utils/valid.js";

const authForm = document.querySelector(".auth_form");
const authInputs = document.querySelectorAll(".auth_input");
const password = document.getElementById("login-password");
const confirmPassword = document.getElementById("login-confirm_password");
const submitButton = document.querySelector(".submit-button");

authForm.addEventListener("focusout", focusoutAuthInput);
authForm.addEventListener("keyup", keyupConfirmPassword);
authForm.addEventListener("click", setIsViewAboutPassword);

submitButton.addEventListener("click", (e) => {
  if (e.detail === 0) e.preventDefault();
  console.log("click");
});

function setIsViewAboutPassword(e) {
  const { target } = e;
  const { parentElement } = target;

  if (!parentElement.classList.contains("view-password")) return;
  if (target.tagName !== "IMG") return;

  const hiddenImg = parentElement.querySelector(".hidden");
  console.dir(target);
  console.dir(hiddenImg);
  target.classList.toggle("hidden");
  hiddenImg.classList.toggle("hidden");

  const password = parentElement.parentElement.querySelector(".auth_input");
  const type = password.getAttribute("type");
  password.setAttribute("type", type === "text" ? "password" : "text");
}

function focusoutAuthInput(e) {
  const target = e.target;

  if (!target.classList.contains("auth_input")) return;
  if (target.id === "login-id") validEmail(target);
  else if (target.id === "login-nickname") validNickname(target);
  else if (target.id === "login-password") validPassword(target);
  toggleButtonState();
}

function keyupConfirmPassword(e) {
  const target = e.target;

  if (target.id !== "login-password" && target.id !== "login-confirm_password")
    return;
  validConfirmPassword(password, confirmPassword);
  //toggleButtonState();
}

function toggleButtonState() {
  const hasNotInvalid = [...authInputs].every((input) => input.checkValidity());

  if (hasNotInvalid) submitButton.classList.add("active");
  else submitButton.classList.remove("active");
}
