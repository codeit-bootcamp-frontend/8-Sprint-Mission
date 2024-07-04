import styles from "./ImgFileInput.module.css";

import registerImgIcUrl from "../../../assets/images/ic_register_img.png";

import { useEffect, useState } from "react";

function ImgFileInput() {
  // INITIAL_VALUES.images 사용?
  // postImg => file 객체 , previewImg => url 객체
  const [postImg, setPostImg] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);
  const [isFileSelected, setIsFileSelected] = useState(false);

  /**
   * 파일 선택시에 file 객체를 저장 및 파일이 선택된 상태 true
   */
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    setPostImg(file);
    setIsFileSelected(true);
  };

  /**
   * 삭제 버튼 클릭 시 동작 : file객체, 프리뷰이미지 초기화 및 파일 선택 상태 false
   */
  const handleFileDelete = () => {
    setPostImg(null);
    setPreviewImg(null);
    setIsFileSelected(false);
  };

  // 파일이 선택되면 프리뷰 이미지 URL 생성
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
          accept=".png, .jepg, .jpg"
          onChange={handleFileUpload}
        ></input>
        <div
          className={styles["imgfile-preview"]}
          style={{
            backgroundImage: `url(${previewImg})`,
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
