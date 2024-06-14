const handleBtnActive = (btnName, validation) => {
    const btn = document.getElementById(`${btnName}-btn`);
    if ( validation.isValid() ) {
        btn.style.backgroundColor = 'var(--blue)';
        btn.disabled = false;
    } else {
        btn.style.backgroundColor = 'var(--gray-400)';
        btn.disabled = true;
    }
};

export default handleBtnActive;