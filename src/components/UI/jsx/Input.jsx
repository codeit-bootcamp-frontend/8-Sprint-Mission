import React, { useEffect } from 'react';
import '@components/UI/scss/Input.scss';

function Input({
  type = 'text',
  id,
  name,
  placeholder = '',
  required = false,
  onChange,
  ...props
}) {
  return (
    <>
      <input
        className="input"
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        {...props}
      />
    </>
  );
}

export default Input;
