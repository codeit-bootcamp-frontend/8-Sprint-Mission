import { Helmet } from 'react-helmet';
import Header from '../../layout/Header';
import './Login.scss';

function Login() {
  return (
    <>
      <Helmet>
        <title>판다마켓 - Login</title>
      </Helmet>
      <Header />;
    </>
  );
}

export default Login;
