import { useState } from "react";

import usePasswordVisibility from "lib/hooks/usePasswordVisibility";
import useValidate, { InputValue } from "lib/hooks/useValidate";
import BtnLarge from "core/buttons/BtnLarge";

import { Container, ErrorMessage, Form, Input, InputWrapper, Label, Icon } from "../styles";

const INITIAL_VALUE = {
    email: '',
    nickname: '',
    password: '',
    passwordConfirm: '',
}

const SignUpForm = () => {
    const [value, setValue] = useState<InputValue>(INITIAL_VALUE);
    const {ref:passwordRef,icon:passwordIcon, handlePasswordVisibility:handlePasswordView} = usePasswordVisibility();
    const {ref:passwordConfirmRef, icon:passwordConfirmIcon, handlePasswordVisibility:handlePasswordConfirmView} = usePasswordVisibility();

    const {errorMessage, isValidate} = useValidate({mode: "signup", value});

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        
        switch (target.name) {
            case 'email':
                setValue((prev) => ({
                    ...prev,
                    email: target.value,
                }))
                break;
            case 'nickname':
                setValue((prev) => ({
                    ...prev,
                    nickname: target.value,
                }))
                break;
            case 'password':
                setValue((prev) => ({
                    ...prev,
                    password: target.value,
                }))
                break;
            case 'passwordConfirm':
                setValue((prev) => ({
                    ...prev,
                    passwordConfirm: target.value,
                }))
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e:React.MouseEvent<HTMLFormElement, MouseEvent>) => {
        e.preventDefault();
        if (isValidate) {

        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Container>
                <Label htmlFor="email">이메일</Label>
                <Input type="email" name="email" value={value.email} onChange={handleChange} id="email" placeholder="이메일을 입력해주세요"/>
                <ErrorMessage>{errorMessage.email}</ErrorMessage>
            </Container>
            <Container>
                <Label htmlFor="nickname">닉네임</Label>
                <Input type="nickname" name="nickname" value={value.nickname} onChange={handleChange} id="nickname" placeholder="닉네임을 입력해주세요"/>
                <ErrorMessage>{errorMessage.nickname}</ErrorMessage>
            </Container>
            <Container>
                <Label htmlFor="password">비밀번호</Label>
                <InputWrapper>
                    <Input ref={passwordRef} type="password" id="password" value={value.password} onChange={handleChange} name="password" placeholder="비밀번호를 입력해주세요"/>
                    <Icon src={passwordIcon} onClick={handlePasswordView}/>
                </InputWrapper>
                <ErrorMessage>{errorMessage.password}</ErrorMessage>
            </Container>
            <Container>
                <Label htmlFor="password-confirm">비밀번호 확인</Label>
                <InputWrapper>
                    <Input ref={passwordConfirmRef} type="password" id="passwordConfirm" value={value.passwordConfirm} onChange={handleChange} name="passwordConfirm" placeholder="비밀번호를 다시 한 번 입력해주세요"/>
                    <Icon src={passwordConfirmIcon} onClick={handlePasswordConfirmView}/>
                </InputWrapper>
                <ErrorMessage>{errorMessage.passwordConfirm}</ErrorMessage>
            </Container>
            <BtnLarge bgColor={isValidate ?  'var(--main-color)':'var(--gray-400)' } color={'var(--font-button)'} disabled={!isValidate} >회원가입</BtnLarge>
        </Form>
    );
}

export default SignUpForm;
