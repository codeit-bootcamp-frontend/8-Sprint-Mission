import styles from "./CustomInput.module.scss";
import React from "react";
import { DispatchType, RenderDataType } from "custom.t";

type CustomInputProps = {
  data: RenderDataType;
  formData: Record<string, string>;
  validated?: boolean;
  setIsActive: DispatchType<boolean>;
  setIsVisible: DispatchType<Record<string, boolean>>;
  setFormData: DispatchType<Record<string, string>>;
};

const VALIDATION: Record<string, Record<string, string | RegExp>> = {
  email: {
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    error: "잘못 된 이메일 형식입니다.",
  },
  nickname: {
    regex: /^.{2,}$/,
    error: "닉네임은 두 글자 이상입니다.",
  },
  password: {
    regex: /^.{8,}$/,
    error: "비밀번호는 8자리 이상입니다.",
  },
  confirmPassword: {
    regex: /^.{8,}$/,
    error: "일치하지 않거나 잘못 된 비밀번호입니다. 다시 입력 해주세요.",
  },
};

const CustomInput: React.FC<CustomInputProps> = ({
  data,
  formData,
  setIsActive,
  setIsVisible,
  setFormData,
  validated,
}) => {
  const { label, id, type, placeholder, src, autoComplete } = data;

  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const id = (event.target as HTMLElement).dataset.id as string;
    setIsVisible((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value } = target;

    const label = target.parentNode?.previousSibling as HTMLElement;
    const errorMessage = target.nextElementSibling as HTMLElement;

    if (!value) {
      label.style.color = "red";
      target.style.border = "1px solid red";
      setIsActive(false);
      return;
    }

    if (validated) {
      const { id } = target;

      if ((VALIDATION[id].regex as RegExp).test(value)) {
        label.style.color = "green";
        target.style.border = "1px solid rgba(0, 0, 0, 0)";
        errorMessage.textContent = "";
      } else {
        target.value = "";
        errorMessage.textContent = VALIDATION[id].error as string;
        setIsActive(false);
        return;
      }

      if (id === "confirmPassword") {
        const password = formData.password as string;
        if (password !== target.value) {
          target.value = "";
          errorMessage.textContent = VALIDATION[id].error as string;
          setIsActive(false);
        }
      }

      const isFull = Object.values(formData).every((val) => val);
      isFull && setIsActive(true);
    }
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div className={styles.wrap}>
        {id === "password" || id === "confirmPassword" ? (
          <img
            className={styles.icon}
            src={src}
            alt=""
            onClick={handleClick}
            data-id={id}
          />
        ) : (
          ""
        )}
        <input
          className={`${styles.input}`}
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {validated ? <span className={styles.errorMessage}></span> : ""}
      </div>
    </>
  );
};

export default CustomInput;
