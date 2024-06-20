export const form = document.querySelector('.form');
export const inputList = form.querySelectorAll("input");
export const submitBtn = document.querySelector('#submitBtn');
export const VALIDATE_LIST = Object.freeze({
  EMAIL: 'val-email',
  NICKNAME: 'val-nickname',
  PASSWORD: 'val-password',
  CONFIRM_PASSWORD: 'val-confirm-password',
})
// 유효값에 대한 정의
export const validate = {
  errorPlacement: function (e, message) {
    const inputFormDiv = e.parentNode;
    let errorDiv = inputFormDiv.querySelector('.error-message');
    if (!errorDiv) {
      errorDiv = document.createElement('div');
      errorDiv.classList.add('error-message');
    }
    errorDiv.innerHTML = message;
    inputFormDiv.appendChild(errorDiv);

  },
  showError: function (e, message) {
    const inputFormDiv = e.parentNode;
    inputFormDiv.classList.remove('valid');
    e.classList.add('error-border');
    e.dataset.valid = 'false';
    this.errorPlacement(e, message);
  },
  success: function (e) {
    const inputFormDiv = e.parentNode;
    let errorDiv = inputFormDiv.querySelector('.error-message');
    e.classList.remove('error-border');
    if (errorDiv) {
      errorDiv.remove();
    }
    inputFormDiv.classList.add('valid');
    e.dataset.valid = 'true';
  },
  messages: {
    [VALIDATE_LIST.EMAIL]: {
      required: '이메일을 입력해주세요.',
      pattern: '잘못된 이메일형식입니다.',
    },
    [VALIDATE_LIST.NICKNAME]: '닉네임을 입력해주세요.',
    [VALIDATE_LIST.PASSWORD]: {
      required: '비밀번호를 입력해주세요.',
      minlength: '비밀번호를 8자 이상 입력해주세요.',
    },
    [VALIDATE_LIST.CONFIRM_PASSWORD]: {
      required: '비밀번호를 입력해주세요.',
      minlength: '비밀번호를 8자 이상 입력해주세요.',
      equalTo: '비밀번호가 일치하지 않습니다.',
    }
  },
  rules: {
    [VALIDATE_LIST.EMAIL]: {
      required: true,
      pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    },
    [VALIDATE_LIST.NICKNAME]: {
      required: true,
    },
    [VALIDATE_LIST.PASSWORD]: {
      required: true,
      minlength: 8,
    },
    [VALIDATE_LIST.CONFIRM_PASSWORD]: {
      required: true,
      minlength: 8,
      equalTo: '#password',
    }
  }
}

// input 유효값 check
export function checkInputs(input) {
  const inputType = input.name;
  const inputValName = `val-${inputType}`;
  const value = input.value.trim();
  const rules = validate.rules[inputValName];
  const message = validate.messages[inputValName];

  // Specific validation checks 
  if (inputType === 'email') {
    if (rules.required && !value) {
      validate.showError(input, message.required);
      return false;
    }
    if (value && !rules.pattern.test(value)) {
      validate.showError(input, message.pattern);
      return false;
    }
    validate.success(input);
    return true;
  } else if (inputType === 'nickname') {
    if (rules && !value) {
      validate.showError(input, message);
      return false;
    }
    validate.success(input);
    return true;
  } else if (inputType === 'password') {
    if (rules.required && !value) {
      validate.showError(input, message.required);
      return false;
    }
    if (value && value.length < rules.minlength) {
      validate.showError(input, message.minlength);
      return false;
    }
    validate.success(input);

  } else if (inputType === 'confirm-password') {
    if (rules.required && !value) {
      validate.showError(input, message.required);
      return false;
    }
    if (value && value.length < rules.minlength) {
      validate.showError(input, message.minlength);
      return false;
    }
    if (value && value !== document.querySelector('#password').value) {
      validate.showError(input, message.equalTo);
      return false;
    }
    validate.success(input);
    return true;
  }
}

// form 전체에 대한 검증
export function checkAllInput() {
  let formSubmitDone = [...form.querySelectorAll('input')].every(input => input.dataset.valid === 'true');
  submitBtn.disabled = !formSubmitDone;
  return formSubmitDone;
}

