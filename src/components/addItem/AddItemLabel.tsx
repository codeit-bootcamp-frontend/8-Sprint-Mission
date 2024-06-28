import React from "react";
import { styled } from "styled-components";

const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
  line-height: 21.48px;
  color: #1f2937;
`;

interface AddItemLabelProps {
  htmlFor: string;
  children: string | React.ReactNode;
}

const AddItemLabel = ({ htmlFor, children }: AddItemLabelProps) => {
  return <Label htmlFor={htmlFor}>{children}</Label>;
};

export default AddItemLabel;
