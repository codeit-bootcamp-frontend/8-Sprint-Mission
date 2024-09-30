import { useEffect, useState } from "react";
import FileInput from "../../ui/FormComponents/FileInput";
import TagInput from "../../ui/FormComponents/TagInput";
import Input from "../../ui/FormComponents/Input";
import TextArea from "../../ui/FormComponents/TextArea";
import Button from "../../ui/Button/LinkButton";
import styles from "./ProductForm.module.css";
import { FormInitialValues, ChangeValueType } from "./@types/ProductForm";

interface ProductFormType {
  inputData?: FormInitialValues;
  onSubmit: (formData: FormInitialValues) => void;
}
const INITIAL_VALUES: FormInitialValues = {
  imgFile: null,
  name: "",
  description: "",
  price: "",
  tags: [],
};

export default function ProductForm({ inputData, onSubmit }: ProductFormType) {
  const [formValues, setFormValues] = useState<FormInitialValues>(
    inputData ?? INITIAL_VALUES
  );
  const [isActive, setIsActive] = useState<boolean>(false);
  const { name, description, price, tags } = formValues;
  const submitActive: boolean =
    name.trim() !== "" &&
    description.trim() !== "" &&
    price !== "" &&
    tags.length > 0;

  const handleSubmitAddProduct = (event) => {
    event.preventDefault();
    onSubmit(formValues);
  };

  const handleChangeValue: ChangeValueType = (name, value) => {
    setFormValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleChangeInput: ChangeValueType = (name, value) => {
    handleChangeValue(name, value);
  };

  useEffect(() => {
    setIsActive(() => submitActive);
  }, [formValues]);

  return (
    <form onSubmit={handleSubmitAddProduct} className={styles.formContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>상품 등록하기</h2>
        <Button isActive={!isActive} btnName="등록" />
      </div>
      <div className={styles.fileContainer}>
        <h2 className={styles.fileTitle}>상품 이미지</h2>
        <FileInput
          id="imgFile"
          name="imgFile"
          type="file"
          accept="image/png, image/jpeg"
          changeValue={handleChangeValue}
        />
      </div>
      <Input
        className={styles.inputBox}
        id="name"
        label="상품명"
        type="text"
        name="name"
        value={formValues?.name ?? ""}
        placeholder="상품명을 입력해주세요"
        changeValue={handleChangeInput}
      />
      <TextArea
        id="description"
        label="상품 소개"
        name="description"
        className={styles.inputBox}
        variant="addProduct"
        value={formValues?.description ?? ""}
        placeholder="상품 소개를 입력해주세요"
        changeValue={handleChangeInput}
      />
      <Input
        className={styles.inputBox}
        id="price"
        label="판매가격"
        type="number"
        name="price"
        value={formValues?.price ?? ""}
        placeholder="판매 가격을 입력해주세요"
        changeValue={handleChangeInput}
      />
      <TagInput
        id="tags"
        label="태그"
        type="text"
        name="tags"
        tags={formValues?.tags ?? []}
        placeholder="태그를 입력해주세요"
        changeValue={handleChangeInput}
      />
    </form>
  );
}
