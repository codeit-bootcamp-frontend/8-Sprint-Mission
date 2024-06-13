export let passwordToggleBtns = document.querySelectorAll('.password-toggle-button');

export function passwordToggle(e) {
  let button = e.currentTarget;
  let passwordInput = button.parentElement.querySelector('input[name="password"]');
  let toggleIcon = document.createElement('i');
  toggleIcon.classList.add('icon');
  if (passwordInput.type == "password") {
    passwordInput.type = "text";
    toggleIcon.classList.remove('ic_visible_on');
    toggleIcon.classList.add('ic_visible_off')
    this.setAttribute("aria-label", "비밀번호 숨기기");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.remove('ic_visible_off');
    toggleIcon.classList.add('ic_visible_on');
    this.setAttribute("aria-label", "비밀번호 보기");
  }
  button.innerHTML = '';
  button.appendChild(toggleIcon);
}
