import { ChangeEvent, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface Input extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  className: string;
  changeValue: (name: string, value: string) => void;
}

export default function Input({
  label,
  id,
  className,
  changeValue,
  ...props
}: Input) {
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    changeValue(name, value);
  };

  return (
    <div className={`${className ? className : ""}`}>
      <label className={styles.inputLabel} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
        id={id}
        {...props}
        onChange={handleChangeInput}
      />
    </div>
  );
}
