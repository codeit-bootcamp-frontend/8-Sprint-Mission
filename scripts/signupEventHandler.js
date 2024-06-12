// import된 각 함수들을 이벤트에 지정합니다.

import toggleVisibility from "./togglePasswordVisibility.js";
import btnValidCheck from "./buttonValidationCheck.js";
import { form } from "./constLib.js";
import emailValidationCheck from "./emailValidationCheck.js";
import nicknameEmptyCheck from "./nicknameEmptyCheck.js";
import passwordVerifiedCheck from "./passwordVerifiedCheck.js";
import passwordFormatCheck from "./passwordFormatCheck.js";

const passwordVisibilityIcons = document.querySelectorAll('.password-visibility-icon');

// 눈 이미지에 패스워드 가시성 토글 스크립트 지정
for (let each of passwordVisibilityIcons) {
    each.addEventListener('click', toggleVisibility);
}

// 폼에 각 이벤트 지정

function eventFunctionsPackage(e) {

    emailValidationCheck(e);
    nicknameEmptyCheck(e);
    passwordFormatCheck(e);
    passwordVerifiedCheck(e);
    btnValidCheck();
    
}

form.addEventListener('focusout', eventFunctionsPackage);
form.addEventListener('input', eventFunctionsPackage);