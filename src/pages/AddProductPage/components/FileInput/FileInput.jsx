import React, { useEffect, useRef, useState } from "react";
import "./FileInput.css";
import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function FileInput({ name, value, onChange }) {
  const [preview, setPreview] = useState();
  const inputRef = useRef();
  const handleFileChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };
  const handleDeletePreviewImg = () => {
    onChange(name, null);
  };
  useEffect(() => {
    if (!value) return;

    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview();
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <>
      <span>상품 이미지</span>
      <div className="product-input-img-box">
        <label className="product-file-label" htmlFor="product-img">
          <FaPlus />
          <span>이미지 등록</span>
        </label>
        <input
          id="product-img"
          type="file"
          onChange={handleFileChange}
          ref={inputRef}
        />
        {value && (
          <div className="file-preview-box">
            <img className="file-preview-img" src={preview} alt="img preview" />
            <button
              onClick={handleDeletePreviewImg}
              type="button"
              className="preview-img-delete-icon"
            >
              <IoClose />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default FileInput;
