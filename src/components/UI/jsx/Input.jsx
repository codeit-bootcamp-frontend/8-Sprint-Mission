import React, { useEffect } from "react";
import "@components/UI/scss/Input.scss";

function Input({
  type = "text",
  id,
  name,
  dataInput,
  placeholder = "",
  required = false,
  onChange,
  onKeyDown,
}) {
  return (
    <>
      <input
        className="input"
        type={type}
        id={id}
        name={name}
        data-input={dataInput}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </>
  );
}

export default Input;
