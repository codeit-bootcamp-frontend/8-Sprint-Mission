import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import usePasswordVisibility from 'lib/hooks/usePasswordVisibility';

import BtnLarge from 'core/buttons/BtnLarge';

import visibilityIcon from '../../../core/assets/icons/visibility/visibility.svg';
import disvisibilityIcon from '../../../core/assets/icons/visibility/visibility.svg';
import { Container, ErrorMessage, Form, Icon, Input, InputWrapper, Label } from '../styles';

const SignInForm = () => {
    const {visibility, handlePasswordVisibility} = usePasswordVisibility();
    const navigate = useNavigate();
    const [isValid, setIsValid] = useState<boolean>(false);
    const emailErrorMessage = '';
    const passwordErrorMessage = '';

    const handleSubmit = (e:React.MouseEvent<HTMLFormElement, MouseEvent>) => {
        e.preventDefault();
        navigate('/items');
    }
    
    return (
        <Form onSubmit={handleSubmit}>
            <Container>
                <Label htmlFor="email">이메일</Label>
                <Input type="email" id="email" name="email" placeholder="이메일을 입력해주세요"/>
                <ErrorMessage>{emailErrorMessage}</ErrorMessage>
            </Container>
            <Container>
                <Label htmlFor="password">비밀번호</Label>
                <InputWrapper>
                    <Input type={visibility} id="password" name="password" placeholder="비밀번호를 입력해주세요"/>
                    <Icon src={visibility==='password' ? visibilityIcon : disvisibilityIcon} onClick={handlePasswordVisibility}/>
                </InputWrapper>
                <ErrorMessage>{passwordErrorMessage}</ErrorMessage>
            </Container>
            <BtnLarge bgColor={'var(--gray-400)'} color={'var(--font-button)'} disabled={!isValid}>로그인</BtnLarge>
        </Form>
    );
}

export default SignInForm;
