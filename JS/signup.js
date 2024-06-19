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

//비밀번호 가리기/보이기
const repeatEyeoff = document.querySelector(".repeat-eye-off");

function pwrepeatEye() {
  if (passwordRepeat.type === "password") {
    repeatEyeoff.setAttribute("src", "/image/eye.svg");
    passwordRepeat.setAttribute("type", "text");
  } else {
    repeatEyeoff.setAttribute("src", "/image/eye-off.svg");
    passwordRepeat.setAttribute("type", "password");
  }
}

repeatEyeoff.addEventListener("click", pwrepeatEye);

//닉네임 체크
const nickname = document.querySelector("#nickname");

function nicknameCheck() {
  const nicknameNone = document.querySelector(".nickname-none");

  if (nickname.value === "") {
    nicknameNone.classList.remove("hide");
    nickname.style.border = "0.1rem solid red";
  } else {
    nicknameNone.classList.add("hide");
    nickname.style.border = "none";
  }
}

nickname.addEventListener("focusout", nicknameCheck);

//비밀번호 확인 체크
const passwordRepeat = document.querySelector("#password-repeat");

function pwrepeatCheck() {
  const pwrepeatNone = document.querySelector(".pwrepeat-none");

  if (passwordRepeat.value !== password.value) {
    pwrepeatNone.classList.remove("hide");
    passwordRepeat.style.border = "0.1rem solid red";
  } else {
    pwrepeatNone.classList.add("hide");
    passwordRepeat.style.border = "none";
  }
}

passwordRepeat.addEventListener("input", pwrepeatCheck);

//버튼 활성화/비활성화

function valid() {
  if (
    input.value !== "" &&
    /\S+@\S+\.\S+/.test(email.value) === true &&
    password.value.length >= 8 &&
    nickname.value !== "" &&
    passwordRepeat.value === password.value
  ) {
    btn.disabled = false;
    btn.style.backgroundColor = "#3692ff";
    btn.addEventListener("click", () => {
      window.location.href = "/signin.html";
    });
  } else {
    btn.disabled = true;
  }
}

btn.addEventListener("click", valid);
