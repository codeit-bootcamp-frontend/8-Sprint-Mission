document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginButton = document.querySelector('button[type="submit"]');
  const form = document.querySelector("form");
  const togglePasswordButton = document.querySelector(".toggle-password");

  const emailErrorMessage = document.createElement("div");
  emailErrorMessage.classList.add("error-message");
  emailInput.parentNode.appendChild(emailErrorMessage);

  const passwordErrorMessage = document.createElement("div");
  passwordErrorMessage.classList.add("error-message");
  passwordInput.parentNode.parentNode.appendChild(passwordErrorMessage);

  function validateInputs(showErrors = false) {
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    if (!emailValue) {
      if (showErrors) {
        emailErrorMessage.textContent = "이메일을 입력해주세요.";
        emailErrorMessage.style.display = "block";
        emailInput.classList.add("input-error");
      }
      isValid = false;
    } else if (!emailRegex.test(emailValue)) {
      if (showErrors) {
        emailErrorMessage.textContent = "잘못된 이메일 형식입니다.";
        emailErrorMessage.style.display = "block";
        emailInput.classList.add("input-error");
      }
      isValid = false;
    } else {
      emailErrorMessage.textContent = "";
      emailErrorMessage.style.display = "none";
      emailInput.classList.remove("input-error");
    }

    if (!passwordValue) {
      if (showErrors) {
        passwordErrorMessage.textContent = "비밀번호를 입력해주세요.";
        passwordErrorMessage.style.display = "block";
        passwordInput.classList.add("input-error");
      }
      isValid = false;
    } else if (passwordValue.length < 8) {
      if (showErrors) {
        passwordErrorMessage.textContent = "비밀번호를 8자 이상 입력해주세요.";
        passwordErrorMessage.style.display = "block";
        passwordInput.classList.add("input-error");
      }
      isValid = false;
    } else {
      passwordErrorMessage.textContent = "";
      passwordErrorMessage.style.display = "none";
      passwordInput.classList.remove("input-error");
    }

    loginButton.disabled = !isValid;
    return isValid; //유효성 검사의 결과를 반환
  }

  emailInput.addEventListener("focusout", () => validateInputs(true));
  passwordInput.addEventListener("focusout", () => validateInputs(true));
  emailInput.addEventListener("input", () => validateInputs(false));
  passwordInput.addEventListener("input", () => validateInputs(false));

  //페이지 로드 시 초기 상태 설정
  validateInputs(false);

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // 기본 폼 제출 동작 방지
    if (validateInputs(true)) {
      window.location.href = "/items.html"; //유효성 검사를 통과하면 /items로 이동
    }
  });

  //비밀번호 표시/숨김 기능 추가
  togglePasswordButton.addEventListener("click", function () {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    //아이콘 변경
    const icon =
      type === "password"
        ? "../images/icons/eye-invisible.svg"
        : "../images/icons/eye-visible.svg";
    togglePasswordButton.setAttribute("src", icon);
  });
});
