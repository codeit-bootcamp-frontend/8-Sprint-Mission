import {
  form,
  inputList,
  checkInputs,
  checkAllInput,
} from './form-validation.js';

inputList.forEach((input) => {
  input.addEventListener('blur', function () {
    this.parentNode.classList.add('is-error');
    checkInputs(input);
  });
  input.addEventListener('keyup', () => {
    checkInputs(input);
    checkAllInput();
  })
});

// form 제출
form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (checkAllInput) {
    alert('회원가입성공');
    window.location.href = '/signup.html';
  }
});


// 패스워드 보기
function passwordToggle(e) {
  let button = e.currentTarget;
  let passwordInput = button.parentElement.querySelector('input');
  let toggleIcon = document.createElement('i');
  toggleIcon.classList.add('icon');

  const shouldShowPassword = passwordInput.type === 'password';
  passwordInput.type = shouldShowPassword ? 'text' : 'password';

  toggleIcon.classList.toggle('ic_visible_on', !shouldShowPassword);
  toggleIcon.classList.toggle('ic_visible_off', shouldShowPassword);

  const ariaLabel = shouldShowPassword ? '비밀번호 숨기기' : '비밀번호 보기';
  this.setAttribute("aria-label", ariaLabel);

  button.innerHTML = '';
  button.appendChild(toggleIcon);
}

const passwordToggleBtns = document.querySelectorAll('.password-toggle-button');
passwordToggleBtns.forEach(btn => {
  btn.addEventListener('click', passwordToggle);
});