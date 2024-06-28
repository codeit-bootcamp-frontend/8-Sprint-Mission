import styles from "../../styles/components/AddItem/ItemForm.module.css";

import registerImgIcUrl from "../../assets/ic_register_img.png";

function ImgFileInput() {
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
        <input className={styles["file-input"]} id="file" ype="file"></input>
        <div className={styles["imgfile-preview"]}>
          <div
            className={`${styles["imgfile-delete-btn"]} ${styles["inactive"]}`}
          />
        </div>
      </div>
    </div>
  );
}

function ItemInfoInput() {
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
          <div className={styles["tag-name"]}>테스트</div>
          <div className={styles["tag-delete-btn"]} />
        </div>
        <div className={styles["tag"]}>
          <div className={styles["tag-name"]}>테스트</div>
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
  const handleInputSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className={className} onSubmit={handleInputSubmit}>
      <div className={styles["main-header"]}>
        <h2 className={styles["main-title"]}>상품 등록하기</h2>
        <button className={styles["submit-btn"]} type="submit" disabled={true}>
          등록
        </button>
      </div>
      <ImgFileInput />
      <ItemInfoInput />
    </form>
  );
}

export default ItemForm;
