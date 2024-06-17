import { checkValid } from "./checkValid.js";

export function validButton(button, inputs) {

  const isAllInputValid = [...inputs].every(input => checkValid(input));
  button.classList.toggle('enaled', isAllInputValid)

  console.log(isAllInputValid);
  if(isAllInputValid){
    // button.classList.add('enabled')
    button.disabled = false;
    console.log(button.disabled);
  }else{
    // button.classList.remove('enabled')
    button.disabled = true;
    console.log(button.disabled);
  }
} 