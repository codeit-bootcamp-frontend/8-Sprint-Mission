const form = document.querySelector("form");
const inputList = form.querySelectorAll("input");
const submitBtn = form.querySelector("#submitBtn");

submitBtn.disabled = true;

inputList.forEach((input) => {
  input.addEventListener("keyup", function () {
    checkInputs(input);
    submitBtn.disabled = !checkAllInputs();
  });
  input.addEventListener("blur", () => checkInputs(input));
});



function checkInputs(input) {
  const emailValue = form.email.value.trim();
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const nicknameValue = form.nickname.value.trim();
  const passwordValue = form.password.value.trim();
  const confirmPasswordValue = form.confirmPassword.value.trim();


  if (input.name === 'email') {
    if (emailValue === "") {
      setErrorFor(input, "이메일을 입력해주세요.");
    } else if (!emailPattern.test(emailValue)) {
      setErrorFor(input, "잘못된 이메일 형식입니다.");
    } else {
      setSuccessFor(input);
    }
  } else if (input.name === 'password') {
    if (passwordValue === "") {
      setErrorFor(input, "비밀번호를 입력하세요.");
    } else if (passwordValue.length < 8) {
      setErrorFor(input, "비밀번호를 8자 이상 입력해주세요.");
    } else {
      setSuccessFor(input);
    }
  } else if (input.name === 'confirmPassword') {
    if (confirmPasswordValue === "") {
      setErrorFor(input, "비밀번호를 입력하세요.");
    } else if (confirmPasswordValue.length < 8) {
      setErrorFor(input, "비밀번호를 8자 이상 입력해주세요.");
    } else if (confirmPasswordValue === passwordValue) {
      setErrorFor(input, "비밀번호가 일치하지 않습니다.");
    } else {
      setSuccessFor(input);
    }

  } else if (input.name === 'nickname') {
    if (nicknameValue === "") {
      setErrorFor(input, "닉네임을 입력해주세요.");
    } else {
      setSuccessFor(input);
    }

  }
}

function setErrorFor(input, message) {
  const inputFormDiv = input.parentElement;
  let errorDiv = inputFormDiv.querySelector('.error-message');
  if (!errorDiv) {
    input.classList.add('error-border');
    errorDiv = document.createElement('div');
    errorDiv.classList.add('error-message');
  }
  errorDiv.innerHTML = message;
  inputFormDiv.appendChild(errorDiv);
}

function setSuccessFor(input) {
  const inputFormDiv = input.parentElement;
  const errorDiv = inputFormDiv.querySelector('.error-message');
  if (errorDiv) {
    input.classList.remove('error-border');
    inputFormDiv.removeChild(errorDiv);
  }
}

function checkAllInputs() {
  const emailValid = form.email.value.trim() !== "" && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(form.email.value.trim());
  const passwordValid = form.password.value.trim() !== "" && form.password.value.trim().length >= 8;
  const confirmPasswordValid = form.confirmPassword.value.trim() !== "" && form.password.value.trim() === form.confirmPassword.value.trim();
  const nicknameValid = form.nickname.value.trim() !== "";
  return emailValid && passwordValid && confirmPasswordValid && nicknameValid;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkAllInputs()) {
    alert('로그인 성공');
    window.location.href = '/items.html';
  } else {
    alert('입력한 정보를 다시 확인하세요.');
  }
});



// 패스워드 토글기능
let passwordToggleBtns = document.querySelectorAll('.password-toggle-button');

function passwordToggle(e) {
  let button = e.currentTarget;
  let passwordInput = button.parentElement.querySelector('input');
  let toggleIcon = document.createElement('i');
  toggleIcon.classList.add('icon');
  if (passwordInput.type == "password") {
    passwordInput.type = "text";
    toggleIcon.classList.remove('ic_visible_on');
    toggleIcon.classList.add('ic_visible_off')
    this.setAttribute("aria-label", "비밀번호 숨기기");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.remove('ic_visible_off');
    toggleIcon.classList.add('ic_visible_on');
    this.setAttribute("aria-label", "비밀번호 보기");
  }
  button.innerHTML = '';
  button.appendChild(toggleIcon);
}

passwordToggleBtns.forEach(btn => {
  btn.addEventListener('click', passwordToggle);
});