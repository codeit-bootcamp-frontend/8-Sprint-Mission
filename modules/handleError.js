import { isValidEmail, isValidNickname, isValidPassword, isValidPasswordConfirm } from './validations.js';

const handleErrorMessage = (inputType, errorType) => {
    let errorMessage = '';
    switch (errorType) {
        case 'empty':
            errorMessage = `${inputType}을 입력해주세요.`;
            break;
            
        case 'less length':
            errorMessage = `비밀번호를 8자 이상 입력해주세요.`;
            break;
            
        case 'invalid':
            errorMessage = `잘못된 이메일 형식입니다.`;
            break;
            
        case 'differ':
            errorMessage = `비밀번호가 일치하지 않습니다.`;
            break;
    }
    return errorMessage;
};


const handleType = (inputType) => {
    switch (inputType) {
        case '이메일':
            return ['email', isValidEmail];
        case '닉네임':
            return ['nickname', isValidNickname];
        case '비밀번호':
            return ['password', isValidPassword];
        case '비밀번호 확인':
            return ['password-confirm', isValidPasswordConfirm];
    }
}

const camelization = (typeText) => {
    return typeText
        .split('-')
        .map(
            (word, index) => index===0 ? word : word[0].toUpperCase()+word.slice(1))
        .join('');
}


const handleError = ({
    inputType, 
    handleBtn, 
    validation,
    password=undefined, 
}) => {
    const [changedInputType, isValid] = handleType(inputType);
    const inputTag = document.getElementById(changedInputType);
    const errorTag = document.getElementById(`${changedInputType}-error-message`);

    const handleFocusOutEvent = (event) => {
        const validate = isValid(event.target.value);
        
        if (password){
            password.setContent(`${camelization(changedInputType)}Content`, event.target.value);
        }
        if (validate.isvalid) {
            validation.setValid(changedInputType, true);
            event.target.style.border = '0.1rem solid var(--blue)';
            errorTag.style.visibility = 'hidden';
            errorTag.textContent = '';
        } else {
            validation.setValid(changedInputType, false);
            const errorMessage = handleErrorMessage(inputType, validate.message);
            event.target.style.border = '0.1rem solid red';
            errorTag.style.visibility='visible';
            errorTag.textContent = errorMessage;
        }
        if (password && password.passwordConfirmContent!== ''){
            const validate = isValidPasswordConfirm(password.passwordContent, password.passwordConfirmContent);
            const passwordConfirmTag = document.getElementById("password-confirm");
            const passwordConfirmErrorTag = document.getElementById("password-confirm-error-message");
            if (validate.isvalid) {
                validation.setValid("passwordConfirm", true);
                passwordConfirmTag.style.border = "0.1rem solid var(--blue)";
                passwordConfirmErrorTag.style.visibility = "hidden";
                passwordConfirmErrorTag.textContent = '';
            } else {
                const errorMessage = handleErrorMessage("비밀번호 확인", validate.message);
                validation.setValid("passwordConfirm", false);
                passwordConfirmTag.style.border = '0.1rem solid red';
                passwordConfirmErrorTag.style.visibility='visible';
                passwordConfirmErrorTag.textContent = errorMessage;
            }
        }
        handleBtn();
    }

    const handleFocusInEvent = (event) => {
        event.target.style.border = '0.1rem solid var(--blue)';
        errorTag.style.visibility = 'hidden';
        errorTag.textContent = '';
    }


    inputTag.addEventListener('focusout', handleFocusOutEvent);
    inputTag.addEventListener('focusin', handleFocusInEvent);

    return ;
}

export default handleError;