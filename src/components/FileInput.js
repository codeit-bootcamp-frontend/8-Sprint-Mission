import { useEffect, useRef, useState } from 'react';
import inputImg from '../assets/img/product/sample2.png';

function FileInput({ name, value, onChange }) {
  const [preview, setPreview] = useState(value || inputImg);
  const inputRef = useRef();

  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const handleChange = e => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);

    if (nextValue) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setIsBoxVisible(true); // 이미지가 선택되면 박스를 보이게 설정
      };
      reader.readAsDataURL(nextValue);
    } else {
      setPreview(inputImg); // 파일 선택이 취소될 경우 기본 이미지로 초기화
      setIsBoxVisible(false); // 이미지 박스 숨기기
    }
  };

  const handleRemove = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;
    onChange(name, null); // Remove the image
    setPreview(inputImg); // Reset preview to default image
    setIsBoxVisible(false); // Hide image box
  };

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);
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
