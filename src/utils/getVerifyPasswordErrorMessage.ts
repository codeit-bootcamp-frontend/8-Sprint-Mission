function getVerifyPasswordErrorMessage(password: string, verifyPassword: string) {
    if(password !== verifyPassword) return "비밀번호가 일치하지 않습니다.";

    return '';
}

export default getVerifyPasswordErrorMessage;