import React from "react";
import styles from "./TextArea.module.scss";

interface TextAreaProps {
  label: string;
  name: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  rows?: number;
}

function TextArea({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows,
}: TextAreaProps) {
  return (
    <div className="input-group">
      <label className={styles["input-label"]}>{label}</label>
      <textarea
        className={styles["textarea"]}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
      ></textarea>
    </div>
  );
}

export default TextArea;
