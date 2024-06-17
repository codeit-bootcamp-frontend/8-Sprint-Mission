const email = document.querySelector("#email");
const failLoginBlank = document.querySelector(".fail-login-blank");
const failLoginEmail = document.querySelector(".fail-login-email");
const password = document.querySelector("#password");
const failPasswordBlank = document.querySelector(".fail-password-blank");
const failPasswordLength = document.querySelector(".fail-password-length");
const loginButton = document.querySelector(".login-button");
const loginLink = document.querySelector("#login-success-link");
const passwordHidden = document.querySelector(".password-hidden")

loginButton.onclick = function() {
  if(checkBlankType(email.value)) {
    failLoginBlank.classList.remove("hide");
    failLoginEmail.classList.add("hide");
    email.classList.add("fail-layout");
  } else if(checkBlankType(password.value)) {
    failPasswordBlank.classList.remove("hide");
    failPasswordLength.classList.add("hide");
    password.classList.add("fail-layout");
  }
};

email.onfocus = function() {
  failLoginBlank.classList.add("hide");
  failLoginEmail.classList.add("hide");
  email.classList.remove("fail-layout");
};

email.onblur = function() {
  if(checkBlankType(email.value)) {
    failLoginBlank.classList.remove("hide");
    failLoginEmail.classList.add("hide");
    email.classList.add("fail-layout");
  } else if(!checkEmailType(email.value)) {
    failLoginEmail.classList.remove("hide");
    failLoginBlank.classList.add("hide");
    email.classList.add("fail-layout");
  }
  checkAll()
};

password.onfocus = function() {
  failPasswordBlank.classList.add("hide");
  failPasswordLength.classList.add("hide");
  password.classList.remove("fail-layout");
}

password.onblur = function() {
  if(checkBlankType(password.value)) {
    failPasswordBlank.classList.remove("hide");
    failPasswordLength.classList.add("hide");
    password.classList.add("fail-layout");
  } else if(!checkPasswordLength(password.value)) {
    failPasswordLength.classList.remove("hide");
    failPasswordBlank.classList.add("hide");
    password.classList.add("fail-layout");
  }
  checkAll()
};

function checkAll() {
  if(
    !checkBlankType(email.value) &&
    checkEmailType(email.value) &&
    !checkBlankType(password.value) &&
    checkPasswordLength(password.value)
  ) {
    loginButton.classList.add("login-button-toggle");
    loginLink.setAttribute("href","items.html")
  } else {
    loginButton.classList.remove("login-button-toggle");
    loginLink.removeAttribute("href");
  }
}

function checkBlankType(value) {
  return value.trim() === "";
}

function checkEmailType(value) {
  const pattern = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/;
  return pattern.test(value);
}

function checkPasswordLength(value) {
  return value.length >= 8
}