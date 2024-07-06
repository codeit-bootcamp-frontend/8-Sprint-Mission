import styled from "styled-components";

const BlueButton = styled.button`
  border: none;
  background-color: var(--brand-blue);
  color: var(--gray-00);
  text-align: center;
  font-weight: 600;

  &:disabled {
    background-color: var(--cool-gray-400);
  }
`;

export default BlueButton;
