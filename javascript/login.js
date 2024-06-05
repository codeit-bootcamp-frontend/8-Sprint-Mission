const passwordInput = document.querySelector("#auth-password");
const passwordToggle = document.querySelector(".password-visible-toggle-btn");
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
