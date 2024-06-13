const isValidEmail = (inputText) => {
    if (inputText === '') {
        return { isvalid: false, message: "empty" };
    }
    
    const emailRegex = new RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i);
    
    if ( !emailRegex.test(inputText) ){
        return { isvalid: false, message: "invalid" };
    }
    return { isvalid: true, message: "valid" };   
}

const isValidNickname = (inputText) => {
    if (inputText === '') {
        return { isvalid: false, message: "empty" };
    }
    
    return { isvalid: true, message: "valid" };   
}

const isValidPassword = (inputText) => {
    if (!inputText.length) {
        return { isvalid: false, message: "empty" };
    }

    if (inputText.length < 8) {
        return { isvalid: false, message: "less length" };
    }
    return { isvalid: true, message:"valid" };
}

const isValidPasswordConfirm = (inputText, password) => {
    if (inputText !== password) {
        return { isvalid: false, message: "differ" };
    }

    return { isvalid: true, message:"valid" };
}


export { isValidEmail, isValidNickname, isValidPassword, isValidPasswordConfirm }