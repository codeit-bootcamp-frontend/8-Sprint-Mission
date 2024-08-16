import React from "react";
import styles from "./TextInput.module.scss";
// Props의 타입 정의
interface TextInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
}) => (
  <div className="input-group">
    <label className={styles["input-label"]}>{label}</label>
    <input
      className={styles["input"]}
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

export default TextInput;
