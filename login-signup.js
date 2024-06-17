const $input = document.getElementsByClassName('input');
const $email = document.getElementById('email');
const $name = document.getElementById('name');
const $password = document.getElementById('password');
const $checkPassword = document.getElementById('checkPassword');
const $loginBtn = document.getElementsByClassName('login-btn');
const $form = document.getElementsByClassName('form');
const $signup = document.getElementsByClassName('signup');
const $login = document.getElementsByClassName('login');
const $loginForm = document.getElementById('loginForm');
const $conditionMessage = document.querySelectorAll('.condition-message');
const $passwordEye = document.getElementById('passwordEye');
const $checkPasswordEye = document.getElementById('checkPasswordEye');
const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const pass = [false, false, false, false];

// 인풋 입력값있는지 체크
function inputCheck(e) {
  const $target = e.target;
  const $errorMesaage = $target.nextElementSibling;
  if ($target.value === '') {
    $target.classList.add('error2');
    $errorMesaage.classList.add('waring');
  } else {
    $target.classList.remove('error2');
    $errorMesaage.classList.remove('waring');
  }
}

// 이메일 정규식 체크
function emailCheck() {
  if ($email.value === '') {
    $conditionMessage[0].classList.remove('waring');
    $input[0].classList.remove('error');
  } else if (!pattern.test($email.value)) {
    $conditionMessage[0].classList.add('waring');
    $input[0].classList.add('error');
  } else {
    $conditionMessage[0].classList.remove('waring');
    $input[0].classList.remove('error');
  }
}

// 비밀번호 8글자 이상인지 체크
function passwordCheck(e) {
  if (e.target.id === 'password') {
    const $target = e.target;
    const $Message = $target.nextElementSibling.nextElementSibling;
    if ($target.value.length < 8 && $target.value.length > 0) {
      $Message.classList.add('waring');
      $target.classList.add('error');
    } else {
      $Message.classList.remove('waring');
      $target.classList.remove('error');
    }
  }
}
// 비밀번호 재확인 체크
function ReCheckPassword() {
  if ($password.value !== $checkPassword.value) {
    $conditionMessage[2].classList.add('waring');
    $input[3].classList.add('error');
  } else {
    $conditionMessage[2].classList.remove('waring');
    $input[3].classList.remove('error');
  }
}

// 조건 충족했는지 체크
function meetsCondition() {
  for (let i = 0; i < $input.length; i++) {
    if ($input[i].value !== '') {
      if ($input[i].classList.contains('error') || $input[i].classList.contains('error2')) {
        pass.splice(i, 1, false);
      } else {
        pass.splice(i, 1, true);
      }
    }
  }
}

// 모든 조건을 충족했는지 체크 후 충족했다면 버튼 활성화
function meetAallConditions() {
  if ($input.length === 2) {
    const loginPass = pass.slice(0, 2);
    if (loginPass.every((value) => value === true)) {
      $loginBtn[0].classList.add('accept');
    } else {
      $loginBtn[0].classList.remove('accept');
    }
  } else if (pass.every((value) => value === true)) {
    $loginBtn[0].classList.add('accept');
  } else {
    $loginBtn[0].classList.remove('accept');
  }
}

// 포커스 아웃 시에 함수들을 실행하여 조건 확인
$loginForm.addEventListener('focusout', (e) => {
  emailCheck();
  passwordCheck(e);
  if ($input.length === 4) {
    ReCheckPassword();
  }
  inputCheck(e);
  meetsCondition();
  meetAallConditions();
});

// 모든 조건 만족 시 submit 하여 페이지 이동
$loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  meetsCondition();
  meetAallConditions();
  if ($loginBtn[0].classList.contains('accept')) {
    if ($input.length === 2) {
      window.location.href = '/items';
    } else {
      window.location.href = '/signin';
    }
  }
});

// 패스워드 눈알 아이콘 클릭 시 패스워드 보임/숨김 변경
$passwordEye.addEventListener('click', () => {
  if ($password.type === 'text') {
    $password.type = 'password';
    $passwordEye.src = 'image/icon/btn_icon/visibilty_off.png';
  } else {
    $password.type = 'text';
    $passwordEye.src = 'image/icon/btn_icon/visibilty_on.png';
  }
});
$checkPasswordEye.addEventListener('click', () => {
  if ($checkPassword.type === 'text') {
    $checkPassword.type = 'password';
    $checkPasswordEye.src = 'image/icon/btn_icon/visibilty_off.png';
  } else {
    $checkPassword.type = 'text';
    $checkPasswordEye.src = 'image/icon/btn_icon/visibilty_on.png';
  }
});
