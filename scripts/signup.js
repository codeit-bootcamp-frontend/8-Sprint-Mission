document.addEventListener('DOMContentLoaded', () => {
  let isValidEmail = false;
  let isValidNickname = false;
  let isValidPassword = false;
  let isValidPasswordConfirmation = false;
  let isPasswordVisible = false;

  const inputEmail = document.getElementById('email');
  const inputNickname = document.getElementById('nickname');
  const inputPassword = document.getElementById('password');
  const inputPasswordConfirmation = document.getElementById(
    'password-confirmation'
  );
  const btnTogglePasswordVisibleList = document.querySelectorAll(
    '.btn-password-visible'
  );
  const btnSignup = document.getElementById('btn-signup');
  const messageErrorEmail = document.getElementById('message-error-email');
  const messageErrorNickname = document.getElementById(
    'message-error-nickname'
  );
  const messageErrorPassword = document.getElementById(
    'message-error-password'
  );
  const messageErrorPasswordConfirmation = document.getElementById(
    'message-error-password-confirmation'
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
    updatebtnSignup();
  };

  const validateNickname = () => {
    const nicknameValue = inputNickname.value.trim();
    if (!nicknameValue) {
      showError(inputNickname, messageErrorNickname, '닉네임을 입력해주세요.');
      isValidNickname = false;
    } else {
      clearError(inputNickname, messageErrorNickname);
      isValidNickname = true;
    }
    updatebtnSignup();
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
    validatePasswordConfirmation();
    updatebtnSignup();
  };

  const validatePasswordConfirmation = () => {
    const passwordConfirmationValue = inputPasswordConfirmation.value.trim();
    const passwordValue = inputPassword.value.trim();
    if (!passwordConfirmationValue) {
      showError(
        inputPasswordConfirmation,
        messageErrorPasswordConfirmation,
        '비밀번호를 입력해주세요.'
      );
    } else if (passwordConfirmationValue !== passwordValue) {
      showError(
        inputPasswordConfirmation,
        messageErrorPasswordConfirmation,
        '비밀번호가 일치하지 않습니다.'
      );
      isValidPasswordConfirmation = false;
    } else {
      clearError(inputPasswordConfirmation, messageErrorPasswordConfirmation);
      isValidPasswordConfirmation = true;
    }
    updatebtnSignup();
  };

  const togglePasswordVisible = (e) => {
    e.preventDefault();
    const visibleBtn = e.currentTarget;
    const targetInput = visibleBtn.parentElement.querySelector('input');
    const visibleImg = visibleBtn.querySelector('.img-password-visible');
    if (targetInput.type === 'password') {
      targetInput.type = 'text';
      visibleImg.src = '/images/icons/eye-visible.svg';
      visibleImg.alt = '비밀번호 표시';
    } else {
      targetInput.type = 'password';
      visibleImg.src = '/images/icons/eye-invisible.svg';
      visibleImg.alt = '비밀번호 숨김';
    }
  };

  const updatebtnSignup = () => {
    if (
      isValidPassword &&
      isValidEmail &&
      isValidNickname &&
      isValidPasswordConfirmation
    ) {
      btnSignup.disabled = false;
    } else {
      btnSignup.disabled = true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (btnSignup.disabled) return;
    window.location.href = '/signin';
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
  inputEmail.addEventListener('input', validateEmail);
  inputNickname.addEventListener('focusout', validateNickname);
  inputNickname.addEventListener('input', validateNickname);
  inputPassword.addEventListener('focusout', validatePassword);
  inputPassword.addEventListener('input', validatePassword);
  inputPasswordConfirmation.addEventListener(
    'focusout',
    validatePasswordConfirmation
  );
  inputPasswordConfirmation.addEventListener(
    'input',
    validatePasswordConfirmation
  );
  btnSignup.addEventListener('click', handleSubmit);
  btnTogglePasswordVisibleList.forEach((button) => {
    button.addEventListener('click', togglePasswordVisible);
  });
});
