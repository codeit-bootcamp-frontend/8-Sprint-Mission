import React from 'react';

const TextArea = ({ label, name, value, onChange, placeholder, rows }) => (
  <div className="input-group">
    <label>{label}</label>
    <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} rows={rows}></textarea>
  </div>
);

export default TextArea;
