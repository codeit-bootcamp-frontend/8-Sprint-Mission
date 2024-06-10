const loginForm = document.querySelector('.login-form');
const inputs = document.querySelectorAll(`.login-form input`);
const button = document.querySelector('.login-form button');

function checkInput() {

  console.log('이벤트핸들러 진입');

  let number = 0;

  for(let input of inputs){
    console.log('포문진입');
    if(input.value !== '' ){
      console.log('넘버 +1');
      number++
    }
  }

  if(number === inputs.length){
    button.classList.add('enabled')
  }else{
    button.classList.remove('enabled')
  }
 
 
}

loginForm.addEventListener('input', checkInput);

