import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { InputContainer } from "./AddItemInputs";

import addImage from "../../assets/images/ic_addimage.svg";
import xButton from "../../assets/images/ic_imgX.svg";
function AddItemFileInput({ onChange, images, onDelete }) {
  return (
    <>
      <FileInputContainer>
        <div className="input-wrapper">
          <span className="file-input-text">상품 이미지</span>
          <label htmlFor="file-input">
            <div className="add-file"></div>
          </label>
        </div>
        <input
          id="file-input"
          type="file"
          onChange={onChange}
          name="images"
          value=""
        />
        {!images.length ||
          images.map((e, i) => {
            return (
              <div
                className="preview-wrapper"
                key={Date.now() + i * 13}
                onClick={onDelete}
              >
                <img className="previews" src={images[i]} />
                <button
                  type="button"
                  className="xButton"
                  onClick={() => {
                    onDelete(i);
                  }}
                >
                  <img src={xButton} />
                </button>
              </div>
            );
          })}
      </FileInputContainer>
    </>
  );
}

export default AddItemFileInput;

const FileInputContainer = styled(InputContainer)`
  flex-direction: row;
  align-items: flex-end;
  gap: 24px;
  flex-wrap: wrap;
  .input-wrapper {
    display: flex;
    flex-direction: column;
  }
  position: relative;

  .file-input-text {
    padding-bottom: 12px;
  }
  label {
    padding-bottom: 0;
  }
  input {
    display: none;
  }

  .add-file {
    background-color: var(--gray-100);
    width: 282px;
    height: 282px;
    border-radius: 12px;
    cursor: pointer;
    background-image: url(${addImage});
    background-repeat: no-repeat;
    background-position: center;
  }

  .previews {
    width: 282px;
    height: 282px;
    object-fit: cover;
    border-radius: 12px;
  }
  .preview-wrapper {
    position: relative;
    .xButton {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }

  @media (max-width: 764px) {
    .add-file {
      width: 162px;
      height: 162px;
    }
    .previews {
      width: 162px;
      height: 162px;
    }
  }
`;
