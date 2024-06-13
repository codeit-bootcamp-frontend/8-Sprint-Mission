import { nicknameInput, btn } from "./constLib.js";

const nicknameEmptyMessage = document.querySelector('.nickname-empty');

export default function nicknameEmptyCheck(event) {
    
    if ( !nicknameInput || event.target !== nicknameInput ) return; // 닉네임 란이 없거나 || 닉네임 란에서 발생한 이벤트가 아니라면 return

    nicknameInput.classList.toggle('errored', !nicknameInput.value);
    nicknameInput.classList.toggle('correct', nicknameInput.value);

    nicknameEmptyMessage.classList.toggle('hidden', nicknameInput.value);

}