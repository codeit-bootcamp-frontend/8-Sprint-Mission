// 조건이 충족되면 회색 버튼을 파란색으로 보이게 합니다.
// 모든 input에 값이 있고, 모든 input에 errored 클래스가 없을때 작동합니다.
// 조건을 만족하면 버튼에 valid 클래스가 추가돼 파란색이 되고 disabled가 해제됩니다.

import { inputs, btn } from "./constLib.js";
import filledInputCheck from "./filledInputsCheck.js";

export default function btnValidCheck() {

    const isValid = [...inputs].every(e => !e.classList.contains('errored')) && filledInputCheck(); // 모든 input에 errored 클래스가 없다 && 모든 input에 값이 있다

    if (isValid) {
        btn.classList.add('valid');
        btn.disabled = false;
        return;
    }

    btn.classList.remove('valid');
    btn.disabled = true;

}