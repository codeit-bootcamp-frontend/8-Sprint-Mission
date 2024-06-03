const eyes = document.querySelectorAll('.eye-icon');

for (let eye of eyes) {
    eye.onclick = function() {
        eye.classList.toggle('on');
        if (eye.classList.length === 2) {
            eye.setAttribute('src', '../imgs/EyeIcon.png');
            eye.previousElementSibling.setAttribute('type', 'text');
        }
        else {
            eye.setAttribute('src', '../imgs/EyeIconSlashed.png');
            eye.previousElementSibling.setAttribute('type', 'password');
        }
    }
}