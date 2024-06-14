import { btnLink } from "./stdLib.js";
import { loginPage, itemsPage } from "./constLib.js";

const loginBtn = document.querySelector('.login-button');
const itemsBtn = document.querySelector('.items-button');

loginBtn.addEventListener('click', () => { btnLink(loginPage) });
itemsBtn.addEventListener('click', () => { btnLink(itemsPage) });