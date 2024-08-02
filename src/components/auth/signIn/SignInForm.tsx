import visibilityIcon from '../../../core/assets/icons/visibility/visibility.svg';
import disvisibilityIcon from '../../../core/assets/icons/visibility/visibility.svg';
import { styled } from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import BtnLarge from 'core/buttons/BtnLarge';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    margin-bottom: 2rem;
    @media (375px <= width < 768px) {
        max-width: 40rem;
        width: 100%;
    }
`;

const Label = styled.label`
    display: block;
    font-weight: 700;
    font-size: 1.8rem;
    color: var(--gray-800);
    line-height: 2.148rem;
`;

const InputWrapper = styled.div`
    position: relative;
`;

const Input = styled.input`
    width:100%;
    color: var(--gray-400);
    background-color: var(--gray-100);
    font-weight: 400;
    line-height: 2.4rem;
    height: 5.6rem;
    border-radius: 1.2rem;
    border: none;
    padding-left: 2.4rem;
    :focus {
        border: var(--blue);
    }
`;

const Icon = styled.img`
    width: 2.4rem;
    height: 2.4rem;
    position: absolute;
    right: 1.6rem;
    bottom: 1.6rem;
    margin: auto 0.2rem;
    cursor: pointer;
`;

const ErrorMessage = styled.p`
    visibility: hidden;
    margin: 0 0 0 1.6rem;
    color: var(--error-red);
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.79rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

type Visibility = 'password' | 'text';

const SignInForm = () => {
    const [isValid, setIsValid] = useState<boolean>(false);
    const [visibility, setVisibility] = useState<Visibility>('password');
    const navigate = useNavigate();
    const emailErrorMessage = '';
    const passwordErrorMessage = '';

    const handleSubmit = (e:React.MouseEvent<HTMLFormElement, MouseEvent>) => {
        e.preventDefault();
        navigate('/items');
    }
    const handlePasswordVisibility = () => {
        setVisibility((prev) => prev === 'password' ? 'text' : 'password'); 
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
