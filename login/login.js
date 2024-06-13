// import handleBtnActive from '../modules/handleBtnActive.js';
import handleError from '../modules/handleError.js';
import handleFormTag from '../modules/handleForm.js';
import handlePasswordVisiblity from '../modules/passwordVisibility.js';
import { loginValidationState } from '../modules/state.js';

const validation = new loginValidationState();

handleError({
    inputType:'이메일',
    btnName:'login',
    validation,
});
handleError({
    inputType:'비밀번호',
    btnName:'login',
    validation,
});

handlePasswordVisiblity();

handleFormTag('login','/items');