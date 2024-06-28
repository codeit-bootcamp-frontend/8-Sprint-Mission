import { styled } from "styled-components";
interface AddItemInputProps {
  type: string;
  name: string;
  value: string | string[] | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input = styled.input`
    width: 100%;
    border-radius: 12px
    background-color: #f3f4f6
    border: none;
    color: 1f2937;
    & placeholder {
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        color: #9ca3af;
    }
    &::-webkit-inner-spin-button {
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
    }
`;

const AddItemInput = ({
  type,
  name,
  value,
  onChange,
  placeholder,
}: AddItemInputProps) => {
  return (
    <Input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default AddItemInput;
