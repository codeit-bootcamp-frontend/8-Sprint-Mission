const handlePasswordVisiblity = (tagName='') => {
    const visibleTag = document.getElementById(tagName?`${tagName}-visibility`:'visibility');
    const passwordTag = document.getElementById(tagName?'password-confirm':'password');
    
    visibleTag.addEventListener('click', (event) => {
        event.target.classList.toggle("active");

        if (event.target.classList.contains("active")) {
            passwordTag.type = 'text';
        } else {
            passwordTag.type = 'password';
        }
    });
}
export default handlePasswordVisiblity;