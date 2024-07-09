import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../layout/Header';
import './Signup.scss';

function Signup() {
  return (
    <>
      <Helmet>
        <title>판다마켓 - 회원가입</title>
      </Helmet>
      <Header />;
    </>
  );
}

export default Signup;
