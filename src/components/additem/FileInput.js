import { useEffect, useState } from "react";

import "./FileInput.css";
import imageAddIcon from "../../assets/images/ic_plus.png";

function FileInput({ name, value, onChange }) {
  const [preview, setPreview] = useState();

  const handleChange = (e) => {
    const selectedImg = e.target.files[0];
    onChange(name, selectedImg);
  };

  useEffect(() => {
    if (!value) return;

    const imgPreview = URL.createObjectURL(value);
    setPreview(imgPreview);
  }, [value]);

  return (
    <div className="file-input-wrapper">
      <div className="input-label">상품 이미지</div>
      <label className="file-add-label" htmlFor="file">
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
        id="file"
        type="file"
        name="file"
        onChange={handleChange}
      />

      {value && (
        <img
          className="preview-img"
          src={preview}
          alt="업로드한 이미지 미리보기"
        ></img>
      )}
    </div>
  );
}

export default FileInput;
