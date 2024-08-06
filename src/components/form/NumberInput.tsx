import React, { ChangeEvent } from "react";

// Props 타입 정의
interface NumberInputProps {
  label: string;
  name: string;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void; // 타입 정의 수정
  placeholder?: string;
}

const NumberInput: React.FC<NumberInputProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
}) => (
  <div className="input-group">
    <label>{label}</label>
    <input
      type="number"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

export default NumberInput;
