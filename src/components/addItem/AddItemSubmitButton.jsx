import React from "react";
import styled from "styled-components";

function AddItemSubmitButton({ onSubmit, isValuesFill }) {
  return (
    <StyledButton
      type="button"
      form="add-submit"
      onSubmit={onSubmit}
      $valueCheck={isValuesFill}
    >
      등록
    </StyledButton>
  );
}

export default AddItemSubmitButton;

const StyledButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  background-color: ${({ $valueCheck }) =>
    $valueCheck ? `var(--blue)` : `var(--gray-400)`};
  color: #fff;
  width: 88px;
  height: 42px;
  border-radius: 8px;
`;
