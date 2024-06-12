const passwordToggleButton = document.querySelectorAll(
  ".password-visible-toggle-btn"
);
const allInput = document.querySelectorAll("input");
const emailInput = document.getElementById("auth-email");
const passwordInput = document.getElementById("auth-password");
const nameInput = document.getElementById("auth-name");
const loginButton = document.getElementsByClassName("auth-submit-btn");

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
    return;
  }
  emptyEmail.style.display = "none";
  emailInput.style.border = "none";
  if (regex.test(emailValue)) {
    errorEmail.style.display = "none";
    emailInput.style.border = "none";
    return;
  }
  errorEmail.style.display = "block";
  emailInput.style.border = "1px solid #f74747";
};

const handleNameValidation = () => {
  const emptyName = document.getElementById("name-empty");
  const nameValue = nameInput.value;

  if (!nameValue) {
    emptyName.style.display = "block";
    nameInput.style.border = "1px solid #f74747";
    return;
  }
  emptyName.style.display = "none";
  nameInput.style.border = "none";
};

const handlePasswordValidation = () => {
  const emptyPassword = document.getElementById("password-empty");
  const errorPassword = document.getElementById("password-error");
  const passwordValue = passwordInput.value;

  if (!passwordValue) {
    errorPassword.style.display = "none";
    emptyPassword.style.display = "block";
    passwordInput.style.border = "1px solid #f74747";

    return;
  }
  emptyPassword.style.display = "none";
  passwordInput.style.border = "none";

  if (passwordValue.length < 8) {
    errorPassword.style.display = "block";
    passwordInput.style.border = "1px solid #f74747";

    return;
  }
  errorPassword.style.display = "none";
  passwordInput.style.border = "none";
};

passwordToggleButton.forEach((passwordBtn) => {
  passwordBtn.addEventListener("click", handlePasswordToggleButton);
});

emailInput.addEventListener("focusout", handleEmailValidation);

nameInput.addEventListener("focusout", handleNameValidation);

passwordInput.addEventListener("focusout", handlePasswordValidation);
