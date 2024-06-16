export function deleteErrorMessage(target){
  const hasErrorMessage = target.parentElement.querySelector('.error-message');
  
  if(hasErrorMessage){
    hasErrorMessage.remove();
  }

}

export function createErrorMessage(target){

  const errorMessage = document.createElement('p');
  errorMessage.classList.add('error-message');
  
  if(!target.value){
      noValue(target, errorMessage);
  }else if(!target.checkValidity()){
      notValidity(target, errorMessage);
  }

}

function noValue(target, errorMessage){
  switch(target.type){
    case 'email':
      console.log('switch 문 진입');
      errorMessage.innerText = '이메일을 입력해주세요';
    break;
    case 'password':
      errorMessage.innerText = '비밀번호를 입력해주세요';
      console.log('switch 문 진입');
    break;
  } 
  target.parentElement.appendChild(errorMessage);
}

function notValidity(target, errorMessage){
  switch(target.type){
    case 'email':
      console.log('switch 문 진입');
      errorMessage.innerText = '잘못된 이메일 형식입니다';
    break;
    case 'password':
      errorMessage.innerText = '8자 이상 입력해주세요';
      console.log('switch 문 진입');
    break;
  }
  target.parentElement.appendChild(errorMessage);
}


