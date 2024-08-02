function getPasswordErrorMessage(password: string) {
    if(!password) return "비밀번호를 입력해주세요."
    else if(password.length < 8) return "비밀번호를 8자 이상 입력해주세요."
    return '';
}

export default getPasswordErrorMessage;