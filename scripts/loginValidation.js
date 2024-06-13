const emailInput = document.getElementById("email");
const nicknameInput = document.getElementById("nickname");
const passwordInput = document.getElementById("password");

// 유효성 검사 실패시, 빨간색 박스 표시 함수
function errorDisplay(input, selectid){
    const idElement = document.getElementById(selectid);
    idElement.style.display = "block";
    input.style.border = "1px solid #F74747";
}

// 상태 초기화 함수
function errorReset(input, selectid){
    const idElement = document.getElementById(selectid);
    idElement.style.display = "none";
    input.style.border = "none";
}

// 이메일 유효성 검사 함수
function emailValidationText(email){
    const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    return pattern.test(email);
}

// 이메일 검사 함수
function checkEmailValidation(){
    const isEmail = emailInput.value.trim();
    if(!isEmail){

    }
    else if(!emailValidationText(isEmail)){

    }
    else{

    }
}

// 비밀번호 검사 함수
function checkPasswordValidation(){
    const isPassword = passwordInput.value.trim();
    const minLength  = 8;
    if(!isPassword){

    }
    else if(isPassword.Length >= 8){

    }
    else{

    }
}

// 닉네임 검사 함수
function checkNicknameValidation(){
    const isNickname = nicknameInput.value.trim();
    if(!isNickname){

    }
    else{

    }
}

// 버튼 활성화 함수( 모든 값이 들어있을 경우에 버튼 활성화, 아닐땐 비활성화 )

// 비밀번호 보이기 활성화 함수( 눈모양 이미지를 클릭 시, 비밀번호가 보이고, 다시 누르면 비밀번호가 보이지 않도록 )