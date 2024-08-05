import React, { useEffect, useState } from "react";
import "@pages/AddItemPage/AddItemPage.scss";
import Input from "@components/UI/jsx/Input";
import TextArea from "@components/UI/jsx/TextArea";
import Button from "@components/UI/jsx/Button";
import TagList from "@components/UI/jsx/TagList";

/** 상품 등록 페이지
 *
 * @todo 반응형 구현
 *
 */
function AddItemPage() {
  // States
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    tags: [],
    images: null,
  });
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [preview, setPreview] = useState();

  // input 요소가 변할 때,
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value, // 파일 또는 값을 State에 반영
    });
  };

  // 이미지 삭제 버튼 클릭 시,
  const handleDeleteImage = (e) => {
    setFormData({
      ...formData,
      images: null,
    });
    setPreview(null);
  };

  // 등록 버튼 클릭 시,
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 태그 등록 시,
  const handleAddTag = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      e.preventDefault();
      const tagValue = e.target.value.trim();

      // 중복 태그가 있는지 확인
      if (!formData.tags.includes(tagValue)) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          tags: [...prevFormData.tags, tagValue],
        }));
      }
      e.target.value = "";
    }
  };

  // 태그 삭제 버튼 클릭 시,
  const handleDeleteTag = (tagToDelete) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      tags: prevFormData.tags.filter((tag) => tag !== tagToDelete),
    }));
  };

  // 이미지 file를 제외한 input 요소가 입력되었을 때 버튼 활성화
  useEffect(() => {
    const { images, ...otherInputs } = formData;
    let allValuesComplete = true;
    for (let key in otherInputs) {
      if (otherInputs[key] == null || otherInputs[key] === "") {
        allValuesComplete = false;
        break;
      }
    }
    setIsFormComplete(allValuesComplete);
  }, [formData]);

  useEffect(() => {
    if (!formData.images) return;
    const nextPreview = URL.createObjectURL(formData.images);
    setPreview(nextPreview);

    // Cleanup Function
    return () => URL.revokeObjectURL(nextPreview);
  }, [formData.images]);

  return (
    <>
      <main className="addItemPage">
        <form className="addItemPage__wrapper">
          <div className="addItemPage__header">
            <h1 className="addItemPage__sectionTitle">상품 등록하기</h1>
            <Button
              size="small"
              type="submit"
              disabled={!isFormComplete}
              onClick={handleSubmit}
            >
              등록
            </Button>
          </div>

          <div className="addItemPage__inputContainer">
            <label className="addItemPage__inputTitle">상품 이미지</label>
            <div className="addItemPage__images">
              <label
                className="addItemPage__uploadFile"
                aria-label="이미지 등록 버튼"
              >
                <input
                  className="addItemPage__srOnly"
                  type="file"
                  id="images"
                  name="images"
                  accept="image/jpeg,image/png"
                  onChange={handleChange}
                ></input>
                <i className="addItemPage__icPlus"></i>
                <span>이미지 등록</span>
              </label>

              {preview && (
                <div className="addItemPage__imageContainer">
                  <img
                    className="addItemPage__image"
                    src={preview}
                    alt="이미지 미리보기"
                  />
                  <i
                    className="addItemPage__icX"
                    role="button"
                    aria-label="이미지 삭제 버튼"
                    onClick={handleDeleteImage}
                  ></i>
                </div>
              )}
            </div>
          </div>
          <div className="addItemPage__inputContainer">
            <label className="addItemPage__inputTitle" htmlFor="name">
              상품명
            </label>
            <Input
              className="addItemPage__name"
              type="text"
              id="name"
              name="name"
              placeholder="상품명을 입력해주세요."
              required="true"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className="addItemPage__inputContainer">
            <label className="addItemPage__inputTitle" htmlFor="description">
              상품 소개
            </label>
            <TextArea
              className="addItemPage__description"
              type="textarea"
              id="description"
              name="description"
              placeholder="상품 소개를 입력해주세요."
              required="true"
              onChange={handleChange}
              value={formData.description}
            />
          </div>
          <div className="addItemPage__inputContainer">
            <label className="addItemPage__inputTitle" htmlFor="price">
              판매 가격
            </label>
            <Input
              className="addItemPage__price"
              type="text"
              id="price"
              name="price"
              placeholder="판매 가격을 입력해주세요."
              required="true"
              onChange={handleChange}
              value={formData.price}
            />
          </div>
          <div className="addItemPage__inputContainer">
            <label className="addItemPage__inputTitle" htmlFor="tags">
              태그
            </label>
            <Input
              className="addItemPage__tagInput"
              type="text"
              id="tags"
              name="tags"
              placeholder="태그를 입력하고 Enter를 누르세요."
              onKeyDown={handleAddTag}
            />
            <TagList
              tags={formData.tags}
              onDelete={handleDeleteTag}
              canDelete={true}
            />
          </div>
        </form>
      </main>
    </>
  );
}

export default AddItemPage;
