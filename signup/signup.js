import handleError from '../modules/handleError.js';
import handleFormTag from '../modules/handleForm.js';
import handlePasswordVisiblity from '../modules/passwordVisibility.js';
import { signupValidationState, passwordState } from '../modules/state.js';

const validation = new signupValidationState();
const password = new passwordState();


handleError({
    inputType:'이메일',
    btnName: 'signup',
    validation,
});
handleError({
    inputType:'닉네임',
    btnName: 'signup',
    validation,
});
handleError({
    inputType:'비밀번호',
    btnName: 'signup',
    validation,
    password,
});
handleError({
    inputType:'비밀번호 확인',
    btnName: 'signup',
    validation,
    password,
});

handlePasswordVisiblity();
handlePasswordVisiblity('confirm');

handleFormTag('signup', '../login/login.html');
