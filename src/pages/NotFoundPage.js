// src/pages/NotFound/NotFoundPage.js
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
  text-align: center;
`;

const NotFoundTitle = styled.h1`
  font-size: 6rem;
  color: #ff0000;
`;

const NotFoundMessage = styled.p`
  font-size: 1.5rem;
  color: #333;
`;

const HomeLink = styled(Link)`
  margin-top: 20px;
  font-size: 1.2rem;
  color: #0066cc;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundMessage>Page Not Found</NotFoundMessage>
      <HomeLink to="/">Go to Home</HomeLink>
    </NotFoundWrapper>
  );
};

export default NotFoundPage;
