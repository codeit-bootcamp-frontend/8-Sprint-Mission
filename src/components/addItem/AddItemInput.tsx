import { styled } from "styled-components";
interface AddItemInputProps {
  type: string;
  name: string;
  value: string | string[] | number;
  onChange: (name: string, value: string) => void;
  placeholder: string;
}

const Input = styled.input`
  display: inline-box;
  width: 100%;
  height: 56px;
  border: none;
  border-radius: 12px;
  padding-left: 16px;
  background-color: #f3f4f6;
  color: #1f2937;

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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange(name, value);
  };
  return (
    <Input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default AddItemInput;
