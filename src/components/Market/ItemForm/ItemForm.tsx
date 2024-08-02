import React, { useState, FormEvent, ChangeEvent } from "react";
import styles from "./ItemForm.module.css";
import ImgFileInput from "./ImgFileInput";
import ItemInfoInput from "./ItemInfoInput";

interface ItemFormValues {
  images: File | null;
  name: string;
  description: string;
  price: number | null;
  tags: string[];
}

const INITIAL_VALUES: ItemFormValues = {
  images: null,
  name: "",
  description: "",
  price: null,
  tags: [],
};

interface ItemFormProps {
  className?: string;
}

const ItemForm: React.FC<ItemFormProps> = ({ className = "" }) => {
  const [isInputValid, setIsInputValid] = useState<boolean>(false);
  const [values, setValues] = useState<ItemFormValues>(INITIAL_VALUES);

  const validateInput = () => {
    const isValid = values.name.trim() !== "" && values.price !== null;
    setIsInputValid(!isValid);
  };

  const handleInputSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
    validateInput();
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
      <input
        type="text"
        name="name"
        placeholder="상품명을 입력해주세요"
        value={values.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="판매 가격을 입력해주세요"
        value={values.price ?? ""}
        onChange={handleChange}
      />
    </form>
  );
}

export default ItemForm;
