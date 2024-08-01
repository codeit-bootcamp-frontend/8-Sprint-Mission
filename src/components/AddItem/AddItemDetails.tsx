import React from "react";
import { ItemDetails } from "../../pages/AddItem";

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
    <section className="item-details">
      <div className="item-detail-container">
        <label htmlFor="itemName" className="section-title">
          상품명
        </label>
        <input
          className="item-detail-input"
          type="text"
          id="itemName"
          name="itemName"
          placeholder="상품명을 입력해주세요"
          value={details.itemName}
          onChange={handleDetailsChange}
        />
      </div>

      <div className="item-detail-container">
        <label htmlFor="itemDesciption" className="section-title">
          상품 소개
        </label>
        <textarea
          className="item-detail-input"
          id="itemDescription"
          name="itemDescription"
          placeholder="상품 소개를 입력해주세요"
          value={details.itemDescription}
          onChange={handleDetailsChange}
        />
      </div>

      <div className="item-detail-container">
        <label htmlFor="itemPrice" className="section-title">
          판매가격
        </label>
        <input
          className="item-detail-input"
          type="text"
          id="itemPrice"
          name="itemPrice"
          placeholder="판매 가격을 입력해주세요"
          value={details.itemPrice}
          onChange={handleDetailsChange}
        />
      </div>
    </section>
  );
};

export default AddItemDetails;
