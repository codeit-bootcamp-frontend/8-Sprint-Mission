import React, { useEffect } from "react";
import "@components/UI/scss/TextArea.scss";

function Input({
  type = "textarea",
  id,
  name,
  dataInput,
  placeholder = "",
  required = false,
  onChange,
}) {
  return (
    <>
      <textarea
        className="textarea"
        id={id}
        name={name}
        data-input={dataInput}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </>
  );
}

export default Input;
