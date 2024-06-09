// import된 각 함수들을 이벤트에 지정합니다.

import toggleVisibility from "./togglePasswordVisibility.js";
import btnValidCheck from "./buttonValidationCheck.js";

const passwordVisibilityIcons = document.querySelectorAll('.password-visibility-icon');
const form = document.querySelector('form');

// 눈 이미지에 패스워드 가시성 토글 스크립트 지정
for (let each of passwordVisibilityIcons) {
    each.addEventListener('click', toggleVisibility);
}

// 폼 전체에 버튼 동작 가부 체크 스크립트 지정
form.addEventListener('keyup', btnValidCheck);