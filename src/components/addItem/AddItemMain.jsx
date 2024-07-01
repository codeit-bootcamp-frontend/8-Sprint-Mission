import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddItemForm from "./AddItemForm";
import AddItemSubmitButton from "./AddItemSubmitButton";

const INIT_VALUSE = {
  images: [],
  tags: [],
  price: "",
  description: "",
  name: "",
};

function AddItemMain() {
  const [tagValue, setTagValue] = useState("");
  const [values, setValues] = useState({
    images: [],
    tags: [],
    price: "",
    description: "",
    name: "",
  });
  const [isValuesFill, setIsValuesFill] = useState(false);

  const valuesChecker = () => {
    const { tags, price, description, name } = values;
    setIsValuesFill(tags.length && price && description && name ? true : false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "tags":
        setTagValue(value);
        break;
      case "price":
        const priceValue = parseInt(value.replace(/[^0-9]/g, ""));
        const renderPrice = priceValue.toLocaleString();
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
    if (e.key !== "Enter") {
      return;
    }
    if (!tagValue.trim("")) {
      setTagValue("");
      return;
    }
    if (values.tags.length > 5) {
      setValues((prevValues) => ({
        ...prevValues,
        tags: [...prevValues.tags.slice(1, prevValues.tags.length), tagValue],
      }));
      setTagValue("");
      return;
    }
    setValues((prevValues) => ({
      ...prevValues,
      tags: [...prevValues.tags, tagValue],
    }));
    setTagValue("");
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
    setValues((prevValues) => {
      const nextTag = prevValues.tags.filter((e, index) => {
        return i !== index;
      });
      return { ...prevValues, tags: [...nextTag] };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    valuesChecker();
  }, [values]);
  return (
    <MainContainer>
      <div className="additem-main-top">
        <div className="additem-txt">상품 등록하기</div>
        <AddItemSubmitButton
          onSubmit={handleSubmit}
          isValuesFill={isValuesFill}
        />
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
