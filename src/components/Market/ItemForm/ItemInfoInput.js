import styles from "./ItemInfoInput.module.css";

import { useState } from "react";

function ItemInfoInput({ initialValues }) {
  const [tags, setTags] = useState(initialValues.tags);

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

export default ItemInfoInput;
