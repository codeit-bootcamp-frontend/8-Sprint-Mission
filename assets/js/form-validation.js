export let signupForm = document.querySelector('#signupForm')
export let loginForm = document.querySelector('#loginForm')
export let email = document.querySelector('#email');
export let password = document.querySelector('#password');
export let confirmPassword = document.querySelector('#confirmPassword');
export let nickName = document.querySelector('#nickname');
export let signUpBtn = document.querySelector('#signupBtn');
export let loginBtn = document.querySelector('#loginBtn');
export const formSubmitDone = false;

export const validate = {
  errorPlacement: function (e, message) {
    let errorDiv = e.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('error-message')) {
      errorDiv.innerHTML = message;
    } else {
      e.classList.add('is-valid');
      errorDiv = document.createElement('div');
      errorDiv.classList.add('error-message');
      errorDiv.innerHTML = message;
      e.parentNode.insertBefore(errorDiv, e.nextSibling);
    }
  },
  showError: function (e, message) {
    e.classList.add('error-border');
    e.dataset.valid = 'false';
    this.errorPlacement(e, message);
  },
  success: function (e) {
    e.classList.remove('error-border');
    e.dataset.valid = 'true';
    let errorDiv = e.nextElementSibling;
    if (errorDiv) {
      errorDiv.innerHTML = '';
    }
  },
  messages: {
    'val-email': {
      required: '이메일을 입력해주세요.',
      minlength: '잘못된 이메일 형식입니다.',
    },
    'val-nickname': '닉네임을 입력해주세요.',
    'val-password': {
      required: '비밀번호를 입력해주세요.',
      minlength: '비밀번호를 8자 이상 입력해주세요.',
    },
    'val-confirm-password': {
      required: '비밀번호를 입력해주세요.',
      minlength: '비밀번호를 8자 이상 입력해주세요.',
      equalTo: '비밀번호가 일치하지 않습니다.',
    }
  },
  rules: {
    'val-email': {
      required: true,
      email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    },
    'val-nickname': {
      required: true,
    },
    'val-password': {
      required: true,
      minlength: 8,
    },
    'val-confirm-password': {
      required: true,
      minlength: 8,
      equalTo: '#password',
    }
  },
}

export function validateEmail() {
  let value = email.value.trim();
  let rules = validate.rules['val-email'];
  if (rules.required && !value) {
    validate.showError(email, validate.messages['val-email'].required);
    return false;
  }
  if (value && !rules.email.test(value)) {
    validate.showError(email, validate.messages['val-email'].minlength);
    return false;
  }
  validate.success(email);
  return true;
}

export function validateNickname() {
  let value = nickName.value.trim();
  let rules = validate.rules['val-nickname'];
  if (rules && !value) {
    validate.showError(nickName, validate.messages['val-nickname']);
    return false;
  }
  validate.success(nickName);
  return true;
}


export function validatePassword() {
  let value = password.value.trim();
  let rules = validate.rules['val-password'];
  if (rules.required && !value) {
    validate.showError(password, validate.messages['val-password'].required);
    return false;
  }
  if (value && value.length < rules.minlength) {
    validate.showError(password, validate.messages['val-password'].minlength);
    return false;
  }
  validate.success(password);
  return true;
}

export function validateConfirmPassword() {
  let value = confirmPassword.value.trim();
  let passwordValue = password.value;
  let rules = validate.rules['val-confirm-password'];
  if (rules.required && !value) {
    validate.showError(confirmPassword, validate.messages['val-confirm-password'].required);
    return false;
  }
  if (value && value.length < rules.minlength) {
    validate.showError(confirmPassword, validate.messages['val-confirm-password'].minlength);
    return false;
  }
  if (value && value !== passwordValue) {
    validate.showError(confirmPassword, validate.messages['val-confirm-password'].equalTo);
    return false;
  }
  validate.success(confirmPassword);
  return true;
}

export function checkLoginValidity() {
  let isEmailValid = validateEmail();
  let isPasswordValid = validatePassword();
  loginBtn.disabled = !(isEmailValid && isPasswordValid);
}
export function checkSignupValidity() {
  let isEmailValid = validateEmail();
  let isNicknameValid = validateNickname();
  let isPasswordValid = validatePassword();
  let isConfirmPasswordValid = validateConfirmPassword();
  signUpBtn.disabled = !(isEmailValid && isPasswordValid && isConfirmPasswordValid && isNicknameValid);
}
