import React from "react";
import styled from "styled-components";
import notFoundImg from "../assets/images/notfound.png";

function NotFound() {
  return <StyledImg src={notFoundImg}></StyledImg>;
}

export default NotFound;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;
