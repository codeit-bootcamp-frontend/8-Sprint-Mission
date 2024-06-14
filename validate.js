// querySelector
const email = document.querySelector('#email');
const nickname = document.querySelector('#nickname');
const password = document.querySelector('#pw');
const passwordConfirm = document.querySelector('#pw-confirm');
const submitBtn = document.querySelector('.submit-btn');
const pwVisible = document.querySelector('.pw-visible');
const pwConfirmVisible = document.querySelector('.pw-confirm-visible');

// errorMessage Controler
function showErrorMessage(element, message, errorClass) {
  removeErrorMessage(errorClass, element);
  let errorMessage = document.querySelector(`.${errorClass}`);
  if (!errorMessage) {
    errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    errorMessage.classList.add('errorColor', errorClass);
    element.classList.add('errorOutline');
    element.after(errorMessage);
  }
}

function removeErrorMessage(errorClass, element) {
  let errorMessage = document.querySelector(`.${errorClass}`);
  if (errorMessage) {
    errorMessage.remove();
    element.classList.remove('errorOutline');
  }
}

// validation eventHandler
function validateEmail() {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  removeErrorMessage('emailErrorEmpty', email);
  removeErrorMessage('emailErrorForm', email);
  if (email.value.trim() === "") {
    showErrorMessage(email, "이메일을 입력해주세요.", 'emailErrorEmpty');
  } else if (!regex.test(email.value)) {
    showErrorMessage(email, "잘못된 이메일 형식입니다.", 'emailErrorForm');
  }
  activateButton()
}

function validateName() {
  removeErrorMessage('nameErrorEmpty', nickname);
  if (nickname.value.trim() === "") {
    showErrorMessage(nickname, "닉네임을 입력해주세요.", 'nameErrorEmpty');
  }
  activateButton()
}

function validatePw() {
  removeErrorMessage('pwErrorEmpty', password);
  removeErrorMessage('pwErrorShort', password);
  if (password.value.trim() === "") {
    showErrorMessage(password, "비밀번호를 입력해주세요.", 'pwErrorEmpty');
  } else if (password.value.length < 8) {
    showErrorMessage(password, "비밀번호를 8자 이상 입력해주세요.", 'pwErrorShort');
  }
  activateButton()
}

function validatePwConfirm() {
  removeErrorMessage('pwConfirmErrorEmpty', passwordConfirm);
  removeErrorMessage('pwConfirmError', passwordConfirm);
  if (passwordConfirm.value.trim() === "") {
    showErrorMessage(passwordConfirm, "비밀번호를 입력해주세요.", 'pwConfirmErrorEmpty');
  } else if (password.value.trim() !== passwordConfirm.value.trim()) {
    showErrorMessage(passwordConfirm, "비밀번호가 일치하지 않습니다.", 'pwConfirmError');
  }
  activateButton()
}

// button activation eventHandler
function activateButton() {
  const errors = document.querySelectorAll('.errorColor');
  if (errors.length === 0 && 
      email.value !== "" &&
      password.value !== "" &&
      (submitBtn.textContent === '로그인' || 
        (nickname.value !== "" && 
          passwordConfirm.value !== ""))) {
    submitBtn.classList.remove('inactive-btn');
    submitBtn.classList.add('active-btn');
    if (submitBtn.textContent === '로그인') {
      submitBtn.href = "/pages/items/items.html";
    } else {
      submitBtn.href = "/pages/signup/signup.html";
    }
  } else {
    submitBtn.classList.remove('active-btn');
    submitBtn.classList.add('inactive-btn');
    submitBtn.removeAttribute('href');
  }
}

// password Visibility eventHandler
function togglePwVisibility(target, inputElement) {
  if (inputElement.type === 'password') {
    inputElement.type = 'text';
    target.src = "/assets/icons/btn_visibility.png";
  } else {
    inputElement.type = 'password';
    target.src = "/assets/icons/btn_visibility_off.png";
  }
}

// login eventListener
email.addEventListener('blur', validateEmail);
password.addEventListener('blur', validatePw);
pwVisible.addEventListener('click', 
  (e) => togglePwVisibility(e.target, password));

// signup eventListener
nickname.addEventListener('blur', validateName);
passwordConfirm.addEventListener('blur', validatePwConfirm);
pwConfirmVisible.addEventListener('click', 
  (e) => togglePwVisibility(e.target, passwordConfirm));