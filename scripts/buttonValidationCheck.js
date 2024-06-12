// 조건이 충족되면 회색 버튼을 파란색으로 보이게 합니다.
// 모든 input에 값이 있고, 모든 input에 errored 클래스가 없을때 작동합니다.
// validChecklist의 원소들이 모두 true라면 버튼을 파란색으로 만듭니다.

import { inputs, btn } from "./constLib.js";
import filledInputCheck from "./filledInputsCheck.js";

export default function btnValidCheck() {

    const isValid = [...inputs].every(e => !e.classList.contains('errored'));

    btn.classList.toggle('valid', filledInputCheck() && isValid);
}