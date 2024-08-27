import { useState } from "react";
import { InputProps } from "../@types/Input";
import styles from "./Input.module.css";
import hideIcon from "../../assets/images/hide_icon.png";
import showIcon from "../../assets/images/show_icon.png";

export default function Input({
  label,
  id,
  className,
  name,
  changeValue,
  hideBtn,
  type,
  register,
  rules,
  errorMsg,
  ...props
}: InputProps) {
  const [passwordType, setPasswordType] = useState(type);

  const togglePasswordVisibility = () => {
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  const isPassword = type === "password";

  return (
    <div className={`${className ? className : ""}`}>
      <label className={styles.inputLabel} htmlFor={id}>
        {label}
      </label>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          id={id}
          name={name}
          type={isPassword ? passwordType : type}
          {...props}
          {...(register ? register(name, rules) : {})}
        />
        <div className={styles.visibleIcon} onClick={togglePasswordVisibility}>
          {isPassword && hideBtn ? (
            <img
              src={passwordType === "password" ? hideIcon : showIcon}
              alt="비밀번호 보이기"
            />
          ) : null}
        </div>
      </div>
      {errorMsg && <span className={styles.errorMsg}>{errorMsg}</span>}
    </div>
  );
}
