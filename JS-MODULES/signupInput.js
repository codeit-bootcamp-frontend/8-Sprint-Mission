
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nicknameInput = document.getElementById('nickname');
const passwordCheckInput = document.getElementById('password-check');

const signupButton = document.querySelector('.signup-button');


// 올바른 이메일 형식
function validateEmail(input) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(input.value.trim());
}

// 올바른 패스워드 형식
function validatePassword(input) {
    return input.value.trim().length >= 8;
}

// 올바른 닉네임 형식 (닉네임이 1글자 이상이상 입력됐는지?)
function validateNickname(input) {
    return input.value.trim().length >= 1;
}

//로그인 버튼 기본 비활성화
signupButton.disabled = true;

// 버튼 비활성화, 활성화 체크
function validateButton() {
    if (validateEmail(emailInput) && validatePassword(passwordInput) && validateNickname(nicknameInput) && passwordInput.value.trim() == passwordCheckInput.value.trim()) {
        signupButton.disabled = false;
    }
    else {
        signupButton.disabled = true;
    }
}


// 에러메세지 출력 함수
function InputShowError(input, message) {

    // input요소의 바로 다음 형제요소 선택 (다음 Element가 있으면 다음, element를 없으면 null을 반환)
    let errorElement = input.nextElementSibling;

    // 이미 형제 요소가 있거나, error-message 포함하고 있을시 제거
    if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.remove();
    }

    input.style.border = '2px solid red';

    // 새로운 span 요소를 생성하고, 클래스 error-message를 추가
    errorElement = document.createElement('span');
    errorElement.classList.add('error-message');

    // span 요소에 에러 메시지 텍스트를 설정
    errorElement.textContent = message;
    // 생성된 span 요소를 input 요소 바로 뒤에 삽입
    input.insertAdjacentElement('afterend', errorElement);
    applyErrorStyles(errorElement);
}

// 정상적인 Input 형식일 때
function InputClearError(input) {
    let errorElement = input.nextElementSibling;
    if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.remove();
    }
    input.style.border = '';
}


// 포커스를 잃을 때 이벤트 
emailInput.addEventListener('focusout', function () {

    if (!emailInput.value.trim()) {
        InputShowError(emailInput, '이메일을 입력해주세요.');
    } else if (!validateEmail(emailInput)) {
        InputShowError(emailInput, '잘못된 이메일 형식입니다.');
    } else {
        InputClearError(emailInput);
    }
    validateButton();
});

passwordInput.addEventListener('focusout', function () {
    if (!passwordInput.value.trim()) {
        InputShowError(passwordInput, '비밀번호를 입력해주세요.');
    } else if (!validatePassword(passwordInput)) {
        InputShowError(passwordInput, '비밀번호를 8자 이상 입력해주세요.');
    } else {
        InputClearError(passwordInput);
    }
    validateButton();
});

nicknameInput.addEventListener('focusout', function () {

    if (!nicknameInput.value.trim()) {
        InputShowError(nicknameInput, '닉네임을 입력해주세요.')
    }
    else {
        InputClearError(nicknameInput);
    }
    validateButton();
})

passwordCheckInput.addEventListener('focusout', function () {

    if (passwordCheckInput.value.trim() != passwordInput.value.trim()) {
        InputShowError(passwordCheckInput, '비밀번호가 일치하지 않습니다.')
    }
    else {
        InputClearError(passwordCheckInput);
    }
    validateButton();
})

function applyErrorStyles(errorElement) {
    errorElement.style.color = 'red';
    errorElement.style.fontSize = '16px';
    errorElement.style.marginTop = '4px';
}

