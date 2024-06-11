const passwordToggleButton = document.querySelectorAll(
  ".password-visible-toggle-btn"
);

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

passwordToggleButton.forEach((passwordBtn) => {
  passwordBtn.addEventListener("click", handlePasswordToggleButton);
});
