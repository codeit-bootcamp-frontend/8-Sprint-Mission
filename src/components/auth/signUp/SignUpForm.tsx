import { useState } from "react";

import usePasswordVisibility from "lib/hooks/usePasswordVisibility";
import BtnLarge from "core/buttons/BtnLarge";

import { Container, ErrorMessage, Form, Input, InputWrapper, Label, Icon } from "../styles";
import visibilityIcon from '../../../core/assets/icons/visibility/visibility.svg';
import disvisibilityIcon from '../../../core/assets/icons/visibility/visibility.svg';

const SignUpForm = () => {
    const [isValid, setIsValid] = useState<boolean>(false);
    const {visibility:passwordView, handlePasswordVisibility:handlePasswordView} = usePasswordVisibility();
    const {visibility:passwordConfirmView, handlePasswordVisibility:handlePasswordConfirmView} = usePasswordVisibility();
    const handleSubmit = (e:React.MouseEvent<HTMLFormElement, MouseEvent>) => {
        e.preventDefault();
    }
    const errorMessage = {
        email: '',
        nickname: '',
        password: '',
        passwordConfirm: '',
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Container>
                <Label htmlFor="email">이메일</Label>
                <Input type="email" name="email" id="email" placeholder="이메일을 입력해주세요"/>
                <ErrorMessage>{errorMessage.email}</ErrorMessage>
            </Container>
            <Container>
                <Label htmlFor="nickname">닉네임</Label>
                <Input type="nickname" name="nickname" id="nickname" placeholder="닉네임을 입력해주세요"/>
                <ErrorMessage>{errorMessage.nickname}</ErrorMessage>
            </Container>
            <Container>
                <Label htmlFor="password">비밀번호</Label>
                <InputWrapper>
                    <Input type="password" id="password" name="password" placeholder="비밀번호를 입력해주세요"/>
                    <Icon src={passwordView==='password' ? visibilityIcon : disvisibilityIcon} onClick={handlePasswordView}/>
                </InputWrapper>
                <ErrorMessage>{errorMessage.password}</ErrorMessage>
            </Container>
            <Container>
                <Label htmlFor="password-confirm">비밀번호 확인</Label>
                <InputWrapper>
                    <Input type="password" id="password-confirm" name="password-confirm" placeholder="비밀번호를 다시 한 번 입력해주세요"/>
                    <Icon src={passwordConfirmView==='password' ? visibilityIcon : disvisibilityIcon} onClick={handlePasswordConfirmView}/>
                </InputWrapper>
                <ErrorMessage>{errorMessage.passwordConfirm}</ErrorMessage>
            </Container>
            <BtnLarge bgColor={'var(--gray-400)'} color={'var(--font-button)'} disabled={!isValid} >회원가입</BtnLarge>
        </Form>
    );
}

export default SignUpForm;
