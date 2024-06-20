const email = document.querySelector("#email");
const emailError = document.querySelector(".email-error");
const emailError2 = document.querySelector(".email-error2");
const password = document.querySelector("#password");
const pwError = document.querySelector(".pw-error");
const pwError2 = document.querySelector(".pw-error2");
const nickname = document.querySelector("#nickname");
const nickError = document.querySelector(".nickname-error");
const passwordChecker = document.querySelector("#password-check");
const passwordCheckerError = document.querySelector(".pwChecker-error");
const loginForm = document.querySelector("#login-form");
const signForm = document.querySelector("#sign-form");
const invisible = document.querySelector(".invisible");
const checkerInvisible = document.querySelector(".checkerInvisible");

function onFocusEvent() {
  let value = email.value;
  if (value.length < 1) {
    email.classList.add("error");
    emailError.style.display = "block";
  } else {
    email.classList.remove("error");
    emailError.style.display = "none";
  }

  if (!email.validity.valid) {
    email.classList.add("error2");
    emailError2.style.display = "block";
  } else {
    email.classList.remove("error2");
    emailError2.style.display = "none";
  }
}
email?.addEventListener("focusout", onFocusEvent);

function onFocusPwEvent() {
  let pWvalue = password.value;
  if (pWvalue.length < 1) {
    password.classList.add("error");
    pwError.style.display = "block";
  } else {
    password.classList.remove("error");
    pwError.style.display = "none";
  }

  if (pWvalue.length >= 1 && pWvalue.length < 8) {
    password.classList.add("error2");
    pwError2.style.display = "block";
  } else {
    password.classList.remove("error2");
    pwError2.style.display = "none";
  }
}
password?.addEventListener("focusout", onFocusPwEvent);

function userNameEvent() {
  let nameValue = nickname.value;
  if (nameValue.length < 1) {
    nickname.classList.add("error");
    nickError.style.display = "block";
  } else {
    nickname.classList.remove("error");
    nickError.style.display = "none";
  }
}
nickname?.addEventListener("focusout", userNameEvent);

function checkPwEvent() {
  let pWvalue = password.value;
  let pwcValue = passwordChecker.value;
  if (pWvalue !== pwcValue) {
    passwordChecker.classList.add("error");
    passwordCheckerError.style.display = "block";
  } else {
    passwordChecker.classList.remove("error");
    passwordCheckerError.style.display = "none";
  }
}
passwordChecker?.addEventListener("focusout", checkPwEvent);

invisible?.addEventListener("click", function () {
  let type = password.type;
  if (type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});

checkerInvisible?.addEventListener("click", function () {
  let checkerType = passwordChecker.type;
  if (checkerType === "password") {
    passwordChecker.type = "text";
  } else {
    passwordChecker.type = "password";
  }
});

function loginFormEvent(e) {
  e.preventDefault();
  if (
    email.value.length < 1 ||
    password.value.length < 1 ||
    email.classList.contains("error") ||
    email.classList.contains("error2") ||
    password.classList.contains("error") ||
    password.classList.contains("error2")
  ) {
    alert("입력사항을 확인해주세요.");
  } else {
    window.location.href = "item.html";
  }
}
loginForm?.addEventListener("submit", loginFormEvent);

function passwordFormEvent(e) {
  e.preventDefault();
  const isPasswordValid =
    email.value.length < 1 ||
    password.value.length < 1 ||
    email.classList.contains("error") ||
    email.classList.contains("error2") ||
    password.classList.contains("error") ||
    password.classList.contains("error2") ||
    nickname.classList.contains("error") ||
    passwordChecker.classList.contains("error");

  if (isPasswordValid) {
    alert("입력사항을 확인해주세요.");
  } else {
    window.location.href = "signIn.html";
  }
}
signForm?.addEventListener("submit", passwordFormEvent);
