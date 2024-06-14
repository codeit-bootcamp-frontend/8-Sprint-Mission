document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const nicknameInput = document.getElementById('nickname');
    const passwordInput = document.getElementById('password');
    const passwordConfirmationInput = document.getElementById('passwordConfirmation');
    const signupButton = document.querySelector('button[type="submit"]');
    const form = document.querySelector('form');
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');
  
    // 에러 메시지 요소 추가
    const emailErrorMessage = document.createElement('div');
    emailErrorMessage.classList.add('error-message');
    emailInput.parentNode.appendChild(emailErrorMessage);
  
    const nicknameErrorMessage = document.createElement('div');
    nicknameErrorMessage.classList.add('error-message');
    nicknameInput.parentNode.appendChild(nicknameErrorMessage);
  
    const passwordErrorMessage = document.createElement('div');
    passwordErrorMessage.classList.add('error-message');
    passwordInput.parentNode.parentNode.appendChild(passwordErrorMessage);
  
    const passwordConfirmationErrorMessage = document.createElement('div');
    passwordConfirmationErrorMessage.classList.add('error-message');
    passwordConfirmationInput.parentNode.parentNode.appendChild(passwordConfirmationErrorMessage);
  
    // 유효성 검사 함수
    function validateInputs(showErrors = false) {
      const emailValue = emailInput.value;
      const nicknameValue = nicknameInput.value;
      const passwordValue = passwordInput.value;
      const passwordConfirmationValue = passwordConfirmationInput.value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      let isValid = true;
  
      if (!emailValue) {
        if (showErrors) {
          emailErrorMessage.textContent = '이메일을 입력해주세요.';
          emailErrorMessage.style.display = 'block';
          emailInput.classList.add('input-error');
        }
        isValid = false;
      } else if (!emailRegex.test(emailValue)) {
        if (showErrors) {
          emailErrorMessage.textContent = '잘못된 이메일 형식입니다.';
          emailErrorMessage.style.display = 'block';
          emailInput.classList.add('input-error');
        }
        isValid = false;
      } else {
        emailErrorMessage.textContent = '';
        emailErrorMessage.style.display = 'none';
        emailInput.classList.remove('input-error');
      }
  
      if (!nicknameValue) {
        if (showErrors) {
          nicknameErrorMessage.textContent = '닉네임을 입력해주세요.';
          nicknameErrorMessage.style.display = 'block';
          nicknameInput.classList.add('input-error');
        }
        isValid = false;
      } else {
        nicknameErrorMessage.textContent = '';
        nicknameErrorMessage.style.display = 'none';
        nicknameInput.classList.remove('input-error');
      }
  
      if (!passwordValue) {
        if (showErrors) {
          passwordErrorMessage.textContent = '비밀번호를 입력해주세요.';
          passwordErrorMessage.style.display = 'block';
          passwordInput.classList.add('input-error');
        }
        isValid = false;
      } else if (passwordValue.length < 8) {
        if (showErrors) {
          passwordErrorMessage.textContent = '비밀번호를 8자 이상 입력해주세요.';
          passwordErrorMessage.style.display = 'block';
          passwordInput.classList.add('input-error');
        }
        isValid = false;
      } else {
        passwordErrorMessage.textContent = '';
        passwordErrorMessage.style.display = 'none';
        passwordInput.classList.remove('input-error');
      }
  
      if (passwordValue !== passwordConfirmationValue) {
        if (showErrors) {
          passwordConfirmationErrorMessage.textContent = '비밀번호가 일치하지 않습니다.';
          passwordConfirmationErrorMessage.style.display = 'block';
          passwordConfirmationInput.classList.add('input-error');
        }
        isValid = false;
      } else {
        passwordConfirmationErrorMessage.textContent = '';
        passwordConfirmationErrorMessage.style.display = 'none';
        passwordConfirmationInput.classList.remove('input-error');
      }
  
      signupButton.disabled = !isValid;
      return isValid;
    }
  
    // 입력 필드 이벤트 리스너 추가
    emailInput.addEventListener('focusout', () => validateInputs(true));
    nicknameInput.addEventListener('focusout', () => validateInputs(true));
    passwordInput.addEventListener('focusout', () => validateInputs(true));
    passwordConfirmationInput.addEventListener('focusout', () => validateInputs(true));
    emailInput.addEventListener('input', () => validateInputs(false));
    nicknameInput.addEventListener('input', () => validateInputs(false));
    passwordInput.addEventListener('input', () => validateInputs(false));
    passwordConfirmationInput.addEventListener('input', () => validateInputs(false));
  
    // 페이지 로드 시 초기 상태 설정
    validateInputs(false);
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // 기본 폼 제출 동작 방지
      if (validateInputs(true)) {
        window.location.href = '../signin.html'; // 유효성 검사를 통과하면 ../signin.html로 이동
      }
    });
  
    // 비밀번호 표시/숨김 기능 추가
    togglePasswordButtons.forEach(button => {
      button.addEventListener('click', function () {
        const input = this.previousElementSibling;
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        // 아이콘 변경
        const icon = type === 'password' ? 'images/icons/eye-invisible.svg' : 'images/icons/eye-visible.svg';
        this.setAttribute('src', icon);
      });
    });
  });
  