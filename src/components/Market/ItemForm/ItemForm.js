import styles from "./ItemForm.module.css";

import ImgFileInput from "./ImgFileInput";
import ItemInfoInput from "./ItemInfoInput";

import { useState } from "react";

const INITIAL_VALUES = {
  images: null,
  name: "",
  description: "",
  price: null,
  tags: [],
};

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
      <ItemInfoInput initialValues={INITIAL_VALUES} />
    </form>
  );
}

export default ItemForm;
