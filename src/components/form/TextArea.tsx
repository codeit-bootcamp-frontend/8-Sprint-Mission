import React, { ChangeEvent } from "react";

// Props 타입 정의
interface TextAreaProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows,
}) => (
  <div className="input-group">
    <label>{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
    ></textarea>
  </div>
);

export default TextArea;
