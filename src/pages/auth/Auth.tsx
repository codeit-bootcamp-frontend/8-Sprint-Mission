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

const Article = styled.article`
    width: 64rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    @media (375px <= width < 768px) {
        max-width: 40rem;
        width: 100%;
    }
`;

interface AuthProps {
    isLogin: boolean;
}

const Auth = ({isLogin}:AuthProps) => {
    return (
        <>
            <Header />
            <Main>
                <Article>

                {
                    isLogin? (
                        <SignInForm />
                    ):(
                        <SignUpForm />
                    )
                }
                <OAuth isLogin={isLogin}/>
                </Article>
            </Main>
        </>
    );
}

export default Auth;
