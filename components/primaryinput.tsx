import styled from "styled-components";

interface InputType {
  id: string;
  name: string;
  type: string;
  placeholder: string;
}

export default function PrimaryInput({
  id,
  name,
  type,
  placeholder,
}: InputType) {
  return <Input id={id} name={name} type={type} placeholder={placeholder} />;
}

const Input = styled.input`
  width: 100%;
  border-radius: 12px;
  padding: 16px 24px;
  background-color: #f3f4f6;
  color: #9ca3af;
  font-size: 16px;
  font-weight: 400;
  border: none;
`;
