import { handlePasswordToggleButton } from "./password-toggle.js";
import { showError, hideError } from "./authErrorHandler.js";

const passwordToggleButton = document.querySelectorAll(
  ".password-visible-toggle-btn"
);

const emailInput = document.getElementById("auth-email");
const passwordInput = document.getElementById("auth-password");
const nameInput = document.getElementById("auth-name");
const passwordConfirmInput = document.getElementById("auth-password-confirm");
const submitButton = document.querySelector(".auth-submit-btn");
const authForm = document.querySelector("form");

let isEmailError = true;
let isPasswordError = true;
let isPasswordConfirmError = true;
let isNameError = true;

const loginActivateSubmit = () => {
  if (isEmailError === false && isPasswordError === false) {
    submitButton.disabled = false;
    submitButton.style.backgroundColor = "var(--brand-blue)";
  } else {
    submitButton.disabled = true;
    submitButton.style.backgroundColor = "var(--gray-400)";
  }
};
const signupActivateSubmit = () => {
  if (
    isEmailError === false &&
    isPasswordError === false &&
    isNameError === false &&
    isPasswordConfirmError === false
  ) {
    submitButton.disabled = false;
    submitButton.style.backgroundColor = "var(--brand-blue)";
  } else {
    submitButton.disabled = true;
    submitButton.style.backgroundColor = "var(--gray-400)";
  }
};

const handleEmailValidation = () => {
  const emailValue = emailInput.value;
  const regex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  hideError(emailInput, "email-error", isEmailError);
  hideError(emailInput, "email-empty", isEmailError);

  if (!emailValue) {
    showError(emailInput, "email-empty", isEmailError);
  } else {
    hideError(emailInput, "email-empty", isEmailError);
    if (regex.test(emailValue)) {
      hideError(emailInput, "email-error", isEmailError);
    } else {
      showError(emailInput, "email-error", isEmailError);
    }
  }
  nameInput ? signupActivateSubmit() : loginActivateSubmit();
};

const handleNameValidation = () => {
  const nameValue = nameInput.value;

  if (!nameValue) {
    showError(nameInput, "name-empty", isNameError);
  } else {
    hideError(nameInput, "name-empty", isNameError);
  }
  signupActivateSubmit();
};

const handlePasswordValidation = () => {
  const passwordValue = passwordInput.value;

  hideError(passwordInput, "password-empty", isPasswordError);
  hideError(passwordInput, "password-error", isPasswordError);

  if (!passwordValue) {
    showError(passwordInput, "password-empty", isPasswordError);
  } else {
    hideError(passwordInput, "password-empty", isPasswordError);
    if (passwordValue.length >= 8) {
      hideError(passwordInput, "password-error", isPasswordError);
    } else {
      showError(passwordInput, "password-error", isPasswordError);
    }
  }
  nameInput ? signupActivateSubmit() : loginActivateSubmit();
};

const handlePasswordConfirmValidation = () => {
  const passwordConfirmValue = passwordConfirmInput.value;
  const passwordValue = passwordInput.value;
  const isMatch = passwordConfirmValue === passwordValue;

  if (!passwordValue || !isMatch) {
    showError(
      passwordConfirmInput,
      "password-confirm-error",
      isPasswordConfirmError
    );
  } else {
    hideError(
      passwordConfirmInput,
      "password-confirm-error",
      isPasswordConfirmError
    );
  }
  signupActivateSubmit();
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (nameInput) {
    location.href = "/auth/login.html";
  } else {
    location.href = "/item.html";
  }
};

passwordToggleButton.forEach((passwordBtn) => {
  passwordBtn.addEventListener("click", handlePasswordToggleButton);
});

emailInput.addEventListener("focusout", handleEmailValidation);

nameInput?.addEventListener("focusout", handleNameValidation);

passwordInput.addEventListener("focusout", handlePasswordValidation);

passwordConfirmInput?.addEventListener(
  "focusout",
  handlePasswordConfirmValidation
);

authForm.addEventListener("submit", handleSubmit);
