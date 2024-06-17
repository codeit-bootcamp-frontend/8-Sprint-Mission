const $inputs = document.querySelectorAll("form input");
const $form = document.querySelector("form");
const $submitButton = document.querySelector(".submit-btn");
const $togglePassword = document.querySelectorAll(".toggle-password");
let nowPage;
const MakeformCheckData = () => {
  if (location.href.includes("login")) {
    nowPage = "login";
    return { email: false, password: false };
  } else if (location.href.includes("signup")) {
    nowPage = "signup";
    return {
      email: false,
      nickname: false,
      password: false,
      repeatPassword: false,
    };
  }
};
const formCheckData = MakeformCheckData();

const formChecker = () => {
  for (let key in formCheckData) {
    if (!formCheckData[key]) {
      $submitButton.removeEventListener("click", onClickSubmit);
      $submitButton.style.backgroundColor = "var(--gray-400)";
      return false;
    }
  }
  $submitButton.addEventListener("click", onClickSubmit);
  $submitButton.style.backgroundColor = "var(--blue)";
  return true;
};

const removePrevMsg = (e) => {
  let $wrongMsg = e.target.parentNode.querySelector(".wrong");
  if ($wrongMsg) {
    $wrongMsg.remove();
  }
};

const inputWrongValue = (e, text) => {
  let target = e.target;
  target.style.border = "1px solid red";
  const $p = document.createElement("p");
  $p.textContent = text;
  $p.classList.add("wrong");
  target.parentElement.append($p);
  target.removeEventListener("focusin", onFocusIn);
};

const inputCollectValue = (e) => {
  formChecker();
  e.target.style.border = "none";
  e.target.addEventListener("focusin", onFocusIn);
};
const emailFocusOut = (e) => {
  formCheckData.email = false;
  formChecker();
  removePrevMsg(e);
  let target = e.target;
  let emailRegex = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  );
  if (!target.value) {
    inputWrongValue(e, "이메일을 입력해주세요.");
  } else if (!emailRegex.test(target.value)) {
    inputWrongValue(e, "잘못된 이메일 형식입니다.");
  } else {
    formCheckData.email = true;
    inputCollectValue(e);
  }
};

const passwordFocusOut = (e) => {
  formCheckData.password = false;
  formChecker();
  removePrevMsg(e);
  let target = e.target;
  if (!target.value) {
    inputWrongValue(e, "비밀번호를 입력해주세요.");
  } else if (target.value.length < 8) {
    inputWrongValue(e, "비밀번호를 8자 이상 입력해주세요.");
  } else {
    formCheckData.password = true;
    inputCollectValue(e);
  }
};

const nicknameFocusOut = (e) => {
  formCheckData.nickname = false;
  formChecker();
  removePrevMsg(e);
  let target = e.target;
  if (!target.value) {
    inputWrongValue(e, "닉네임을 입력해주세요.");
  } else {
    formCheckData.nickname = true;
    inputCollectValue(e);
  }
};
const repeatPasswordFocusOut = (e) => {
  formCheckData.repeatPassword = false;
  formChecker();
  removePrevMsg(e);
  let target = e.target;
  let $password = document.querySelector("#password");

  if (target.value !== $password.value) {
    inputWrongValue(e, "비밀번호가 일치하지 않습니다.");
  } else {
    formCheckData.repeatPassword = true;
    inputCollectValue(e);
  }
};

const onFocusOut = (e) => {
  switch (e.target.id) {
    case "useremail":
      emailFocusOut(e);
      break;
    case "password":
      passwordFocusOut(e);
      break;
    case "nickname":
      nicknameFocusOut(e);
      break;
    case "repeat-password":
      repeatPasswordFocusOut(e);
      break;
  }
};

const onSubmitForm = (e) => {
  e.preventDefault();
};
const onClickSubmit = (e) => {
  if (nowPage === "login") {
    location.href = "/items/";
  } else if (nowPage === "signup") {
    location.href = "/signup/";
  }
};
const onFocusIn = (e) => {
  let target = e.target;
  target.style.border = "1px solid var(--blue)";
};
const onClickVisible = (e) => {
  let targetInput = e.target.parentNode.querySelector("input");
  e.target.classList.toggle("visible-pw");
  if (targetInput.type === "password") {
    targetInput.type = "text";
  } else {
    targetInput.type = "password";
  }
};
$inputs.forEach((input) => {
  input.addEventListener("focusout", onFocusOut);
});
$form.addEventListener("submit", onSubmitForm);
$togglePassword.forEach((btn) => {
  btn.addEventListener("click", onClickVisible);
});
