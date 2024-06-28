import React, { useState, useEffect } from "react";
import "./AddItem.css";
import ItemImageUpload from "../components/AddItem/ItemImgUpload";
import ItemDetails from "../components/AddItem/ItemDetails";

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

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setItemDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleTagsChange = (newTags) => {
    setItemDetails((prevDetails) => ({
      ...prevDetails,
      itemTags: newTags,
    }));
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
        <ItemImageUpload
          image={uploadedImage}
          onImageChange={handleImageChange}
        />
        <ItemDetails
          details={itemDetails}
          onChange={handleDetailsChange}
          onTagsChange={handleTagsChange}
        />
      </form>
    </>
  );
}

export default AddItem;
