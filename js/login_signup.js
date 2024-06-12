const form = document.querySelector("form");
const toggleEyes = document.querySelectorAll(".toggle-eye");
const input = form.querySelectorAll("input");
const password = document.querySelector("#user-password");
const confirmPassword = document.querySelector("#confirm-user-password");

function validateEmail(email) {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;
  return pattern.test(email);
}

function addInputCaution(eTarget, msg) {
  eTarget.classList.add("input-focus-out");
  const span = document.createElement("span");
  span.textContent = msg;
  span.classList.add("caution");
  if (eTarget.nextElementSibling.classList.contains("caution")) {
    eTarget.nextElementSibling.remove();
    eTarget.after(span);
  } else {
    eTarget.after(span);
  }

  eTarget.classList.add("caution-margin");
}

function removeInputCaution(eTarget) {
  if (eTarget.nextElementSibling.classList.contains("caution")) {
    eTarget.nextElementSibling.remove();
    eTarget.classList.remove("caution-margin");
  }

  eTarget.classList.remove("input-focus-out");
}

function btnActivation() {
  const temp = [];
  for (i = 0; i < input.length; i++) {
    temp[i] = input[i].value === "";
  }
  switch (input.length) {
    case 2:
      if (
        !temp.includes(true) &&
        validateEmail(input[0].value) &&
        !(input[1].value.length < 8)
      ) {
        form.querySelector(".login-page-btn").removeAttribute("disabled");
      } else {
        form.querySelector(".login-page-btn").setAttribute("disabled", true);
      }

      break;
    case 4:
      if (
        !temp.includes(true) &&
        validateEmail(input[0].value) &&
        !(input[2].value.length < 8) &&
        input[3].value === password.value
      ) {
        form.querySelector(".login-page-btn").removeAttribute("disabled");
      } else {
        form.querySelector(".login-page-btn").setAttribute("disabled", true);
      }
      break;
  }
}

function cautionFocusOutEvent(e) {
  if (e.target.classList.contains("user-input")) {
    switch (e.target.id) {
      case "user-email":
        if (e.target.value === "") {
          addInputCaution(e.target, "이메일을 입력해주세요.");
        } else if (!validateEmail(e.target.value)) {
          addInputCaution(e.target, "잘못된 이메일 형식입니다.");
        } else {
          removeInputCaution(e.target);
        }
        break;

      case "user-password":
        if (e.target.value === "") {
          addInputCaution(e.target, "비밀번호를 입력해주세요.");
        } else if (e.target.value.length < 8) {
          addInputCaution(e.target, "비밀번호를 8자 이상 입력해주세요.");
        } else {
          removeInputCaution(e.target);
        }
        if (confirmPassword !== null) {
          if (
            password.value !== confirmPassword.value &&
            confirmPassword.value !== ""
          ) {
            addInputCaution(confirmPassword, "비밀번호가 일치하지 않습니다.");
          } else {
            removeInputCaution(confirmPassword);
          }
        }
        break;

      case "nickname":
        if (e.target.value === "") {
          addInputCaution(e.target, "닉네임을 입력해주세요.");
        } else {
          removeInputCaution(e.target);
        }
        break;

      case "confirm-user-password":
        if (e.target.value !== password.value && confirmPassword.value !== "") {
          addInputCaution(e.target, "비밀번호가 일치하지 않습니다.");
        } else {
          removeInputCaution(e.target);
        }

        break;
    }
  }
  btnActivation();
}

function cautionInputEvent(e) {
  if (e.target.classList.contains("user-input")) {
    switch (e.target.id) {
      case "user-email":
        if (e.target.value !== "" && validateEmail(e.target.value)) {
          removeInputCaution(e.target);
        }
        break;

      case "user-password":
        if (e.target.value !== "" && !(e.target.value.length < 8)) {
          removeInputCaution(e.target);
        }
        if (confirmPassword !== null) {
          if (
            confirmPassword.value !== password.value &&
            confirmPassword.value !== ""
          ) {
            addInputCaution(confirmPassword, "비밀번호가 일치하지 않습니다.");
          } else if (confirmPassword.value === password.value) {
            removeInputCaution(confirmPassword);
          }
        }
        break;

      case "nickname":
        if (e.target.value !== "") {
          removeInputCaution(e.target);
        }
        break;

      case "confirm-user-password":
        if (confirmPassword.value === password.value) {
          removeInputCaution(e.target);
        }

        break;
    }
  }
  btnActivation();
}

function passwordDisplayToggle(e) {
  if (e.target.classList.contains("toggle-eye")) {
    for (toggleEye of toggleEyes) {
      toggleEye.classList.toggle("toggle-eye-open");
    }
    if (confirmPassword === null) {
      if (password.getAttribute("type") === "password") {
        password.setAttribute("type", "text");
      } else if (password.getAttribute("type") === "text") {
        password.setAttribute("type", "password");
      }
    } else if (confirmPassword !== null) {
      if (password.getAttribute("type") === "password") {
        password.setAttribute("type", "text");
        confirmPassword.setAttribute("type", "text");
      } else if (password.getAttribute("type") === "text") {
        password.setAttribute("type", "password");
        confirmPassword.setAttribute("type", "password");
      }
    }
  }
}

form.addEventListener("focusout", cautionFocusOutEvent);
form.addEventListener("input", cautionInputEvent);
form.addEventListener("click", passwordDisplayToggle);
