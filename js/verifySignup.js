const email = document.querySelector("#email");
const failLoginBlank = document.querySelector(".fail-login-blank");
const failLoginEmail = document.querySelector(".fail-login-email");
const nickName = document.querySelector("#nickname");
const failNicknameBlank = document.querySelector(".fail-nickname-blank");
const password = document.querySelector("#password");
const failPasswordBlank = document.querySelector(".fail-password-blank");
const failPasswordLength = document.querySelector(".fail-password-length");
const passwordCheck = document.querySelector("#passwordCheck");
const failPasswordCheck = document.querySelector(".fail-password-check");
const signupButton = document.querySelector(".signup-button");
const signupLink = document.querySelector("#signup-success-link");

signupButton.onclick = function() {
  if(checkBlankType(email.value)) {
    failLoginBlank.classList.remove("hide");
    failLoginEmail.classList.add("hide");
    email.classList.add("fail-layout");
  } else if(checkBlankType(nickName.value)) {
    failNicknameBlank.classList.remove("hide");
    nickName.classList.add("fail-layout");
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

nickName.onfocus = function() {
  failNicknameBlank.classList.add("hide");
  nickName.classList.remove("fail-layout");
};

nickName.onblur = function() {
  if(checkBlankType(nickName.value)) {
    failNicknameBlank.classList.remove("hide");
    nickName.classList.add("fail-layout");
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

passwordCheck.onfocus = function() {
  failPasswordCheck.classList.add("hide");
  passwordCheck.classList.remove("fail-layout");
}

passwordCheck.onblur = function() {
  if(!checkVerifyPassword(passwordCheck.value)) {
    failPasswordCheck.classList.remove("hide");
    passwordCheck.classList.add("fail-layout");
  }
  checkAll()
};

function checkAll() {
  if(
    !checkBlankType(email.value) &&
    checkEmailType(email.value) &&
    !checkBlankType(nickName.value) &&
    !checkBlankType(password.value) &&
    checkPasswordLength(password.value) &&
    checkVerifyPassword(passwordCheck.value)
  ) {
    signupButton.classList.add("signup-button-toggle");
    signupLink.setAttribute("href","signin.html");
  } else {
    signupButton.classList.remove("signup-button-toggle");
    signupLink.removeAttribute("href");
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
  return value.length >= 8;
}

function checkVerifyPassword(value) {
  return value === password.value;
}