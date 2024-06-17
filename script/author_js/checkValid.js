/* 
유효성 검사 함수 
01. 인풋 타겟을 받는다.
02. 타겟의 유형을 검사한다. (email, password, password-repeat, nickname)
03. 조건에 맞는 함수를 호출한다.
*/

export function checkValid(target) {
  //타겟의 유형을 검사한다.
  
  const type = target.name;
  const value = target.value;
  if(type == 'email'){
    emailValid(value);
  }
  if(type == 'password'){
    passwordValid(value);
  }
  if(type == 'password-repeat'){
    passwordRepeatValid(value);
  }
  if(type == 'nickname'){
    nicknameValid(value);
  }
}

function emailValid(value){
  //이메일 정규 표현식이 맞으면 ture
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}
function passwordValid(value){
// 8글자 이상이면 ture

  return value.length >= 8;

}
function passwordRepeatValid(value){
// password 랑 값이 같으면
  const password = document.querySelector('input[name="password"]');
  return password === value;
}
function nicknameValid(value){
// 값이 있으면
  return value == true;

}