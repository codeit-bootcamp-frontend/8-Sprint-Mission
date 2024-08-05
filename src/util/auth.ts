// const login = document.getElementById('login');
// const signup = document.getElementById('signup');
// const email = document.getElementById('email');
// const nickname = document.getElementById('nickname');
// const password = document.getElementById('password');
// const passwordConfirmationInput = document.getElementById('passwordConfirmation');
// const submitButton = document.querySelector('.auth-container form button[type="submit"]');

// function showError(input, errorId) {
//   const errorElement = document.getElementById(errorId);
//   errorElement.style.display = 'block';
//   input.style.border = '1px solid #f74747';
// }

// function hideError(input, errorId) {
//   const errorElement = document.getElementById(errorId);
//   errorElement.style.display = 'none';
//   input.style.border = 'none';
// }

// function validateEmailString(email) {
//   const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
//   return emailRegex.test(email);
// }

// function checkEmailValidity() {
//   const emailValue = email.value.trim();

//   isEmailValid = false;
//   hideError(email, 'emailEmptyError');
//   hideError(email, 'emailInvalidError');

//   if (!emailValue) {
//     showError(email, 'emailEmptyError');
//   } else if (!validateEmailString(emailValue)) {
//     showError(email, 'emailInvalidError');
//   } else {
//     isEmailValid = true;
//     hideError(email, 'emailEmptyError');
//     hideError(email, 'emailInvalidError');
//   }
//   updateSubmitButtonState();
// }

// function checkNicknameValidity() {
//   const nicknameValue = nickname.value.trim();
//   isNicknameValid = false;
//   hideError(nickname, 'nicknameEmptyError');

//   if (!nicknameValue) {
//     showError(nickname, 'nicknameEmptyError');
//   } else {
//     isNicknameValid = true;
//     hideError(email, 'nicknameEmptyError');
//   }
//   updateSubmitButtonState();
// }

// function checkPasswordValidity() {
//   const passwordValue = password.value.trim();
//   isPasswordValid = false;

//   hideError(password, 'passwordEmptyError');
//   hideError(password, 'passwordInvalidError');

//   if (!passwordValue) {
//     showError(password, 'passwordEmptyError');
//   } else if (passwordValue.length < 8) {
//     showError(password, 'passwordInvalidError');
//   } else {
//     isPasswordValid = true;
//     hideError(password, 'passwordEmptyError');
//     hideError(password, 'passwordInvalidError');
//   }
//   updateSubmitButtonState();
// }

// function checkPasswordConfirmationValidity() {
//   const passwordConfirmationValue = passwordConfirmationInput.value.trim();
//   isPasswordConfirmationValid = false;

//   hideError(passwordConfirmationInput, 'passwordConfirmationError');
//   hideError(passwordConfirmationInput, 'passwordConfirmationInitError');

//   if (!isPasswordValid) {
//     showError(passwordConfirmationInput, 'passwordConfirmationInitError');
//   } else if (!passwordConfirmationValue || passwordConfirmationValue !== password.value.trim()) {
//     showError(passwordConfirmationInput, 'passwordConfirmationError');
//   } else {
//     isPasswordConfirmationValid = true;
//     hideError(passwordConfirmationInput, 'passwordConfirmationError');
//     hideError(passwordConfirmationInput, 'passwordConfirmationInitError');
//   }
//   updateSubmitButtonState();
// }

// function updateSubmitButtonState() {
//   let isFormValid = isEmailValid && isPasswordValid;

//   if (signup) {
//     isFormValid = isFormValid && isNicknameValid && isPasswordConfirmationValid;
//   }

//   submitButton.disabled = !isFormValid;
// }

// if (email) {
//   email.addEventListener('focusout', checkEmailValidity);
// }
// if (nickname) {
//   nickname.addEventListener('focusout', checkNicknameValidity);
// }
// if (password) {
//   password.addEventListener('input', checkPasswordValidity);
// }
// if (passwordConfirmationInput) {
//   passwordConfirmationInput.addEventListener('input', checkPasswordConfirmationValidity);
// }

// updateSubmitButtonState();

// if (login) {
//   login.addEventListener('submit', function (event) {
//     event.preventDefault();
//     window.location.href = 'items.html';
//   });
// }

// if (signup) {
//   signup.addEventListener('submit', function (event) {
//     event.preventDefault();
//     window.location.href = 'signup.html';
//   });
// }

// function togglePasswordVisibility(event) {
//   const button = event.currentTarget;
//   const inputField = button.parentElement.querySelector('input');
//   const toggleIcon = button.querySelector('.password-toggle-icon');

//   const isPasswordVisible = inputField.type === 'text';

//   inputField.type = isPasswordVisible ? 'text' : 'password';

//   toggleIcon.src = isPasswordVisible ? 'images/icons/eye-visible.svg' : 'images/icons/eye-invisible.svg';
//   toggleIcon.alt = isPasswordVisible ? '비밀번호 표시 상태 아이콘' : '비밀번호 숨김 상태 아이콘';
//   button.setAttribute('aria-label', isPasswordVisible ? '비밀번호 숨기기' : '비밀번호 보기');
// }

// const toggleButtons = document.querySelectorAll('.password-toggle-button');
// toggleButtons.forEach((button) => button.addEventListener('click', togglePasswordVisibility));
