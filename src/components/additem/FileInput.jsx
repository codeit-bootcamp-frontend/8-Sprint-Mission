import { useState } from "react";

import "./FileInput.css";
import imageAddIcon from "../../assets/images/ic_plus.png";

function FileInput({ name, onChange }) {
  const [preview, setPreview] = useState("");

  const handleFileInputChange = (e) => {
    const selectedImg = e.target.files[0];
    const previewImg = URL.createObjectURL(selectedImg);

    onChange(name, selectedImg);
    setPreview(previewImg);
  };

  return (
    <div className="file-input-wrapper">
      <div className="input-label">상품 이미지</div>
      <label className="file-add-label" htmlFor={name}>
        <div className="file-add-wrapper">
          <img
            className="file-add-icon"
            src={imageAddIcon}
            alt="이미지 파일 등록 버튼"
            width="48px"
            height="48px"
          ></img>
          <div className="file-add-text">이미지 등록</div>
        </div>
      </label>

      <input
        className="file-select-button"
        id={name}
        name={name}
        type="file"
        onChange={handleFileInputChange}
      />

      {preview && (
        <img
          className="preview-img"
          src={preview}
          alt="업로드한 이미지 미리보기"
          width="282px"
          height="282px"
        ></img>
      )}
    </div>
  );
}

export default FileInput;
