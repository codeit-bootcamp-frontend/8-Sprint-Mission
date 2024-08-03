import React, { ChangeEvent, FocusEvent, SetStateAction, useEffect, useState } from "react";
import { SignupFormProps, SignupFormType } from "../DTO/SignupFormType";
import getEmailErrorMessage from "../utils/getEmailErrorMessage";
import getPasswordErrorMessage from "../utils/getPasswordErrorMesssage";
import getNicknameErrorMessage from "../utils/getNicknameErrorMessage";
import getVerifyPasswordErrorMessage from "../utils/getVerifyPasswordErrorMessage";

interface ErrorMessages {
    emailError: string;
    nicknameError: string;
    passwordError: string;
    verifyPasswordError: string;
}

const INPUT_ERROR_PAIR: {
    [index: string]: string;
} = {
    [SignupFormProps.email]: "emailError",
    [SignupFormProps.nickname]: "nicknameError",
    [SignupFormProps.password]: "passwordError",
    [SignupFormProps.verifyPassword]: "verifyPasswordError",
}

// verifyPassword 오류 메세지는 useEffect로 따로 나타내기 때문에 여기서 정의되지 않습니다.
const INPUT_GET_ERROR_MESSAGE_PAIR: {
    [index: string]: (...args: string[]) => string;
} = {
    [SignupFormProps.email]: getEmailErrorMessage,
    [SignupFormProps.nickname]: getNicknameErrorMessage,
    [SignupFormProps.password]: getPasswordErrorMessage,
}

const INITIAL_ERROR_MESSAGES: ErrorMessages = {
    emailError: '',
    nicknameError: '',
    passwordError: '',
    verifyPasswordError: '',
}

function useLoginFormChange(formValues: SignupFormType, setFormValues: React.Dispatch<SetStateAction<SignupFormType>>) {
    const [errorMessages, setErrorMessages] = useState<ErrorMessages>(INITIAL_ERROR_MESSAGES);

    const changeErrorMessage = (key: string, value: string) => {
        setErrorMessages(prev => ({
            ...prev,
            [key]: value,
        }))
    }

    const changeFormValue = (key: string, value: string) => {
        setFormValues(prev => ({
            ...prev,
            [key]: value,
        }))
    }

    const handleInputChange = (e: ChangeEvent<HTMLFormElement> | FocusEvent<HTMLFormElement>) => {
        changeFormValue(e.target.name, e.target.value);
        if(e.target.name === SignupFormProps.verifyPassword) return;
        changeErrorMessage(INPUT_ERROR_PAIR[e.target.name], INPUT_GET_ERROR_MESSAGE_PAIR[e.target.name](e.target.value));
    }

    // password와 verifyPassword 값이 변경될때마다 verifyPassword 에러 메세지를 설정합니다.
    useEffect(() => {
        changeErrorMessage(
            INPUT_ERROR_PAIR[SignupFormProps.verifyPassword],
            getVerifyPasswordErrorMessage(formValues.password, (formValues.verifyPassword || ''))
        );
    }, [formValues.password, formValues.verifyPassword])

    return { errorMessages, handleInputChange };
}

export default useLoginFormChange;