import styles from "../../styles/components/AddItem/ItemForm.module.css";

import registerImgIcUrl from "../../assets/ic_register_img.png";

import { useEffect, useState } from "react";

const INITIAL_VALUES = {
  images: null,
  name: "",
  description: "",
  price: null,
  tags: [],
};

function ImgFileInput() {
  // INITIAL_VALUES.images 사용?
  const [postImg, setPostImg] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);
  const [isFileDeleteAble, setIsFileDeleteAble] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    setPostImg(file);
    setIsFileDeleteAble(true);
  };

  const handleFileDelete = () => {
    setPostImg(null);
    setPreviewImg(null);
    setIsFileDeleteAble(false);
  };

  useEffect(() => {
    if (!postImg) return;

    const previewImgUrl = URL.createObjectURL(postImg);
    setPreviewImg(previewImgUrl);

    return () => {
      URL.revokeObjectURL(previewImgUrl);
    };
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
            display: isFileDeleteAble ? "block" : "none",
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

function ItemInfoInput() {
  const [tags, setTags] = useState([]);

  const handleKeyDown = (event) => {
    const tag = event.target.value;
    if (!tag) {
      return;
    }
  };

  return (
    <>
      <h3 className={styles["sub-title"]}>상품명</h3>
      <input
        className={styles["name-input"]}
        placeholder="상품명을 입력해주세요"
        name="name"
      ></input>

      <h3 className={styles["sub-title"]}>상품 소개</h3>
      <textarea
        className={styles["info-input"]}
        placeholder="상품 소개를 입력해주세요"
        name="description"
      ></textarea>

      <h3 className={styles["sub-title"]}>판매가격</h3>
      <input
        className={styles["price-input"]}
        placeholder="판매 가격을 입력해주세요"
        type="number"
        name="price"
      ></input>

      <h3 className={styles["sub-title"]}>태그</h3>
      <input
        className={styles["tag-input"]}
        placeholder="태그를 입력해주세요"
        name="tags"
      ></input>
      <div className={styles["tags-container"]}>
        <div className={styles["tag"]}>
          <div className={styles["tag-name"]}>태그</div>
          <div className={styles["tag-delete-btn"]} />
        </div>
        <div className={styles["tag"]}>
          <div className={styles["tag-name"]}>미리보기</div>
          <div className={styles["tag-delete-btn"]} />
        </div>
        <div className={styles["tag"]}>
          <div className={styles["tag-name"]}>테스트</div>
          <div className={styles["tag-delete-btn"]} />
        </div>
      </div>
    </>
  );
}

function ItemForm({ className = "" }) {
  // api로 보내줄 state -> 상위로 뺄 수도 있음
  const [values, setValues] = useState(INITIAL_VALUES);

  const handleInputSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className={className} onSubmit={handleInputSubmit}>
      <div className={styles["main-header"]}>
        <h2 className={styles["main-title"]}>상품 등록하기</h2>
        <button className={styles["submit-btn"]} type="submit" disabled={false}>
          등록
        </button>
      </div>
      <ImgFileInput />
      <ItemInfoInput />
    </form>
  );
}

export default ItemForm;
