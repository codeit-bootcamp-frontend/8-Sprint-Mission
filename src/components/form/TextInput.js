import React from 'react';

const TextInput = ({ label, name, value, onChange, placeholder }) => (
  <div className="input-group">
    <label>{label}</label>
    <input type="text" name={name} value={value} onChange={onChange} placeholder={placeholder} />
  </div>
);

export default TextInput;
