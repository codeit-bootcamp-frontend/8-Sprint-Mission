function AuthSignUp() {
  return (
    <>
      <form className="signup-form">
        <div className="signup-input">
          <label htmlFor="useremail">이메일</label>
          <input
            type="text"
            id="useremail"
            name="signup-email"
            placeholder="이메일을 입력해주세요"
          />
        </div>

        <div className="signup-input">
          <label htmlFor="nickname">닉네임</label>
          <input
            type="text"
            id="nickname"
            name="signup-nickname"
            placeholder="닉네임을 입력해주세요"
          />
        </div>

        <div className="signup-input">
          <label htmlFor="password">비밀번호</label>
          <div className="pw-container">
            <input
              className="invisible"
              type="password"
              id="password"
              name="signup-password"
              placeholder="비밀번호를 입력해주세요"
            />
            <button type="button" className="toggle-password"></button>
          </div>
        </div>
        <div className="signup-input">
          <label htmlFor="repeat-password">비밀번호 확인</label>
          <div className="pw-container">
            <input
              className="invisible"
              type="password"
              id="repeat-password"
              name="repeat-signup-password"
              placeholder="비밀번호를 다시 한 번 입력해주세요"
            />
            <button type="button" className="toggle-password"></button>
          </div>
        </div>
        <button className="signup-btn submit-btn">회원가입</button>
      </form>
    </>
  );
}

export default AuthSignUp;
