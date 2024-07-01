import React from "react";
import styled from "styled-components";
import "josa-complete";

function AddItemInputs({ label, name, value, onChange, onKeyDown }) {
  const josa = `${label.을를}`;
  return (
    <>
      {name !== "description" ? (
        <InputContainer>
          <label htmlFor={`additem-${name}`}>{label}</label>
          <input
            id={`additem-${name}`}
            placeholder={`${josa} 입력해주세요`}
            name={name}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
          ></input>
        </InputContainer>
      ) : (
        <InputContainer>
          <label htmlFor={`additem-${name}`}>{label}</label>
          <textarea
            id={`additem-${name}`}
            placeholder={`${josa} 입력해주세요`}
            name={name}
            value={value}
            onChange={onChange}
          ></textarea>
        </InputContainer>
      )}
    </>
  );
}

export default AddItemInputs;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
  width: 100%;
  label {
    padding-bottom: 12px;
  }
  input,
  textarea {
    background-color: var(--gray-100);
    border-radius: 12px;
    padding: 16px 24px;
    font-size: 16px;
    font-weight: 400;
    &:focus {
      outline: var(--blue) solid 1px;
    }
    &::placeholder {
      color: var(--gray-400);
    }
  }

  input {
    height: 58px;
  }
  textarea {
    height: 200px;
    border: none;
    resize: none;
  }
`;
