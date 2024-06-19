import {
  email,
  input,
  emailCheck,
  password,
  passwordCheck,
  eyeOff,
  eye,
  btn,
} from "./common.js";

email.addEventListener("focusout", emailCheck);

password.addEventListener("focusout", passwordCheck);

eyeOff.addEventListener("click", eye);

//버튼 활성화/비활성화

function loginValid() {
  if (
    input.value !== "" &&
    /\S+@\S+\.\S+/.test(email.value) === true &&
    password.value.length >= 8
  ) {
    btn.disabled = false;
    btn.style.backgroundColor = "#3692ff";
    btn.addEventListener("click", () => {
      window.location.href = "/items.html";
    });
  } else {
    btn.disabled = true;
  }
}

btn.addEventListener("click", loginValid);
