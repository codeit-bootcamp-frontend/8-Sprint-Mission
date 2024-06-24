import icGoogle from "../../assets/images/google-icon.png";
import icKakao from "../../assets/images/kakao-icon.png";
function AuthFooter({ isLogin, onClickAuthHandle }) {
  return (
    <>
      <div className="easy-login">
        <span>간편 로그인하기</span>
        <div className="easy-platform">
          <a href="https://www.google.com/">
            <img src={icGoogle} />
          </a>
          <a href="https://www.kakaocorp.com/page/">
            <img src={icKakao} />
          </a>
        </div>
      </div>
      <div className="sign-up">
        {isLogin ? (
          <p>
            판다마켓이 처음이신가요?
            <a onClick={onClickAuthHandle}>회원가입</a>
          </p>
        ) : (
          <p>
            이미 회원이신가요?
            <a onClick={onClickAuthHandle}>로그인</a>
          </p>
        )}
      </div>
    </>
  );
}

export default AuthFooter;
