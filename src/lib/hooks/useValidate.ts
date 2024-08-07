import { useEffect, useState } from "react";

type ValidateMode = 'login' | 'signup';

export type InputValue = {
    email: string;
    password: string;
    nickname?: string;
    passwordConfirm?: string;
}

interface UseValidateProps {
    mode: ValidateMode;
    value: InputValue;
}

const INITIAL_ERROR_MESSAGE = {
    email: '',
    password: '',
    nickname: '',
    passwordConfirm: '',
}

const useValidate = ({mode, value}:UseValidateProps) => {
    const [isValidate, setIsValidate] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<InputValue>(INITIAL_ERROR_MESSAGE);
    const emailRegex = new RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i);

    const handleEmailValidation = () => {
        if (value.email === '') {
            setErrorMessage((prev) => ({
                ...prev,
                email: '이메일을 입력해주세요.',
            }));
        } else if (!emailRegex.test(value.email)) {
            setErrorMessage((prev) => ({
                ...prev,
                email: '이메일을 입력해주세요.',
            }));
        } else {
            setErrorMessage((prev) => ({
                ...prev,
                email: '',
            }));
        }
    }
    const handleNicknameValidation = () => {
        if (value.email === '') {
            setErrorMessage((prev) => ({
                ...prev,
                nickname: '닉네임을 입력해주세요.',
            }));
        } else {
            setErrorMessage((prev) => ({
                ...prev,
                nickname: '',
            }));
        }
    }
    const handlePasswordValidation = () => {
        if (value.password === '') {
            setErrorMessage((prev) => ({
                ...prev,
                password: '비밀번호를 입력해주세요.',
            }));
        }  else if (value.password.length < 8) {
            setErrorMessage((prev) => ({
                ...prev,
                password: '비밀번호를 8자 이상 입력해주세요.',
            }));
        } else {
            setErrorMessage((prev) => ({
                ...prev,
                password: '',
            }));
        }
    }
    const handlePasswordConfirmValidation = () => {
        if (value.passwordConfirm !== value.passwordConfirm){
            setErrorMessage((prev) => ({
                ...prev,
                passwordConfirm: '비밀번호가 일치하지 않습니다.',
            }));
        }
    }

    useEffect(() => {
        setIsValidate(false);
        switch (mode) {
            case 'login':
                handleEmailValidation();
                handlePasswordValidation();
                if (errorMessage.email !== '' && errorMessage.password !== ''){
                    setIsValidate(true);
                }
                break;
            case 'signup':
                handleEmailValidation();
                handleNicknameValidation();
                handlePasswordValidation();
                handlePasswordConfirmValidation();
                if (
                    errorMessage.email !== ''
                    && errorMessage.nickname !== ''
                    && errorMessage.password !== ''
                    && errorMessage.passwordConfirm!== ''
                ){ 
                    setIsValidate(true);
                }
                break;
            default:
                setIsValidate(false);
                break;
        }    
    }, [value]);
        
    return {errorMessage, isValidate};
}

export default useValidate;