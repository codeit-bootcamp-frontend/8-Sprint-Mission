import { Link } from 'react-router-dom';

import kakaoIcon from '../../core/assets/icons/sns/kakao/kakao.svg';
import googleIcon from '../../core/assets/icons/sns/google/google.svg';
import styled from 'styled-components';

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

const OAuthLoginContainer = styled.div`
    display: flex;
    background-color: #e6f2ff;
    border-radius: 0.8rem;
    padding: 0.8rem 3.2rem ;
    justify-content: space-between;
    align-items: center;
`;

const OAuthIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;
`;

const OAuthIcon = styled.img`
    cursor: pointer;
    width: 4.4rem;
    height: 4.4rem;
`;

const ToggleSign = styled.div`
    text-align: center;
`;

interface OAuthProps {
    isLogin: boolean;
}

const OAuth = ({isLogin}:OAuthProps) => {
    return (
        <Article>
            <OAuthLoginContainer>
                <p>간편 로그인하기</p>
                <OAuthIcons>
                    <a href="https://www.google.com/"><OAuthIcon src={googleIcon} alt="구글 아이콘"/></a>
                    <a href="https://www.kakaocorp.com/page/"><OAuthIcon src={kakaoIcon} alt="카카오 아이콘"/></a>
                </OAuthIcons>
            </OAuthLoginContainer>
            <ToggleSign>
                <p>{isLogin ? '판다마켓이 처음이신가요?' : '이미 회원이신가요?'} <Link to={isLogin?'/signUp':'/signIn'}>{isLogin?'회원가입':'로그인'}</Link></p>
            </ToggleSign>
        </Article>
    );
}

export default OAuth;
