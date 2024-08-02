import Header from 'components/auth/Header';
import OAuth from 'components/auth/OAuth';
import SignInForm from 'components/auth/signIn/SignInForm';
import SignUpForm from 'components/auth/signUp/SignUpForm';

import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


interface AuthProps {
    isLogin: boolean;
}

const Auth = ({isLogin}:AuthProps) => {
    return (
        <>
            <Header />
            <Main>
                {
                    isLogin? (
                        <SignInForm />
                    ):(
                        <SignUpForm />
                    )
                }
                <OAuth isLogin={isLogin}/>
            </Main>
        </>
    );
}

export default Auth;
