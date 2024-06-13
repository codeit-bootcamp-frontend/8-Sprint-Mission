const goOtherPage = (src) => {
    location.href = src;
};

const handleFormTag = (id, src) => {
    const formTag = document.getElementById(`${id}-form`);
    formTag.addEventListener('submit', (event) => {
        event.preventDefault();
        goOtherPage(src);
    });
};

export default handleFormTag;