import React from "react";
import styled from "styled-components";

function AddItemSubmitButton({ onSubmit }) {
  return (
    <Button type="button" form="add-submit" onSubmit={onSubmit}>
      등록
    </Button>
  );
}

export default AddItemSubmitButton;

const Button = styled.button`
  font-size: 16px;
  font-weight: 600;
  background-color: var(--gray-400);
  color: #fff;
  width: 88px;
  height: 42px;
  border-radius: 8px;
`;
