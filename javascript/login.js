const passwordInput = document.querySelector(".login-password");
const passwordToggle = document.querySelector(".password-visible-toggle");
let toggleImg = passwordToggle.firstElementChild;
const handlePasswordToggle = () => {
  if (toggleImg.src.endsWith("off.png")) {
    toggleImg.src = "/image/btn_visibility_on.png";
    toggleImg.alt = "visible";
  } else {
    toggleImg.src = "/image/btn_visibility_off.png";
    toggleImg.alt = "invisible";
  }
};

passwordToggle.addEventListener("click", handlePasswordToggle);
