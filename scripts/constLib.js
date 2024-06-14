const form = document.querySelector('.pseudo-form');
const inputs = document.querySelectorAll('input');
const btn = document.querySelector('.action-button');

const emailInput = document.querySelector('#email');
const nicknameInput = document.querySelector('#nickname');
const passwordInput = document.querySelector('#password');
const verifyPasswordInput = document.querySelector('#verify-password');

const loginPage = '/login';
const itemsPage = '/items';

const loginButtonLink = '/items';
const signupButtonLink = '/signup';

export { form, inputs, btn, emailInput, nicknameInput, passwordInput, verifyPasswordInput, loginPage, itemsPage, loginButtonLink, signupButtonLink };