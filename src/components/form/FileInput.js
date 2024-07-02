import { useEffect, useRef, useState } from 'react';
import inputImg from '../../assets/img/product/sample2.png';

function FileInput({ name, value, onChange }) {
  const [preview, setPreview] = useState(value || inputImg);
  const inputRef = useRef();
  const [isBoxVisible, setIsBoxVisible] = useState(null);

  const handleChange = e => {
    const file = e.target.files[0];

    if (file) {
      onChange(name, file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setIsBoxVisible(true);
      };
      reader.readAsDataURL(file);
    } else {
      onChange(name, null);
      setPreview(inputImg);
      setIsBoxVisible(false);
    }
  };

  const handleRemove = () => {
    onChange(name, null);
    setPreview(inputImg);
    setIsBoxVisible(false);
  };

  useEffect(() => {
    if (value) {
      setPreview(URL.createObjectURL(value));
      setIsBoxVisible(true);
    } else {
      setPreview(inputImg);
      setIsBoxVisible(false);
    }
  }, [value]);

  const handleImageError = () => {
    setPreview(inputImg);
  };

  return (
    <div className="image-add-wrap">
      <label className="image-add-btn" aria-label="이미지 등록 버튼">
        <input ref={inputRef} className="sr-only" type="file" onChange={handleChange} accept="image/jpeg,image/png" />
        <i className="ic_plus icon-lg"></i>
        <span>이미지 등록</span>
      </label>
      {isBoxVisible && (
        <div className="image-add-box">
          <img src={preview} alt="상품 이미지" onError={handleImageError} />
          <i className="icon ic_remove" onClick={handleRemove} role="button" aria-label="이미지 제거 버튼"></i>
        </div>
      )}
    </div>
  );
}

export default FileInput;
