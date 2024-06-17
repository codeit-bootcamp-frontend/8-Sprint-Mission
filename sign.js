const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const emailInput = document.getElementById("email");
const nicknameInput = document.getElementById("nickname");
const passwordInput = document.getElementById("password");
const passwordConfirmationInput = document.getElementById("passwordConfirmation");
const submitButton = document.querySelector('.logoSection form button[type="submit"]');

function showError(input, errorId) {
  const errorElement = document.getElementById(errorId);
  errorElement.style.display = "block";
  input.style.border = "1px solid #f74747";
}

function hideError(input, errorId) {
  const errorElement = document.getElementById(errorId);
  errorElement.style.display = "none";
  input.style.border = "none";
}

function validateEmailString(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

function checkEmailValidity() {
  const emailValue = emailInput.value.trim();
  isEmailValid = false;
  hideError(emailInput, "emailEmpty");
  hideError(emailInput, "emailWrong");
  if (!emailValue) {
    showError(emailInput, "emailEmpty");
  } else if (!validateEmailString(emailValue)) {
    showError(emailInput, "emailWrong");
  } else {
    isEmailValid = true;
    hideError(emailInput, "emailEmpty");
    hideError(emailInput, "emailWrong");
    updateSubmitButtonState();
  }
}