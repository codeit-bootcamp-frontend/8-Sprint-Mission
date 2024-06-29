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

function ItemInfoInput() {
  const [tags, setTags] = useState([]);

  /**
   * 엔터 키 입력 시 tag 리스트에 해당 tag 추가
   */
  const handleEnterKeyDown = (event) => {
    if (event.key !== "Enter") return;

    const target = event.target;
    const tag = target.value;
    if (!tag || tags.indexOf(tag) !== -1) {
      target.value = "";
      return;
    }

    setTags((tags) => [...tags, tag]);
    target.value = "";
  };

  /**
   * 태그 삭제 버튼 클릭 시 해당 태그 삭제
   */
  const handleTagDelete = (event) => {
    const registerdTag = event.target.previousElementSibling.textContent;

    const nextTags = tags.filter((tag) => tag !== registerdTag);
    setTags(nextTags);
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
        onKeyDown={handleEnterKeyDown}
      ></input>
      <ol className={styles["tags-container"]}>
        {tags &&
          tags.map((tag) => (
            <li key={tag} className={styles["tag"]}>
              <div className={styles["tag-name"]}>{tag}</div>
              <div
                className={styles["tag-delete-btn"]}
                onClick={handleTagDelete}
              />
            </li>
          ))}
      </ol>
    </>
  );
}

function ItemForm({ className = "" }) {
  const [isInputValid, setIsInputValid] = useState(false);
  const [values, setValues] = useState(INITIAL_VALUES);
  // api로 보낼 정보 정리

  const handleInputSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className={className} onSubmit={handleInputSubmit}>
      <div className={styles["main-header"]}>
        <h2 className={styles["main-title"]}>상품 등록하기</h2>
        <button
          className={styles["submit-btn"]}
          type="submit"
          disabled={isInputValid}
        >
          등록
        </button>
      </div>
      <ImgFileInput />
      <ItemInfoInput />
    </form>
  );
}

export default ItemForm;
