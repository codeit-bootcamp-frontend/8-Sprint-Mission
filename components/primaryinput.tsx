import { ChangeEventHandler, FocusEventHandler } from "react";
import styled from "styled-components";

interface InputType {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  hasError?: boolean;
}

export default function PrimaryInput({
  id,
  name,
  type,
  placeholder,
  onChange,
  onBlur,
  hasError,
}: InputType) {
  return (
    <Input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      hasError={hasError}
    />
  );
}

const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  border-radius: 12px;
  padding: 16px 24px;
  background-color: #f3f4f6;
  color: #9ca3af;
  font-size: 16px;
  font-weight: 400;
  border: ${({ hasError }) => (hasError ? "1px solid red" : "none")};
`;
