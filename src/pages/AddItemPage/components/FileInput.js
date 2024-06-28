import { useEffect, useRef, useState } from "react";
import registerImg from "../../../assets/images/icons/ic_register.png";
import resetImg from "../../../assets/images/icons/ic_reset.png";
import "./FileInput.css";

function FileInput({ className = "", name, value, initialPreview, onChange }) {
  const [preview, setPreview] = useState(initialPreview);
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview(initialPreview);
      URL.revokeObjectURL(nextPreview);
    };
  }, [value, initialPreview]);

  return (
    <div className={`FileInput ${className}`}>
      <div className="FileInput-input-wrapper">
        <input
          className="FileInput-hidden-overlay"
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleChange}
          ref={inputRef}
        />
        <img
          className="FileInput-register-icon"
          src={registerImg}
          alt="이미지 등록"
        />
      </div>
      <div className="Fileinput-preview-wrapper">
        <img
          className="FileInput-preview"
          src={preview}
          alt="이미지 미리보기"
        />
        {value && (
          <button className="FileInput-clear-button" onClick={handleClearClick}>
            <img src={resetImg} alt="선택해제" />
          </button>
        )}
      </div>
    </div>
  );
}

export default FileInput;
