document.addEventListener('DOMContentLoaded', () => {
  let isValidEmail = false;
  let isValidPassword = false;
  let isPasswordVisible = false;

  const inputEmail = document.getElementById('email');
  const inputPassword = document.getElementById('password');
  const btnTogglePasswordVisibleList = document.querySelectorAll(
    '.btn-password-visible'
  );
  const btnSignin = document.getElementById('btn-signin');
  const messageErrorEmail = document.getElementById('message-error-email');
  const messageErrorPassword = document.getElementById(
    'message-error-password'
  );

  const validateEmail = () => {
    const emailValue = inputEmail.value.trim();
    if (!emailValue) {
      showError(inputEmail, messageErrorEmail, '이메일을 입력해주세요.');
      isValidEmail = false;
    } else if (!checkEmailRegex(emailValue)) {
      showError(inputEmail, messageErrorEmail, '잘못된 이메일 형식입니다.');
      isValidEmail = false;
    } else {
      clearError(inputEmail, messageErrorEmail);
      isValidEmail = true;
    }
    updateBtnSignin();
  };

  const validatePassword = () => {
    const passwordValue = inputPassword.value.trim();
    if (!passwordValue) {
      showError(
        inputPassword,
        messageErrorPassword,
        '비밀번호를 입력해주세요.'
      );
      isValidPassword = false;
    } else if (passwordValue.length < 8) {
      showError(
        inputPassword,
        messageErrorPassword,
        '비밀번호를 8자 이상 입력해주세요'
      );
      isValidPassword = false;
    } else {
      clearError(inputPassword, messageErrorPassword);
      isValidPassword = true;
    }
    updateBtnSignin();
  };

  const togglePasswordVisible = (e) => {
    e.preventDefault();
    const visibleBtn = e.currentTarget;
    const targetInput = visibleBtn.parentElement.querySelector('input');
    const visibleImg = visibleBtn.querySelector('.img-password-visible');
    if (targetInput.type === 'password') {
      targetInput.type = 'text';
      visibleImg.src = '/images/icons/eye-visible.svg';
    } else {
      targetInput.type = 'password';
      visibleImg.src = '/images/icons/eye-invisible.svg';
    }
  };

  const updateBtnSignin = () => {
    if (isValidPassword && isValidEmail) {
      btnSignin.disabled = false;
    } else {
      btnSignin.disabled = true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (btnSignin.disabled) return;
    window.location.href = '/items';
  };

  const checkEmailRegex = (email) => {
    const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');
    return emailRegex.test(email);
  };

  const showError = (input, errorMessageElement, message) => {
    input.classList.add('error');
    errorMessageElement.textContent = message;
    errorMessageElement.style.display = 'block';
  };

  const clearError = (input, errorMessageElement) => {
    input.classList.remove('error');
    errorMessageElement.textContent = '';
    errorMessageElement.style.display = 'none';
  };

  inputEmail.addEventListener('focusout', validateEmail);
  inputPassword.addEventListener('focusout', validatePassword);
  inputEmail.addEventListener('input', validateEmail);
  inputPassword.addEventListener('input', validatePassword);
  btnSignin.addEventListener('click', handleSubmit);
  btnTogglePasswordVisibleList.forEach((button) => {
    button.addEventListener('click', togglePasswordVisible);
  });
});
