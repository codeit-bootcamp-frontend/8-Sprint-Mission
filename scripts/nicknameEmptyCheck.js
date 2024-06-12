import { nicknameInput } from "./constLib.js";

const nicknameEmptyMessage = document.querySelector('.nickname-empty');

export default function nicknameEmptyCheck(event) {
    
    if (event.target !== nicknameInput) return;

    nicknameInput.classList.toggle('errored', !nicknameInput.value);
    nicknameEmptyMessage.classList.toggle('hidden', nicknameInput.value);

}