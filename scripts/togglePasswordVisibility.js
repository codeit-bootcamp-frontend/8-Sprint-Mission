// 패스워드 란의 눈 아이콘을 토글합니다.
// 클릭 이벤트로 호출해 사용합니다.

export default function toggleVisibility (e) {
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