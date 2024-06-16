export function validButton(button, inputs) {

  console.log('이벤트핸들러 진입');

  let number = 0;

  for(let input of inputs){
    console.log('포문진입');
    if(input.checkValidity()){
      console.log('넘버 +1');
      number++
    }
  }

  if(number === inputs.length){
    button.classList.add('enabled')
    button.disabled = true;
    console.log(button.disabled);
  }else{
    button.classList.remove('enabled')
    button.disabled = false;
    console.log(button.disabled);
  }
}