import styles from "./ItemInfoInput.module.css";

import { useState } from "react";

function ItemInfoInput({ initialValues }) {
  const [tags, setTags] = useState(initialValues.tags);

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