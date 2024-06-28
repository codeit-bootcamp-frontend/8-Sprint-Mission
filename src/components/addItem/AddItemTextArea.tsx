import { ChangeEvent } from "react";
import { styled } from "styled-components";

const TextArea = styled.textarea`
    width: 100%;
    border-radius: 12px
    background-color: #f3f4f6
    border: none;
    color: 1f2937;
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
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

const AddItemTextArea = ({
  name,
  value,
  onChange,
  placeholder,
}: AddItemTextAreaProps) => {
  return (
    <TextArea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default AddItemTextArea;
