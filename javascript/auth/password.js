// constants
const PATH_SLASHED_EYE_IMAGE = '../../assets/images/auth/visibility-off.png';
const PATH_OPEN_EYE_IMAGE = '../../assets/images/auth/visibility-on.png';

// elements
const passwordVisiblityIcons = document.querySelectorAll(
  '.password-visibility-icon'
);

// input control functions
/**
 * 눈 모양 아이콘을 클릭 시, 비밀번호 숨김/보기 처리를 하는 함수
 *
 * @param {*} event event object
 */
const handleEyeClick = (event) => {
  const eye = event.currentTarget;
  const image = event.target;
  const input = event.currentTarget.previousElementSibling;

  if (eye.classList.contains('visible')) {
    eye.classList.remove('visible');
    image.setAttribute('src', PATH_SLASHED_EYE_IMAGE);
    input.setAttribute('type', 'password');
    return;
  }

  eye.classList.add('visible');
  image.setAttribute('src', PATH_OPEN_EYE_IMAGE);
  input.setAttribute('type', 'text');
};

// add event listener
for (let passwordVisiblityIcon of passwordVisiblityIcons) {
  passwordVisiblityIcon.addEventListener('click', handleEyeClick);
}
