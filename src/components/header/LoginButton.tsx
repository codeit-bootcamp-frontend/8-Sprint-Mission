import './LoginButton.css';

function loginOnClick () {
    window.location.href = "/login";
}

function LoginButton() {
    return (
        <button className="login-button" onClick={loginOnClick}>
            로그인
        </button>
    );
}

export default LoginButton;