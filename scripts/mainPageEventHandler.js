import { btnLink } from "./stdLib.js";

const loginBtn = document.querySelector('.login-button');
const itemsBtn = document.querySelector('.items-button');

loginBtn.addEventListener('click', () => { btnLink('/login') });
itemsBtn.addEventListener('click', () => { btnLink('/items') });