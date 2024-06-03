const passwordVisibilityIcons = document.querySelectorAll('.password-visibility-icon');

function toggleVisibility (e) {
    e.target.classList.toggle('visible');
    
    const isVisible = e.target.classList.contains('visible');
    const inputField = e.target.previousElementSibling;
    
    if (isVisible) {
        e.target.setAttribute('src', '../imgs/EyeIcon.png');
        inputField.setAttribute('type', 'text');
        return;
    }

    e.target.setAttribute('src', '../imgs/EyeIconSlashed.png');
    inputField.setAttribute('type', 'password');
}

for (let each of passwordVisibilityIcons) {
    each.addEventListener('click', toggleVisibility);
}

// ------------------------------------------------

const inputs = document.querySelectorAll('input');
const btn = document.querySelector('.doit');
const form = document.querySelector('form');

function filledInputCheck() {
    const hiddenPlaceholders = document.querySelectorAll('input:not(:placeholder-shown)');
    
    if (hiddenPlaceholders.length == inputs.length) {
        btn.style.backgroundColor = '#3692ff';
        return;
    }

    btn.style.backgroundColor = '#9ca3af';
}

form.addEventListener('keyup', filledInputCheck);