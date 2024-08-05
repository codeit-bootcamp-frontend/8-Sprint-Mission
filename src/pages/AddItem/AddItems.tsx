import { ChangeEvent, useState } from "react";
import FileInput from "../../components/UI/FileInput";
import "./AddItems.css";
import "../../style/global.css";
import TagInput from "../../components/UI/TagInput";

interface AddItemsState {
  imgFile: File | null;
  title: string;
  description: string;
  price: any;
  tags: string[];
}

function AddItems() {
  const [values, setValues] = useState<AddItemsState>({
    imgFile: null,
    title: "",
    description: "",
    price: "",
    tags: [],
  });

  const addTag = (tag: string) => {
    if (!values.tags.includes(tag)) {
      setValues((prevState) => ({
        ...prevState,
        tags: [...prevState.tags, tag],
      }));
    }
  };

  const removeTag = (tagToRemove: string) => {
    setValues((prevState) => ({
      ...prevState,
      tags: prevState.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleFormValuesChange = (name: keyof AddItemsState, value: any) => {
    setValues((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    handleFormValuesChange(name as keyof AddItemsState, value);
  };

  const isSubmitDisabled =
    !values.title || !values.description || !values.price || !values.tags;

  return (
    <>
      <div className="registration-wrapper">
        <div className="registration-title">상품 등록하기</div>
        <button
          type="submit"
          className={`registration-button ${!isSubmitDisabled ? "active" : ""}`}
          disabled={isSubmitDisabled}
        >
          등록
        </button>
      </div>
      <div className="img-form">
        <label htmlFor="input-img" className="input-img">
          상품 이미지
        </label>
        <FileInput
          name="imgFile"
          value={values.imgFile}
          onChange={(name, file) =>
            handleFormValuesChange(name as keyof AddItemsState, file)
          }
        />
      </div>
      <form className="item-form">
        <label htmlFor="input-title" className="input-label">
          상품명
        </label>
        <input
          className="input-title"
          name="title"
          value={values.title}
          onChange={handleInputChange}
          placeholder="상품명을 입력해주세요"
        />
        <label htmlFor="input-description" className="input-label">
          상품 소개
        </label>
        <textarea
          className="input-description"
          name="description"
          value={values.description}
          onChange={handleInputChange}
          placeholder="상품 소개를 입력해주세요"
        />
        <label htmlFor="input-price" className="input-label">
          판매가격
        </label>
        <input
          className="input-price"
          name="price"
          type="number"
          value={values.price}
          onChange={handleInputChange}
          placeholder="판매 가격을 입력해주세요"
        />
        <TagInput
          tags={values.tags}
          onAddTag={addTag}
          onRemoveTag={removeTag}
        />
      </form>
    </>
  );
}

export default AddItems;
