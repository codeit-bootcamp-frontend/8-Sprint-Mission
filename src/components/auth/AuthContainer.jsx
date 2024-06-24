import AuthLogin from "./AuthLogin";
import AuthSignUp from "./AuthSignUp";
import AuthFooter from "./AuthFooter";

function AuthContainer({ isLogin, onClickAuthHandle }) {
  return (
    <main className="login-container">
      {isLogin ? <AuthLogin /> : <AuthSignUp />}
      <AuthFooter isLogin={isLogin} onClickAuthHandle={onClickAuthHandle} />
    </main>
  );
}

export default AuthContainer;
