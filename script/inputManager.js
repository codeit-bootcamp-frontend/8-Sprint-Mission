import { validButton } from "./author_js/validButton.js";
import { deleteErrorMessage, createErrorMessage } from "./author_js/ErrorMessage.js";

const loginForm = document.querySelector('.login-form');
const inputs = document.querySelectorAll(`.login-form input`);
const button = document.querySelector('.login-form button');

function inputManager(e){
  const target = e.target;

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

function buttonManager(e){
  const target = e.target;
  console.log(target);
}

loginForm.addEventListener('focusout', inputManager);
button.addEventListener('click', buttonManager);