import React from 'react';

const NumberInput = ({ label, name, value, onChange, placeholder }) => (
  <div className="input-group">
    <label>{label}</label>
    <input type="number" name={name} value={value} onChange={onChange} placeholder={placeholder} />
  </div>
);

export default NumberInput;
