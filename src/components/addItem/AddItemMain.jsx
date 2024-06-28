import React, { useState } from "react";
import styled from "styled-components";
import AddItemForm from "./AddItemForm";
import AddItemSubmitButton from "./AddItemSubmitButton";

function AddItemMain() {
  const [tagValue, setTagValue] = useState("");
  const [values, setValues] = useState({
    images: [],
    tags: [],
    price: "",
    description: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "tags":
        setTagValue(value);
        break;
      case "price":
        const priceValue = parseInt(value.replace(/[^0-9]/g, ""));
        const renderPrice = priceValue.toLocaleString();
        console.log(renderPrice);
        setValues((prevValues) => {
          if (parseInt(renderPrice)) {
            return {
              ...prevValues,
              [name]: renderPrice,
            };
          } else {
            return {
              ...prevValues,
              [name]: "",
            };
          }
        });
        break;
      case "images":
        const file = e.target.files[0];
        if (file) {
          const newImage = URL.createObjectURL(file);
          setValues((prevValues) => ({
            ...prevValues,
            [name]: [...prevValues.images, newImage],
          }));
        }
        break;
      default:
        setValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
    }
  };

  const handleKeydownTag = (e) => {
    e.preventDefault();
    console.log(e.target);
    if (e.key === "Enter") {
      setValues((prevValues) => ({
        ...prevValues,
        tags: [...prevValues.tags, tagValue],
      }));
      setTagValue("");
    } else {
      return;
    }
  };

  const handleDeleteImg = (i) => {
    setValues((prevValues) => {
      const nextImages = prevValues.images.filter((e, index) => {
        return i !== index;
      });
      return { ...prevValues, images: [...nextImages] };
    });
  };
  const handleDeleteTag = (i) => {
    console.log("클릭");
    setValues((prevValues) => {
      const nextTag = prevValues.tags.filter((e, index) => {
        return i !== index;
      });
      return { ...prevValues, tags: [...nextTag] };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("실행");
  };
  return (
    <MainContainer>
      <div className="additem-main-top">
        <div className="additem-txt">상품 등록하기</div>
        <AddItemSubmitButton onSubmit={handleSubmit} />
      </div>
      <AddItemForm
        values={values}
        tagValue={tagValue}
        handleChange={handleChange}
        handleDeleteImg={handleDeleteImg}
        handleKeydownTag={handleKeydownTag}
        handleDeleteTag={handleDeleteTag}
      />
    </MainContainer>
  );
}

export default AddItemMain;

const MainContainer = styled.div`
  margin: 70px auto 170px;
  padding-top: 24px;
  max-width: 1200px;
  color: var(--gray-800);
  font-size: 18px;
  font-weight: 700;
  .additem-main-top {
    display: flex;
    justify-content: space-between;
  }
  .additem-txt {
    font-size: 28px;
  }
  @media (max-width: 1199px) {
    margin: 70px 24px 170px;
  }
  @media (max-width: 764px) {
    margin: 70px 15px 170px;
  }
`;
