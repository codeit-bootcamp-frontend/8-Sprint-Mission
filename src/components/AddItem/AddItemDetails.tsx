import React from "react";
import { ItemDetails } from "pages/AddItem";
import TextareaInput from "../@shared/UI/form/TextareaInput";

interface AddItemDetailsProps {
  details: ItemDetails;
  setDetails: React.Dispatch<React.SetStateAction<ItemDetails>>;
}

const AddItemDetails: React.FC<AddItemDetailsProps> = ({
  details,
  setDetails,
}) => {
  const handleDetailsChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <>
      <TextareaInput
        htmlFor="itemName"
        title="상품명"
        placeholder="상품명을 입력해주세요"
        value={details.itemName}
        onChange={handleDetailsChange}
        className="h-14"
      />
      <TextareaInput
        htmlFor="itemDesciption"
        title="상품 소개"
        placeholder="상품 소개를 입력해주세요"
        value={details.itemDescription}
        onChange={handleDetailsChange}
        className="h-[282px]"
      />
      <TextareaInput
        htmlFor="itemPrice"
        title="판매가격"
        placeholder="판매 가격을 입력해주세요"
        value={details.itemPrice}
        onChange={handleDetailsChange}
        className="h-14"
      />
    </>
  );
};

export default AddItemDetails;
