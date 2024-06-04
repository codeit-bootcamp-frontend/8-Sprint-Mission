// 조건이 충족되면 회색 버튼을 파란색으로 보이게 합니다.
// 조건은 validChecklist에 배열로 각 함수값들을 저장해 확인합니다.
// validChecklist의 원소들이 모두 true라면 버튼을 파란색으로 만듭니다.
// 버튼 작동 조건을 최종적으로 확인하는 스크립트이기 때문에 버튼이 동작하는데 필요한 요건들을 확인하는 함수들은 모두 여기에서 실행합니다.

const btn = document.querySelector('.doit');

import filledInputCheck from "./filledInputsCheck.js";
import passwordVerifiedCheck from "./passwordVerifiedCheck.js";

export default function btnValidCheck() {
    const validChecklist = [filledInputCheck(), passwordVerifiedCheck()]; // 함수가 호출될때마다 배열 안의 함수들을 실행합니다.

    validChecklist.every((e) => e === true)
    ? btn.classList.add('valid')
    : btn.classList.remove('valid');
}