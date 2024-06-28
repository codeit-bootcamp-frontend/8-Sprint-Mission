import { ChangeEvent } from "react";
import { styled } from "styled-components";

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  border: none;
  border-radius: 12px;
  padding: 12px 0 0 16px;
  background-color: #f3f4f6;
  color: #1f2937;
  resize: none;
  & placeholder {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #9ca3af;
  }
`;

interface AddItemTextAreaProps {
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  placeholder: string;
}

const AddItemTextArea = ({
  name,
  value,
  onChange,
  placeholder,
}: AddItemTextAreaProps) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(name, e.target.value);
  };
  return (
    <TextArea
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default AddItemTextArea;
