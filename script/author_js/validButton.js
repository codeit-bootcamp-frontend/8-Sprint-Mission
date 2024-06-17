import { checkValid } from "./checkValid";

export function validButton(button, inputs) {

  let number = 0;

  for(let input of inputs){
    if(checkValid(valid)){
      number++;
    }
  }
  if(number === inputs.length){
    button.classList.add('enabled')
    button.disabled = false;
    console.log(button.disabled);
  }else{
    button.classList.remove('enabled')
    button.disabled = true;
    console.log(button.disabled);
  }
} 