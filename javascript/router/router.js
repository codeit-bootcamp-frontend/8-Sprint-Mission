import { moveLocation } from '../utils/location.js';

const moveToHomes = document.querySelectorAll('.move-to-home');
const moveToLogins = document.querySelectorAll('.move-to-login');
const moveToItems = document.querySelectorAll('.move-to-items');

for (let el of moveToHomes) {
  el.addEventListener('click', () => moveLocation('/'));
}

for (let el of moveToLogins) {
  el.addEventListener('click', () => moveLocation('/pages/login'));
}

for (let el of moveToItems) {
  el.addEventListener('click', () => moveLocation('/pages/items'));
}
