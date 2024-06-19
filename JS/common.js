export { email, input, emailCheck, password, passwordCheck, eyeOff, eye, btn };

const email = document.querySelector("#email");
const input = document.querySelector("input");
const btn = document.querySelector("button");

//이메일 체크
function emailCheck() {
  const emailNone = document.querySelector(".email-none");
  const emailFail = document.querySelector(".email-fail");

  if (email.value === "") {
    emailNone.classList.remove("hide");
    emailFail.classList.add("hide");
    email.style.border = "0.1rem solid red";
  } else if (
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
      email.value
    ) == false
  ) {
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
