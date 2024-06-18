const VALID_EMAIL_PATTERN = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

const emailInput = document.getElementById("input-email");
const nicknameInput = document.getElementById("input-nickname");
const passwordInput = document.getElementById("input-password");
const passwordCheckInput = document.getElementById("input-password-check");

const emailErrorMessage = document.querySelector(".error-message.email");
const nicknameErrorMessage = document.querySelector(".error-message.nickname");
const passwordErrorMessage = document.querySelector(".error-message.password");
const passwordCheckErrorMessage = document.querySelector(
  ".error-message.password-check"
);

const passwordVisibilityButton = document.querySelector(
  ".password-show-btn.password"
);
const passwordVisibilityIcon = document.querySelector(
  ".password-show-icon.password"
);
const passwordCheckVisibilityButton = document.querySelector(
  ".password-show-btn.password-check"
);
const passwordCheckVisibilityIcon = document.querySelector(
  ".password-show-icon.password-check"
);
const signupButton = document.querySelector(".form-signup-btn");

const handleFocusOutEmailInput = ({ target }) => {
  if (target.value === "") {
    showErrorMessage(target, emailErrorMessage);
    emailErrorMessage.textContent = "이메일을 입력해주세요.";
    disableButton(signupButton);
    return;
  }
  if (!VALID_EMAIL_PATTERN.test(target.value)) {
    showErrorMessage(target, emailErrorMessage);
    emailErrorMessage.textContent = "잘못된 이메일 형식입니다.";
    disableButton(signupButton);
    return;
  }
  hideErrorMessage(target, emailErrorMessage);
  checkInputs();
};
emailInput.addEventListener("focusout", handleFocusOutEmailInput);

const handleFocusOutNicknameInput = ({ target }) => {
  if (target.value === "") {
    showErrorMessage(target, nicknameErrorMessage);
    nicknameErrorMessage.textContent = "닉네임을 입력해주세요.";
    disableButton(signupButton);
    return;
  }
  hideErrorMessage(target, nicknameErrorMessage);
  checkInputs();
};
nicknameInput.addEventListener("focusout", handleFocusOutNicknameInput);

const handleFocusOutPasswordInput = ({ target }) => {
  if (target.value === "") {
    showErrorMessage(target, passwordErrorMessage);
    passwordErrorMessage.textContent = "비밀번호를 입력해주세요.";
    disableButton(loginButton);
    return;
  }
  if (target.value.length < 8) {
    showErrorMessage(target, passwordErrorMessage);
    passwordErrorMessage.textContent = "비밀번호를 8자 이상 입력해주세요.";
    disableButton(loginButton);
    return;
  }
  hideErrorMessage(target, passwordErrorMessage);
  checkInputs();
};
passwordInput.addEventListener("focusout", handleFocusOutPasswordInput);

const handleFocusOutPasswordCheckInput = ({ target }) => {
  if (target.value !== passwordInput.value) {
    showErrorMessage(target, passwordCheckErrorMessage);
    passwordCheckErrorMessage.textContent = "비밀번호가 일치하지 않습니다.";
    disableButton(loginButton);
    return;
  }
  hideErrorMessage(target, passwordCheckErrorMessage);
  checkInputs();
};
passwordCheckInput.addEventListener(
  "focusout",
  handleFocusOutPasswordCheckInput
);

const checkInputs = () => {
  const isValid =
    emailInput.getAttribute("data-valid") === "true" &&
    nicknameInput.getAttribute("data-valid") === "true" &&
    passwordInput.getAttribute("data-valid") === "true" &&
    passwordCheckInput.getAttribute("data-valid") === "true";
  if (isValid) {
    activeButton(signupButton);
    return;
  }
  disableButton(signupButton);
};

// 비밀번호 문자열 보이거나 가리기
const handleTogglePasswordVisibilityButton = ({ target }) => {
  const isPasswordVisible =
    passwordVisibilityIcon.getAttribute("data-valid") === "true";
  const inputType = isPasswordVisible ? "password" : "text";
  const iconType = isPasswordVisible ? "off" : "on";

  passwordInput.type = inputType;
  passwordVisibilityIcon.src = `../asset/icon/btn_visibility_${iconType}.png`;
  target.setAttribute("data-valid", `${!isPasswordVisible}`);
};
passwordVisibilityButton.addEventListener(
  "click",
  handleTogglePasswordVisibilityButton
);

const handleTogglePasswordCheckVisibilityButton = ({ target }) => {
  const isPasswordCheckVisible =
    passwordCheckVisibilityIcon.getAttribute("data-valid") === "true";
  const inputType = isPasswordCheckVisible ? "password" : "text";
  const iconType = isPasswordCheckVisible ? "off" : "on";

  passwordCheckInput.type = inputType;
  passwordCheckVisibilityIcon.src = `../asset/icon/btn_visibility_${iconType}.png`;
  target.setAttribute("data-valid", `${!isPasswordCheckVisible}`);
};
passwordCheckVisibilityButton.addEventListener(
  "click",
  handleTogglePasswordCheckVisibilityButton
);

import {
  showErrorMessage,
  hideErrorMessage,
  activeButton,
  disableButton,
} from "../auth.js";
