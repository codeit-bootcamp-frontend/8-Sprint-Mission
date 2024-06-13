const isValidEmail = (inputText) => {
    if (inputText === '') {
        return { isvaild: false, message: "empty" };
    }
    
    const emailRegex = new RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i);
    
    if ( !emailRegex.test(inputText) ){
        return { isvaild: false, message: "invalid" };
    }
    return { isvaild: true, message: "vaild" };   
}

const isValidNickname = (inputText) => {
    if (inputText === '') {
        return { isvaild: false, message: "empty" };
    }
    
    return { isvaild: true, message: "vaild" };   
}

const isValidPassword = (inputText) => {
    if (!inputText.length) {
        return { isvaild: false, message: "empty" };
    }

    if (inputText.length < 8) {
        return { isvaild: false, message: "less length" };
    }
    return { isvaild: true, message:"vaild" };
}

const isValidPasswordConfirm = (inputText, password) => {
    if (inputText !== password) {
        return { isvaild: false, message: "differ" };
    }

    return { isvaild: true, message:"vaild" };
}


export { isValidEmail, isValidNickname, isValidPassword, isValidPasswordConfirm }