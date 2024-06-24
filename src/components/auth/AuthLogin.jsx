import { Link } from "react-router-dom";

function AuthLogin() {
  return (
    <>
      <form className="login-form">
        <div className="login-input">
          <label htmlFor="useremail">이메일</label>
          <input
            type="text"
            id="useremail"
            name="useremail"
            placeholder="이메일을 입력해주세요"
          />
        </div>
        <div className="login-input">
          <label htmlFor="password">비밀번호</label>
          <div className="pw-container">
            <input
              className="invisible"
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
            />
            <button type="button" className="toggle-password"></button>
          </div>
        </div>
        <Link to="/items">
          <button className="login-btn submit-btn">로그인</button>
        </Link>
      </form>
    </>
  );
}

export default AuthLogin;
