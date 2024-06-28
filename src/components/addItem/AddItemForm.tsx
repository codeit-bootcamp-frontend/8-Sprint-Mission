import { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";
import AddItemBtn from "./AddItemBtn";
import AddItemImageInput from "./AddItemImageInput";

import AddItemInput from "./AddItemInput";
import AddItemLabel from "./AddItemLabel";
import AddItemTagInput from "./AddItemTagInput";
import AddItemTextArea from "./AddItemTextArea";

const Form = styled.form`
  max-width: 1200px;
  height: 56px;
  margin: 24px auto;
`;

const AddItemTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 33.41px;
  color: #1f2937;
`;

const TitleWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  align-item: center;
  justify-content: space-between;
`;

interface AddItems {
  images: File[] | null;
  name: string;
  description: string;
  price: string;
  tags: string[];
}

const INITIAL_ITEMS = {
  images: null,
  name: "",
  description: "",
  price: "",
  tags: [],
};

const AddItemForm = () => {
  const [addItems, setAddItems] = useState<AddItems>(INITIAL_ITEMS);
  const [isButtonOff, setIsButtonOff] = useState<boolean>(true);

  const isValidate = useCallback(() => {
    if (
      addItems.name !== "" &&
      addItems.description !== "" &&
      addItems.price !== "" &&
      addItems.tags.length > 0
    ) {
      setIsButtonOff(false);
    } else {
      setIsButtonOff(true);
    }
  }, [addItems]);

  const handleChange = (name: string, value: string | File[] | null) => {
    setAddItems((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onDeleteTag = (item: string) => {
    const newTags = addItems.tags.filter((value) => value !== item);
    setAddItems((prev) => ({ ...prev, tags: newTags }));
  };

  const onAddTag = (newTag: string) => {
    const newTags = [...addItems.tags];
    newTags.push(newTag);
    setAddItems((prev) => ({ ...prev, tags: newTags }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setAddItems(INITIAL_ITEMS);
  };

  useEffect(() => {
    isValidate();
  }, [isValidate]);

  return (
    <Form>
      <TitleWrapper>
        <AddItemTitle>상품 등록하기</AddItemTitle>
        <AddItemBtn onClick={handleSubmit} disabled={isButtonOff} />
      </TitleWrapper>

      <AddItemLabel htmlFor="images">상품 이미지</AddItemLabel>
      <AddItemImageInput
        name="images"
        value={addItems.images}
        onChange={handleChange}
      />

      <AddItemLabel htmlFor="name">상품명</AddItemLabel>
      <AddItemInput
        type="text"
        name="name"
        value={addItems.name}
        onChange={handleChange}
        placeholder="상품명을 입력해주세요"
      />

      <AddItemLabel htmlFor="description">상품 소개</AddItemLabel>
      <AddItemTextArea
        name="description"
        value={addItems.description}
        onChange={handleChange}
        placeholder="상품 소개를 입력해주세요"
      />

      <AddItemLabel htmlFor="price">판매가격</AddItemLabel>
      <AddItemInput
        type="number"
        name="price"
        value={addItems.price}
        onChange={handleChange}
        placeholder="판매 가격을 입력해주세요"
      />

      <AddItemLabel htmlFor="tags">태그</AddItemLabel>
      <AddItemTagInput
        tagList={addItems.tags}
        onAdd={onAddTag}
        onDelete={onDeleteTag}
      />
    </Form>
  );
};

export default AddItemForm;
