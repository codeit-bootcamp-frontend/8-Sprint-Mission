import { checkValid } from "./checkValid.js";

export function validButton(button, inputs) {

  const isAllInputValid = [...input].every(input => checkValid(input));
  
  if(isAllInputValid){
    button.classList.add('enabled')
    button.disabled = false;
    console.log(button.disabled);
  }else{
    button.classList.remove('enabled')
    button.disabled = true;
    console.log(button.disabled);
  }
} 