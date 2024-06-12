const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const btn = document.querySelector('.doit');

const emailInput = document.querySelector('#email');
const nicknameInput = document.querySelector('#nickname');
const passwordInput = document.querySelector('#password');
const verifyPasswordInput = document.querySelector('#verify-password');

const loginPage = '/login';
const itemsPage = '/items';

export { form, inputs, btn, emailInput, nicknameInput, passwordInput, verifyPasswordInput, loginPage, itemsPage };