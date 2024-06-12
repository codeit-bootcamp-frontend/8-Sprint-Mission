const passwordToggleButton = document.querySelectorAll(
  ".password-visible-toggle-btn"
);
const emailInput = document.getElementById("auth-email");

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
  const emptyEmail = document.querySelector("#email-empty");
  const errorEmail = document.querySelector("#email-error");
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
  emailInput.style.border = "1px solid none";
  if (regex.test(emailValue)) {
    errorEmail.style.display = "none";
    emailInput.style.border = "1px solid none";
    return;
  }
  errorEmail.style.display = "block";
  emailInput.style.border = "1px solid #f74747";
};

passwordToggleButton.forEach((passwordBtn) => {
  passwordBtn.addEventListener("click", handlePasswordToggleButton);
});

emailInput.addEventListener("focusout", handleEmailValidation);
