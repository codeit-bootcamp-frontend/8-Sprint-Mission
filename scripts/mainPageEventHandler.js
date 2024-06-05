import { btnLink } from "./stdLib.js";

const loginPage = '/login';
const itemsPage = '/items';

const loginBtn = document.querySelector('.login-button');
const itemsBtn = document.querySelector('.items-button');

loginBtn.addEventListener('click', () => { btnLink(loginPage) });
itemsBtn.addEventListener('click', () => { btnLink(itemsPage) });