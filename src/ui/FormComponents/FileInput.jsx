import { useState, useEffect, useRef } from "react";
import styles from "./FileInput.module.css";

export default function FileInput({
  id,
  name,
  value,
  previewImg,
  changeValue,
  className,
  ...props
}) {
  const [preview, setPreview] = useState(null);
  const imgInputRef = useRef(null);

  const handleChange = (e) => {
    const imgValue = e.target.files[0];
    changeValue(name, imgValue);
  };

  const handleClearBtn = (e) => {
    e.preventDefault();
    const imgInputNode = imgInputRef.current;
    if (!imgInputNode) return;

    imgInputNode.value = "";
    changeValue(name, null);
  };

  useEffect(() => {
    if (!value) return;
    const nextPreviewImg = URL.createObjectURL(value);
    setPreview(nextPreviewImg);
    return () => {
      setPreview();
      URL.revokeObjectURL(nextPreviewImg);
    };
  }, [value]);

  return (
    <div className={styles.previewImgContainer}>
      <label htmlFor={id} className={styles.fileLabel}>
        <span>이미지 등록</span>
      </label>
      <input
        className={styles.fileInput}
        id={id}
        {...props}
        ref={imgInputRef}
        onChange={handleChange}
      />
      {preview && (
        <div className={styles.previewImg}>
          <img src={preview} alt="이미지 미리보기" />
          <button className={styles.imgRemoveBtn} onClick={handleClearBtn} />
        </div>
      )}
    </div>
  );
}
