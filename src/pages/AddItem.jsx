import React, { useState, useEffect } from "react";
import "./AddItem.css";
import AddItemImage from "../components/AddItem/AddItemImage";
import AddItemDetails from "../components/AddItem/AddItemDetails";
import AddItemTags from "../components/AddItem/AddItemTags";

function AddItem() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const [itemDetails, setItemDetails] = useState({
    itemName: "",
    itemDescription: "",
    itemPrice: "",
    itemTags: [],
  });

  const handleImageChange = (file) => {
    setUploadedImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("제출된 상품 정보:", itemDetails);
  };

  useEffect(() => {
    const { itemName, itemDescription, itemPrice, itemTags } = itemDetails;
    const isValid = itemName && itemDescription && itemPrice && itemTags;
    setIsFormValid(isValid);
  }, [itemDetails]);

  return (
    <>
      <h1 className="page-title">상품 등록하기</h1>
      <form className="item-add-form" onSubmit={handleSubmit}>
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
    </>
  );
}

export default AddItem;
