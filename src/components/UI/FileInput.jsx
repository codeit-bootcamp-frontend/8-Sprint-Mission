import { useState, useRef, useEffect } from "react";
import PlusIcon from "../../assets/ic_plus.svg";
import XIcon from "../../assets/ic_X.svg";

function FileInput({ name, value, onChange }) {
  const [previewImg, setPreviewImg] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const inputRef = useRef(null);

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (e) => {
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

    const nextPreviewImg = URL.createObjectURL(value);
    setPreviewImg(nextPreviewImg);
    setShowPreview(true);

    return () => {
      setPreviewImg(null);
      URL.revokeObjectURL(nextPreviewImg);
      setShowPreview(false);
    };
  }, [value]);

  return (
    <div className="input-file-wrapper">
      <div
        className="input-file"
        onClick={handleButtonClick}
        style={{ cursor: "pointer" }}
      >
        <img className="input-icon" src={PlusIcon} alt="파일 업로드" />
        <p className="input-icon-title">이미지 등록</p>
        <input
          type="file"
          onChange={handleFileChange}
          style={{ display: "none" }}
          ref={inputRef}
          accept="image/png, image/jpeg"
        />
      </div>
      <div>
        {showPreview ? (
          <img
            className="input-preview"
            src={previewImg}
            alt="미리보기 이미지"
          />
        ) : null}
        {value && (
          <button className="input-button" onClick={handleClearClick}>
            <img src={XIcon} alt="버튼 이미지" />
          </button>
        )}
      </div>
    </div>
  );
}

export default FileInput;
