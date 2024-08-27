import React, { useState, useEffect } from "react";
import AddImage from "components/@shared/UI/AddImage";
import AddItemDetails from "components/AddItem/AddItemDetails";
import AddItemTags from "components/AddItem/AddItemTags";
import Main from "components/@shared/Layout/Main";
import Form from "components/@shared/UI/form/Form";
import FormButton from "components/@shared/UI/form/FormButton";

export interface ItemDetails {
  itemName: string;
  itemDescription: string;
  itemPrice: string;
  itemTags: Tag[];
}

export interface Tag {
  id: number;
  name: string;
}

function AddItem() {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [itemDetails, setItemDetails] = useState<ItemDetails>({
    itemName: "",
    itemDescription: "",
    itemPrice: "",
    itemTags: [],
  });

  const handleImageChange = (file: File | null) => {
    setUploadedImage(file);
  };

  const handleSelectedImageChange = (imageUrl: string | null) => {
    console.log("선택된 이미지 URL:", imageUrl);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("제출된 상품 정보:", itemDetails);
  };

  useEffect(() => {
    const { itemName, itemDescription, itemPrice, itemTags } = itemDetails;
    const isValid =
      Boolean(itemName) &&
      Boolean(itemDescription) &&
      Boolean(itemPrice) &&
      itemTags.length > 0;
    setIsFormValid(isValid);
  }, [itemDetails]);

  return (
    <Main className="relative">
      <h1 className="font-bold text-gray-800 text-xl">상품 등록하기</h1>
      <Form onSubmit={handleSubmit}>
        <FormButton
          className="absolute top-24 right-0 w-[74px] h-[42px] max-xl:right-6 max-md:right-4 rounded-lg"
          isFormValid={isFormValid}
        />
        <AddImage
          title="상품 이미지"
          image={uploadedImage}
          onImageChange={handleImageChange}
          onSelectedImageChange={handleSelectedImageChange}
        />
        <AddItemDetails details={itemDetails} setDetails={setItemDetails} />
        <AddItemTags initialTags={itemDetails.itemTags} />
      </Form>
    </Main>
  );
}

export default AddItem;
