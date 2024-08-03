document.addEventListener('DOMContentLoaded', () => {
  let isValidEmail = false;
  let isValidNickname = false;
  let isValidPassword = false;
  let isValidPasswordConfirmation = false;

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
    const inputEmailEl = inputEmail as HTMLInputElement;
    const messageErrorEmailEl = messageErrorEmail as HTMLElement;
    const emailValue = inputEmailEl.value.trim();
    if (!emailValue) {
      showError(inputEmailEl, messageErrorEmailEl, '이메일을 입력해주세요.');
      isValidEmail = false;
    } else if (!checkEmailRegex(emailValue)) {
      showError(inputEmailEl, messageErrorEmailEl, '잘못된 이메일 형식입니다.');
      isValidEmail = false;
    } else {
      clearError(inputEmailEl, messageErrorEmailEl);
      isValidEmail = true;
    }
    updatebtnSignup();
  };

  const validateNickname = () => {
    const nicknameEl = inputNickname as HTMLInputElement;
    const messageErrorNicknameEl = messageErrorNickname as HTMLElement;
    const nicknameValue = nicknameEl.value.trim();
    if (!nicknameValue) {
      showError(nicknameEl, messageErrorNicknameEl, '닉네임을 입력해주세요.');
      isValidNickname = false;
    } else {
      clearError(nicknameEl, messageErrorNicknameEl);
      isValidNickname = true;
    }
    updatebtnSignup();
  };

  const validatePassword = () => {
    const passwordEl = inputPassword as HTMLInputElement;
    const messageErrorPasswordEl = messageErrorPassword as HTMLElement;
    const passwordValue = passwordEl.value.trim();
    if (!passwordValue) {
      showError(passwordEl, messageErrorPasswordEl, '비밀번호를 입력해주세요.');
      isValidPassword = false;
    } else if (passwordValue.length < 8) {
      showError(
        passwordEl,
        messageErrorPasswordEl,
        '비밀번호를 8자 이상 입력해주세요'
      );
      isValidPassword = false;
    } else {
      clearError(passwordEl, messageErrorPasswordEl);
      isValidPassword = true;
    }
    validatePasswordConfirmation();
    updatebtnSignup();
  };

  const validatePasswordConfirmation = () => {
    const passwordConfirmationValue = (
      inputPasswordConfirmation as HTMLInputElement
    ).value.trim();
    const passwordValue = (inputPassword as HTMLInputElement).value.trim();
    if (!passwordConfirmationValue) {
      showError(
        inputPasswordConfirmation as HTMLInputElement,
        messageErrorPasswordConfirmation as HTMLElement,
        '비밀번호를 입력해주세요.'
      );
    } else if (passwordConfirmationValue !== passwordValue) {
      showError(
        inputPasswordConfirmation as HTMLInputElement,
        messageErrorPasswordConfirmation as HTMLElement,
        '비밀번호가 일치하지 않습니다.'
      );
      isValidPasswordConfirmation = false;
    } else {
      clearError(
        inputPasswordConfirmation as HTMLInputElement,
        messageErrorPasswordConfirmation as HTMLElement
      );
      isValidPasswordConfirmation = true;
    }
    updatebtnSignup();
  };

  const togglePasswordVisible = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    e.preventDefault();
    const visibleBtn = e.currentTarget;
    const targetInput = visibleBtn.parentElement?.querySelector('input');
    const visibleImg: HTMLImageElement | null = visibleBtn.querySelector(
      '.img-password-visible'
    );
    if (targetInput?.type === 'password') {
      targetInput.type = 'text';
      if (visibleImg) {
        visibleImg.src = '/images/icons/eye-visible.svg';
        visibleImg.alt = '비밀번호 표시';
      }
    } else {
      if (targetInput && visibleImg) {
        targetInput.type = 'password';
        visibleImg.src = '/images/icons/eye-invisible.svg';
        visibleImg.alt = '비밀번호 숨김';
      }
    }
  };

  const updatebtnSignup = () => {
    const btnSignupEl = btnSignup as HTMLButtonElement;
    if (
      isValidPassword &&
      isValidEmail &&
      isValidNickname &&
      isValidPasswordConfirmation
    ) {
      btnSignupEl.disabled = false;
    } else {
      btnSignupEl.disabled = true;
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    const btnSignupEl = btnSignup as HTMLButtonElement;
    if (btnSignupEl.disabled) return;
    window.location.href = '/signin';
  };

  const checkEmailRegex = (email: string) => {
    const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');
    return emailRegex.test(email);
  };

  const showError = (
    input: HTMLInputElement,
    errorMessageElement: HTMLElement,
    message: string
  ) => {
    input.classList.add('error');
    errorMessageElement.textContent = message;
    errorMessageElement.style.display = 'block';
  };

  const clearError = (
    input: HTMLInputElement,
    errorMessageElement: HTMLElement
  ) => {
    input.classList.remove('error');
    errorMessageElement.textContent = '';
    errorMessageElement.style.display = 'none';
  };

  inputEmail?.addEventListener('focusout', validateEmail);
  inputEmail?.addEventListener('input', validateEmail);
  inputNickname?.addEventListener('focusout', validateNickname);
  inputNickname?.addEventListener('input', validateNickname);
  inputPassword?.addEventListener('focusout', validatePassword);
  inputPassword?.addEventListener('input', validatePassword);
  inputPasswordConfirmation?.addEventListener(
    'focusout',
    validatePasswordConfirmation
  );
  inputPasswordConfirmation?.addEventListener(
    'input',
    validatePasswordConfirmation
  );
  btnSignup?.addEventListener(
    'click',
    handleSubmit as unknown as EventListener
  );
  btnTogglePasswordVisibleList.forEach((button) => {
    button.addEventListener(
      'click',
      togglePasswordVisible as unknown as EventListener
    );
  });
});
