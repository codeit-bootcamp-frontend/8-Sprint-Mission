import {
  createErrorMessageElement,
  validateEmail,
  validatePassword,
  togglePasswordVisibility,
} from "./validation.js";

document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginButton = document.querySelector('button[type="submit"]');
  const form = document.querySelector("form");
  const togglePasswordButton = document.querySelector(".toggle-password");

  const emailErrorMessage = createErrorMessageElement();
  emailInput.parentNode.appendChild(emailErrorMessage);

  const passwordErrorMessage = createErrorMessageElement();
  passwordInput.parentNode.parentNode.appendChild(passwordErrorMessage);

  function validateInputs(showErrors = false) {
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    let isValid = true;

    isValid =
      validateEmail(emailValue, showErrors, emailInput, emailErrorMessage) &&
      isValid;
    isValid =
      validatePassword(
        passwordValue,
        showErrors,
        passwordInput,
        passwordErrorMessage
      ) && isValid;

    loginButton.disabled = !isValid;
    return isValid;
  }

  emailInput.addEventListener("focusout", () => validateInputs(true));
  passwordInput.addEventListener("focusout", () => validateInputs(true));
  emailInput.addEventListener("input", () => validateInputs(false));
  passwordInput.addEventListener("input", () => validateInputs(false));

  validateInputs(false);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateInputs(true)) {
      window.location.href = "../items.html";
    }
  });

  togglePasswordButton.addEventListener("click", function () {
    togglePasswordVisibility(this);
  });
});
