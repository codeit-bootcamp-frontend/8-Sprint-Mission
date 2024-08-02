import { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import FileInput from "../../ui/FormComponents/FileInput";
import TagInput from "../../ui/FormComponents/TagInput";
import Input from "../../ui/FormComponents/Input";
import TextArea from "../../ui/FormComponents/TextArea";
import Button from "../../ui/Button/Button";
import styles from "./ProductForm.module.css";

interface Tag {
  id: string;
  name: string;
}

interface InitialValues {
  imgFile: File | null;
  title: string;
  description: string;
  price: string;
  tag: Tag[];
}

const INITIAL_VALUES: InitialValues = {
  imgFile: null,
  title: "",
  description: "",
  price: "",
  tag: [],
};

type ChangeValueType = (
  name: string,
  value: string | null | Tag[] | number | File | readonly string[]
) => void;

export default function ProductForm() {
  const [formValues, setFormValues] = useState<InitialValues>(INITIAL_VALUES);
  const [isActive, setIsActive] = useState<boolean>(false);
  const { title, description, price, tag } = formValues;

  const submitActive: boolean =
    title.trim() !== "" &&
    description.trim() !== "" &&
    price !== "" &&
    tag.length > 0;

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
    <Form className={styles.formContainer}>
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
        id="title"
        label="상품명"
        type="text"
        name="title"
        value={formValues.title}
        placeholder="상품명을 입력해주세요"
        changeValue={handleChangeInput}
      />
      <TextArea
        id="description"
        label="상품 소개"
        name="description"
        className={styles.inputBox}
        variant="addProduct"
        value={formValues.description}
        placeholder="상품 소개를 입력해주세요"
        changeValue={handleChangeInput}
      />
      <Input
        className={styles.inputBox}
        id="price"
        label="판매가격"
        type="number"
        name="price"
        value={formValues.price}
        placeholder="판매 가격을 입력해주세요"
        changeValue={handleChangeInput}
      />
      <TagInput
        id="tag"
        label="태그"
        type="text"
        name="tag"
        tags={formValues.tag}
        placeholder="태그를 입력해주세요"
        changeValue={handleChangeInput}
      />
    </Form>
  );
}
