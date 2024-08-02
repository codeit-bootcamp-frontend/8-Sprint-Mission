function isCorrectEmailFormat(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function getEmailErrorMessage(email: string) {
    if(!email) return "이메일을 입력해주세요."
    else if(!isCorrectEmailFormat(email)) return "잘못된 이메일 형식입니다."
    return '';
}

export default getEmailErrorMessage;