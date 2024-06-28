import { useEffect, useState } from "react";
import styled from "styled-components";

function NavButton({ children, nowPath, thisPath }) {
  return (
    <StyledButton $nowPath={nowPath} $thisPath={thisPath}>
      {children}
    </StyledButton>
  );
}

export default NavButton;

const StyledButton = styled.button`
  color: ${({ $nowPath, $thisPath }) =>
    $nowPath === $thisPath ? "var(--blue)" : "var(--gray-600)"};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  padding-left: 39px;
  @media (max-width: 764px) {
    padding: 0;
    font-size: 16px;
  }
`;
