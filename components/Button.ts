import styled from "styled-components";

const StyledCommonButton = styled.button`
  height: 42px;
  padding: 12px 20px;
  border-radius: 8px;
  margin: auto 0;
  border: none;
  color: var(--gray-50);
  background-color: var(--blue-100);
  cursor: pointer;
  text-align: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;

  &:disabled {
    background-color: var(--gray-400);
    cursor: auto;
  }
`;

export default StyledCommonButton;
