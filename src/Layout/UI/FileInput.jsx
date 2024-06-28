import { useEffect, useRef, useState } from "react";
import "./FileInput.css";
import xbutton from "../../images/icons/ic_X.svg";

function FileInput({ name, value, onChange }) {
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
    <div className="fileInput-container">
      <img src={preview} alt="" className="inputImage" />
      <input
        id="imgFile"
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
        ref={inputRef}
      />
      {value && (
        <button onClick={handleClearClick} className="button">
          <img src={xbutton} alt="취소버튼" />
        </button>
      )}
    </div>
  );
}

export default FileInput;
