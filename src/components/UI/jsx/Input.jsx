import React, { useEffect } from "react";
import "../scss/Input.scss";

function Input({
  type = "text",
  id,
  name,
  dataInput,
  placeholder = "",
  required = false,
  onChange,
}) {
  return (
    <>
      {type === "textarea" ? (
        <textarea
          className="input input--large"
          id={id}
          name={name}
          data-input={dataInput}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
        />
      ) : (
        <input
          className="input"
          type={type}
          id={id}
          name={name}
          data-input={dataInput}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
        />
      )}
    </>
  );
}

export default Input;
