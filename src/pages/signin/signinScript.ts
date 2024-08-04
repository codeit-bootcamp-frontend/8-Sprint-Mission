document.addEventListener('DOMContentLoaded', () => {
  let isValidEmail = false;
  let isValidPassword = false;

  const inputEmail = document.getElementById('email');
  const inputPassword = document.getElementById('password');
  const btnTogglePasswordVisibleList = document.querySelectorAll(
    '.btn-password-visible'
  );
  const btnSignin = document.getElementById('btn-signin');
  const messageErrorEmail =
    document.getElementById('message-error-email') || null;
  const messageErrorPassword =
    document.getElementById('message-error-password') || null;

  const validateEmail = () => {
    const inputEmailEl = inputEmail as HTMLInputElement;
    const emailValue = inputEmailEl.value.trim();
    if (!emailValue) {
      showError(inputEmailEl, messageErrorEmail, '이메일을 입력해주세요.');
      isValidEmail = false;
    } else if (!checkEmailRegex(emailValue)) {
      showError(inputEmailEl, messageErrorEmail, '잘못된 이메일 형식입니다.');
      isValidEmail = false;
    } else {
      clearError(inputEmailEl, messageErrorEmail);
      isValidEmail = true;
    }
    updateBtnSignin();
  };

  const validatePassword = () => {
    const inputPasswordEl = inputPassword as HTMLInputElement;
    const passwordValue = inputPasswordEl.value.trim();
    if (!passwordValue) {
      showError(
        inputPasswordEl,
        messageErrorPassword,
        '비밀번호를 입력해주세요.'
      );
      isValidPassword = false;
    } else if (passwordValue.length < 8) {
      showError(
        inputPasswordEl,
        messageErrorPassword,
        '비밀번호를 8자 이상 입력해주세요'
      );
      isValidPassword = false;
    } else {
      clearError(inputPasswordEl, messageErrorPassword);
      isValidPassword = true;
    }
    updateBtnSignin();
  };

  const togglePasswordVisible = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    e.preventDefault();
    const visibleBtn = e.currentTarget;
    const targetInput = visibleBtn.parentElement?.querySelector(
      'input'
    ) as HTMLInputElement;
    const visibleImg = visibleBtn.querySelector(
      '.img-password-visible'
    ) as HTMLImageElement;
    if (targetInput.type === 'password') {
      targetInput.type = 'text';
      visibleImg.src = '/images/icons/eye-visible.svg';
    } else {
      targetInput.type = 'password';
      visibleImg.src = '/images/icons/eye-invisible.svg';
    }
  };

  const updateBtnSignin = () => {
    const btnSigninEl = btnSignin as HTMLButtonElement;
    if (isValidPassword && isValidEmail) {
      btnSigninEl.disabled = false;
    } else {
      btnSigninEl.disabled = true;
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    const btnSigninEl = btnSignin as HTMLButtonElement;
    if (btnSigninEl.disabled) return;
    window.location.href = '/items';
  };

  const checkEmailRegex = (email: string) => {
    const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');
    return emailRegex.test(email);
  };

  const showError = (
    input: HTMLInputElement,
    errorMessageElement: HTMLElement | null,
    message: string
  ) => {
    input.classList.add('error');
    if (errorMessageElement) {
      errorMessageElement.textContent = message;
      errorMessageElement.style.display = 'block';
    }
  };

  const clearError = (
    input: HTMLInputElement,
    errorMessageElement: HTMLElement | null
  ) => {
    input.classList.remove('error');
    if (errorMessageElement) {
      errorMessageElement.textContent = '';
      errorMessageElement.style.display = 'none';
    }
  };

  inputEmail?.addEventListener('focusout', validateEmail);
  inputPassword?.addEventListener('focusout', validatePassword);
  inputEmail?.addEventListener('input', validateEmail);
  inputPassword?.addEventListener('input', validatePassword);
  btnSignin?.addEventListener(
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
