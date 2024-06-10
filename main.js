const authForm = document.querySelector('.auth_form');
const formEl = document.querySelector('.auth_form form');
const authInputs = document.querySelectorAll(".auth_input");
const button = document.querySelector(".submit-button");
console.dir(authForm);
authForm.addEventListener('focusout', focusoutAuthInput)

function focusoutAuthInput(e) {
	console.dir(e.target)
	const input = e.target;
	if (!input.classList.contains('auth_input'))
		return;
	if (input.id === 'login-id')
		validEmail(input);
	else if (input.id === 'login-password')
		validPassword(input);
	toggleButton();
}

function toggleButton() {

	const hasNotInvalid = [...authInputs].every((input) => input.checkValidity());
	if (hasNotInvalid)
		button.classList.add('active');
	else 
		button.classList.remove('active');
}

function validPassword(input) {
	console.dir(input.validity)
	input.nextElementSibling?.remove();

	if (input.checkValidity())
		return input.classList.remove('input-invalid');
	const span = document.createElement('span');
	if (input.validity.valueMissing)
		span.textContent = '비밀번호를 입력해주세요';
	else if (input.validity.tooShort)
		span.textContent = '비밀번호를 8자 이상 입력해주세요';
	span.style.color = '#f74747'
	input.after(span);
	input.classList.add('input-invalid');
}

function validEmail(input) {
	input.nextElementSibling?.remove();

	if (input.checkValidity())
		return input.classList.remove('input-invalid');
	const span = document.createElement('span');
	if (input.validity.valueMissing)
		span.textContent = '이메일을 입력해주세요';
	else if (input.validity.typeMismatch)
		span.textContent = '잘못된 이메일 형식입니다';
	span.style.color = '#f74747'
	input.after(span);
	input.classList.add('input-invalid');
}