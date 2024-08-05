import React, { useState, useEffect } from "react";
import AddItemImage from "../components/AddItem/AddItemImage";
import AddItemDetails from "../components/AddItem/AddItemDetails";
import AddItemTags from "../components/AddItem/AddItemTags";

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
    <main className="font-pretendard max-w-[1200px] pt-24 mx-auto gap-6 flex flex-col max-md:px-4 max-xl:px-6">
      <h1 className="font-bold text-gray-800 text-xl">상품 등록하기</h1>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <button
          type="submit"
          className={`submit-btn ${isFormValid ? "active-btn" : ""}`}
          disabled={!isFormValid}
        >
          등록
        </button>
        <AddItemImage image={uploadedImage} onImageChange={handleImageChange} />
        <AddItemDetails details={itemDetails} setDetails={setItemDetails} />
        <AddItemTags initialTags={itemDetails.itemTags} />
      </form>
    </main>
  );
}

export default AddItem;
