const emailInput = document.getElementById("email");
const nicknameInput = document.getElementById("nickname");
const passwordInput = document.getElementById("password");
const checkPasswordInput = document.getElementById("password-check");

const loginValidationResults = {
    email: false,
    password: false
};
const signupValidationResults = {
    email: false,
    nickname : false,
    password: false,
    passwordCheck : false
};

// 에러 메시지 요소 생성 함수
function createErrorMessageElement(id, message){
    const errorElement = document.createElement('span');
    errorElement.id = id;
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    return errorElement;
}

// 유효성 검사 실패시, 빨간색 박스 표시 함수
function errorDisplay(input, message) {
    input.style.border = "1px solid #F74747";
    let errorElement = document.getElementById(input.id + '-error');
    if (!errorElement) {
        errorElement = createErrorMessageElement(input.id + '-error', message);
        input.insertAdjacentElement('afterend', errorElement);
    } else {
        errorElement.textContent = message;
    }
    errorElement.style.display = "block";
}

// 상태 초기화 함수
function errorReset(input) {
    input.style.border = "none";
    const errorElement = document.getElementById(input.id + '-error');
    if (errorElement) {
        errorElement.style.display = "none";
    }
}

// 이메일 형식을 검사하는 함수 (간단한 예시)
function emailValidationText(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// 이메일 검사 함수
function checkEmailValidation(){
    const isEmail = emailInput.value.trim();

    if (!isEmail) {
        errorDisplay(emailInput, '이메일을 입력해주세요.');
        return false;
    } else if (!emailValidationText(isEmail)) {
        errorDisplay(emailInput, '잘못된 이메일 형식입니다.');
        return false;
    } else {
        errorReset(emailInput);
        return true;
    }
}

//비밀번호 확인 함수
function checkPasswordValidation(checkPasswordInput){

    const passwordInput = document.getElementById("password");
    const isPassword = passwordInput.value.trim();
    const minLength  = 8;

    if (!isPassword) {
        errorDisplay(passwordInput, '비밀번호를 입력해주세요.');
        checkPasswordInput.disabled = true;
        return false;
    } else if (isPassword.length < minLength) {
        errorDisplay(passwordInput, '비밀번호를 8자 이상 입력해주세요.');
        checkPasswordInput.disabled = true;
        return false;
    } else {
        errorReset(passwordInput);
        checkPasswordInput.disabled = false;
        return true;
    }
}

function checkPasswordInputValidation(){

    const passwordInput = document.getElementById("password");
    const isPassword = passwordInput.value.trim();
    const minLength  = 8;

    if (!isPassword) {
        errorDisplay(passwordInput, '비밀번호를 입력해주세요.');
        return false;
    }
    else if (isPassword.length < minLength) {
        errorDisplay(passwordInput, '비밀번호를 8자 이상 입력해주세요.');
        return false;
    }
    else {
        errorReset(passwordInput);
        return true;
    }
}


// 비밀번호 일치 검사 함수
function checkPasswordMatch(){
    const isPassword = passwordInput.value.trim();
    const isCheckPassword = checkPasswordInput.value.trim();

    if (!isPassword || !isCheckPassword) {
        errorDisplay(passwordInput, "비밀번호를 입력해주세요.");
        errorDisplay(checkPasswordInput, "비밀번호 확인을 입력해주세요.");
        return false;
    }
    else if (isPassword !== isCheckPassword) {
        errorDisplay(checkPasswordInput, "비밀번호가 일치하지 않습니다.");
        return false;
    }
    else {
        errorReset(passwordInput);
        errorReset(checkPasswordInput);
        return true;
    }
}

// 닉네임 검사 함수
function checkNicknameValidation(){
    const isNickname = nicknameInput.value.trim();
    if (!isNickname) {
        errorDisplay(nicknameInput, '닉네임을 입력해주세요.');
        return false;
    }
    else {
        errorReset(nicknameInput);
        return true;
    }
}

// 비밀번호 보이기 활성화 함수( 눈모양 이미지를 클릭 시, 비밀번호가 보이고, 다시 누르면 비밀번호가 보이지 않도록 )
function togglePasswordVisibility(idInput, togglebtn){
    const passwordField = document.getElementById(idInput);
    const toggleButton = document.getElementById(togglebtn);
    const toggleIcon = toggleButton.querySelector("img");

    if(passwordField.type === "password"){
        passwordField.type = "text";
        toggleIcon.src = "/images/icons/visible.svg";
        toggleButton.alt = "비밀번호 보이기";
    }
    else{
        passwordField.type = "password";
        toggleIcon.src = "/images/icons/invisible.svg";
        toggleButton.alt = "비밀번호 숨기기";
    }
}

// 버튼 활성화 함수( 모든 값이 들어있을 경우에 버튼 활성화, 아닐땐 비활성화 )
function toggleSubmitButton() {
    const submitButton = document.getElementById("submit-button");
    const loginAllValid = Object.values(loginValidationResults).every(value => value === true);
    const signUpAllValid = Object.values(signupValidationResults).every(value => value === true);

    if (loginAllValid) {
        submitButton.removeAttribute("disabled");
    }
    else if(signUpAllValid){
        submitButton.removeAttribute("disabled");
    }
    else {
        submitButton.setAttribute("disabled", "disabled");
    }
}

