import {validButton} from "./author_js/validButton.js";
import {deleteErrorMessage, createErrorMessage} from "./author_js/ErrorMessage.js";
import {checkValid} from "./author_js/checkValid.js";
const loginForm = document.querySelector('.login-form');
const inputs = document.querySelectorAll(`.login-form input`);
const password = [...inputs].find((e)=> e.name === 'password');
const button = document.querySelector('.login-form button');

function inputManager(e){
  const target = e.target;
  console.log("유효성검사 : " + checkValid(target));

  // if(target.id === 'password-repeat'){
    
  //   if(password.value == target.value){
  //   deleteErrorMessage(target);
  //   createErrorMessage(target);
  //   }
  //   if(password.value !== target.value){

  //   }
  // }

  if(!target.value){
    target.classList.add('wrong-value');
    deleteErrorMessage(target);
    createErrorMessage(target);
  }

  if(target.value && !target.checkValidity()){
    target.classList.add('wrong-value');
    deleteErrorMessage(target);
    createErrorMessage(target);
  }

  if(target.checkValidity()){
    target.classList.remove('wrong-value');
    deleteErrorMessage(target);
    validButton(button, inputs);
  }


}



loginForm.addEventListener('focusout', inputManager);
