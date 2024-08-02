import React, { useEffect, useState, ChangeEvent } from 'react';
import styles from "./ImgFileInput.module.css";
import registerImgIcUrl from "../../../assets/images/ic_register_img.png";

// 타입 정의
const ImgFileInput: React.FC = () => {
  const [postImg, setPostImg] = useState<File | null>(null);
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  const [isFileSelected, setIsFileSelected] = useState<boolean>(false);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      setPostImg(file);
      setIsFileSelected(true);
    }
  };

  const handleFileDelete = () => {
    setPostImg(null);
    setPreviewImg(null);
    setIsFileSelected(false);
  };

  useEffect(() => {
    if (!postImg) return;

    const previewImgUrl = URL.createObjectURL(postImg);
    setPreviewImg(previewImgUrl);

    return () => URL.revokeObjectURL(previewImgUrl);
  }, [postImg]);

  return (
    <div className={styles["imgfile-submit"]}>
      <h3 className={styles["sub-title"]}>상품 이미지</h3>
      <div className={styles["imgfile-container"]}>
        <label className={styles["file-input-label"]} htmlFor="file">
          <img
            className={styles["register-img-icon"]}
            src={registerImgIcUrl}
            alt="이미지 등록"
          />
        </label>
        <input
          className={styles["file-input"]}
          id="file"
          type="file"
          accept=".png, .jpeg, .jpg"
          onChange={handleFileUpload}
        />
        <div
          className={styles["imgfile-preview"]}
          style={{
            backgroundImage: previewImg ? `url(${previewImg})` : undefined,
            display: isFileSelected ? "block" : "none",
          }}
        >
          <div
            className={`${styles["imgfile-delete-btn"]} ${styles["inactive"]}`}
            onClick={handleFileDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default ImgFileInput;
