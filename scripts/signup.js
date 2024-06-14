import {
  createErrorMessageElement,
  validateEmail,
  validatePassword,
  togglePasswordVisibility,
} from "./validation.js";

document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const nicknameInput = document.getElementById("nickname");
  const passwordInput = document.getElementById("password");
  const passwordConfirmationInput = document.getElementById(
    "passwordConfirmation"
  );
  const signupButton = document.querySelector('button[type="submit"]');
  const form = document.querySelector("form");
  const togglePasswordButtons = document.querySelectorAll(".toggle-password");

  const emailErrorMessage = createErrorMessageElement();
  emailInput.parentNode.appendChild(emailErrorMessage);

  const nicknameErrorMessage = createErrorMessageElement();
  nicknameInput.parentNode.appendChild(nicknameErrorMessage);

  const passwordErrorMessage = createErrorMessageElement();
  passwordInput.parentNode.parentNode.appendChild(passwordErrorMessage);

  const passwordConfirmationErrorMessage = createErrorMessageElement();
  passwordConfirmationInput.parentNode.parentNode.appendChild(
    passwordConfirmationErrorMessage
  );

  function validateInputs(showErrors = false) {
    const emailValue = emailInput.value;
    const nicknameValue = nicknameInput.value;
    const passwordValue = passwordInput.value;
    const passwordConfirmationValue = passwordConfirmationInput.value;

    let isValid = true;

    isValid =
      validateEmail(emailValue, showErrors, emailInput, emailErrorMessage) &&
      isValid;

    if (!nicknameValue) {
      if (showErrors) {
        nicknameErrorMessage.textContent = "닉네임을 입력해주세요.";
        nicknameErrorMessage.style.display = "block";
        nicknameInput.classList.add("input-error");
      }
      isValid = false;
    } else {
      nicknameErrorMessage.textContent = "";
      nicknameErrorMessage.style.display = "none";
      nicknameInput.classList.remove("input-error");
    }

    isValid =
      validatePassword(
        passwordValue,
        showErrors,
        passwordInput,
        passwordErrorMessage
      ) && isValid;

    if (passwordValue !== passwordConfirmationValue) {
      if (showErrors) {
        passwordConfirmationErrorMessage.textContent =
          "비밀번호가 일치하지 않습니다.";
        passwordConfirmationErrorMessage.style.display = "block";
        passwordConfirmationInput.classList.add("input-error");
      }
      isValid = false;
    } else {
      passwordConfirmationErrorMessage.textContent = "";
      passwordConfirmationErrorMessage.style.display = "none";
      passwordConfirmationInput.classList.remove("input-error");
    }

    signupButton.disabled = !isValid;
    return isValid;
  }

  emailInput.addEventListener("focusout", () => validateInputs(true));
  nicknameInput.addEventListener("focusout", () => validateInputs(true));
  passwordInput.addEventListener("focusout", () => validateInputs(true));
  passwordConfirmationInput.addEventListener("focusout", () =>
    validateInputs(true)
  );
  emailInput.addEventListener("input", () => validateInputs(false));
  nicknameInput.addEventListener("input", () => validateInputs(false));
  passwordInput.addEventListener("input", () => validateInputs(false));
  passwordConfirmationInput.addEventListener("input", () =>
    validateInputs(false)
  );

  validateInputs(false);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateInputs(true)) {
      window.location.href = "../signin.html";
    }
  });

  togglePasswordButtons.forEach((button) => {
    button.addEventListener("click", function () {
      togglePasswordVisibility(this);
    });
  });
});
