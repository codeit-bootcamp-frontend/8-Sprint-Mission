import styled from "styled-components";

const GrayBgInput = styled.input`
  background-color: var(--cool-gray-100);
  color: var(--cool-gray-400);
  border: none;

  &:focus {
    border: solid 2px var(--cool-gray-400);
    outline: none;
  }

  &::placeholder {
    color: var(--cool-gray-400);
  }
`;

export default GrayBgInput;
