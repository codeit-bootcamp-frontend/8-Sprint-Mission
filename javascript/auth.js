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

const setToggleButtonState = (toggleButton, isPasswordVisible) => {
  const toggleImg = toggleButton.querySelector("img");
  const authPasswordInput = toggleButton.parentElement.querySelector("input");

  if (isPasswordVisible) {
    toggleImg.src = "/image/btn_visibility_on.png";
    toggleImg.alt = "visible";
    authPasswordInput.type = "text";
    return;
  }

  toggleImg.src = "/image/btn_visibility_off.png";
  toggleImg.alt = "invisible";
  authPasswordInput.type = "password";
};
const loginActivateSubmit = () => {
  if (isEmailError === false && isPasswordError === false) {
    submitButton.disabled = false;
    submitButton.style.backgroundColor = "#3692ff";
  } else {
    submitButton.disabled = true;
    submitButton.style.backgroundColor = "#9ca3af";
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
    submitButton.style.backgroundColor = "#3692ff";
  } else {
    submitButton.disabled = true;
    submitButton.style.backgroundColor = "#9ca3af";
  }
};

const handlePasswordToggleButton = (e) => {
  const toggleButton = e.currentTarget;
  const isPasswordVisible = toggleButton.classList.toggle("visible");

  setToggleButtonState(toggleButton, isPasswordVisible);
};

const handleEmailValidation = () => {
  const emptyEmail = document.getElementById("email-empty");
  const errorEmail = document.getElementById("email-error");
  const emailValue = emailInput.value;
  const regex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  if (!emailValue) {
    errorEmail.style.display = "none";
    emptyEmail.style.display = "block";
    emailInput.style.border = "1px solid #f74747";
    isEmailError = true;
  } else {
    emptyEmail.style.display = "none";
    emailInput.style.border = "none";
    if (regex.test(emailValue)) {
      errorEmail.style.display = "none";
      emailInput.style.border = "none";
      isEmailError = false;
    } else {
      errorEmail.style.display = "block";
      emailInput.style.border = "1px solid #f74747";
      isEmailError = true;
    }
  }
  nameInput ? signupActivateSubmit() : loginActivateSubmit();
};

const handleNameValidation = () => {
  const emptyName = document.getElementById("name-empty");
  const nameValue = nameInput.value;

  if (!nameValue) {
    emptyName.style.display = "block";
    nameInput.style.border = "1px solid #f74747";
    isNameError = true;
  } else {
    emptyName.style.display = "none";
    nameInput.style.border = "none";
    isNameError = false;
  }
  signupActivateSubmit();
};

const handlePasswordValidation = () => {
  const emptyPassword = document.getElementById("password-empty");
  const errorPassword = document.getElementById("password-error");
  const passwordValue = passwordInput.value;

  if (!passwordValue) {
    errorPassword.style.display = "none";
    emptyPassword.style.display = "block";
    passwordInput.style.border = "1px solid #f74747";
    isPasswordError = true;
  } else {
    emptyPassword.style.display = "none";
    passwordInput.style.border = "none";
    if (passwordValue.length >= 8) {
      errorPassword.style.display = "none";
      passwordInput.style.border = "none";
      isPasswordError = false;
    } else {
      errorPassword.style.display = "block";
      passwordInput.style.border = "1px solid #f74747";
      isPasswordError = true;
    }
  }
  nameInput ? signupActivateSubmit() : loginActivateSubmit();
};

const handlePasswordConfirmValidation = () => {
  const errorPasswordConfirm = document.getElementById(
    "password-confirm-error"
  );
  const passwordConfirmValue = passwordConfirmInput.value;
  const passwordValue = passwordInput.value;
  const isMatch = passwordConfirmValue === passwordValue;

  if (!isMatch) {
    errorPasswordConfirm.style.display = "block";
    passwordConfirmInput.style.border = "1px solid #f74747";
    isPasswordConfirmError = true;
  } else {
    errorPasswordConfirm.style.display = "none";
    passwordConfirmInput.style.border = "none";
    isPasswordConfirmError = false;
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
