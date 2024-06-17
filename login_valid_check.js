// 아이디 입력창
const inputEmail = document.querySelector('#signup-email'); 
const blankMessage = document.querySelector('.blank-message'); 
const invalidMessage = document.querySelector('.invalid-message');
const check = document.querySelector('.check');

// 비밀번호 입력창
const inputPassword = document.querySelector('#signup-pw');
const longerMessage = document.querySelector('.longer-message'); 
const blankMessage3 = document.querySelector('.blank-message3');

//유효성 검사 함수

function pwLength(value) {
    return value.length >= 8;
  }

function isEmail(value) {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  if (pattern.test(value) === false) { 
    return false; 
  } else { return true; }
}

function emailCheck () {
  if (inputEmail.value.length == 0) {
    blankMessage.classList.remove('hide');
  } else if (isEmail(inputEmail.value) === false) {
    // 유효한 이메일 형식이 아닐 경우
        invalidMessage.classList.remove('hide'); 
        blankMessage.classList.add('hide'); 
      }
      // 조건을 모두 만족할 경우
      else {
        invalidMessage.classList.add('hide'); 
        blankMessage.classList.add('hide'); 
      }
};

function pwCheck() {
  // 값을 입력하지 않은 경우
  if (inputPassword.value.length == 0) {
    longerMessage.classList.remove('hide');
    blankMessage3.classList.add('hide'); 
    } else if (pwLength(inputPassword.value) === false) {
    // 8자 이상이 아닐 경우
        longerMessage.classList.remove('hide');
        blankMessage3.classList.add('hide'); 
      }
      // 조건을 모두 만족할 경우
      else {
        longerMessage.classList.add('hide'); 
        blankMessage3.classList.add('hide'); 
      }
  }

  inputEmail.addEventListener("focusout", emailCheck);
  inputPassword.addEventListener("focusout", pwCheck);


  const inputValue = document.querySelector('input');
  const signupButton = document.querySelector('.login-btn');
  const errorMessage = document.querySelectorAll('.error');

  //입력값을 모두 채웠을 때 + 에러메지시가 뜨지 않을 때 버튼 활성화
  function activeButton() {
    if (inputValue.value.length !== 0 && errorMessage.classList.contains('hide') ) {
      signupButton.classList.add('.button-active');
    } else {
      signupButton.classList.add('.button-active');
    }
  }