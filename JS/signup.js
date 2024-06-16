export { email, input, emailCheck, password, passwordCheck, eyeOff, eye, btn };

const email = document.querySelector("#email");
const input = document.querySelector("input");

//이메일 체크
function emailCheck() {
  const emailNone = document.querySelector(".email-none");
  const emailFail = document.querySelector(".email-fail");

  if (email.value === "") {
    emailNone.classList.remove("hide");
    emailFail.classList.add("hide");
    email.style.border = "0.1rem solid red";
  } else if (/\S+@\S+\.\S+/.test(email.value) == false) {
    emailFail.classList.remove("hide");
    emailNone.classList.add("hide");
    email.style.border = "0.1rem solid red";
  } else {
    emailNone.classList.add("hide");
    emailFail.classList.add("hide");
    email.style.border = "none";
  }
}

email.addEventListener("focusout", emailCheck);

//비밀번호 체크
const password = document.querySelector("#password");

function passwordCheck() {
  const passwordNone = document.querySelector(".password-none");
  const passwordFail = document.querySelector(".password-fail");

  if (password.value === "") {
    passwordNone.classList.remove("hide");
    passwordFail.classList.add("hide");
    password.style.border = "0.1rem solid red";
  } else if (password.value.length < 8) {
    passwordFail.classList.remove("hide");
    passwordNone.classList.add("hide");
    password.style.border = "0.1rem solid red";
  } else {
    passwordFail.classList.add("hide");
    passwordNone.classList.add("hide");
    password.style.border = "none";
  }
}

password.addEventListener("focusout", passwordCheck);

//비밀번호 가리기/보이기
const eyeOff = document.querySelector(".eye-off");

function eye() {
  if (password.type === "password") {
    eyeOff.setAttribute("src", "/image/eye.svg");
    password.setAttribute("type", "text");
  } else {
    eyeOff.setAttribute("src", "/image/eye-off.svg");
    password.setAttribute("type", "password");
  }
}

eyeOff.addEventListener("click", eye);

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
const btn = document.querySelector("button");

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
