import { useEffect, useRef, useState } from "react";
import "./FileInput.css";

function FlieInput({ name, value, onChange }) {
  const [preview, setPreview] = useState();
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
      setPreview();
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <div>
      <label className="label" htmlFor="fileinput">
        상품 이미지
      </label>
      <input
        id="fileinput"
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
        ref={inputRef}
      />
      {value ? <button onClick={handleClearClick}>X</button> : null}
      <img className="preview-img" src={preview} alt="이미지 미리보기" />
    </div>
  );
}

export default FlieInput;
