import React, { useState, useEffect } from "react";
import "./AddItemPage.css";

const AddItemPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    tags: "",
    image: null,
  });

  const [tags, setTags] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  const handleTagChange = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const tagValue = e.target.value.trim();
      if (tagValue && !tags.includes(tagValue)) {
        setTags([...tags, tagValue]);
        e.target.value = "";
      }
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const removeImage = () => {
    setFormData({ ...formData, image: null });
  };

  useEffect(() => {
    const { title, description, price } = formData;
    setIsFormValid(title && description && price);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 상품 등록 로직 구현
  };

  return (
    <div className="add-item-container">
      <div className="main-title-wrapper">
        <div className="main-title">상품 등록하기</div>
        <button
          type="submit"
          className={`submit-button ${isFormValid ? "active" : ""}`}
          disabled={!isFormValid}
        >
          등록
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <h3 className="sub-title">상품 이미지</h3>
        <div className="image-upload">
          <label htmlFor="image-upload-input" className="image-upload-label">
            <span>+</span>
            <p>이미지 등록</p>
          </label>
          <input
            id="image-upload-input"
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            disabled={!!formData.image} // 이미지가 이미 업로드된 경우 비활성화
          />
          {formData.image && (
            <div className="uploaded-image-container">
              <img
                src={URL.createObjectURL(formData.image)}
                alt="상품 이미지"
                className="uploaded-image"
              />
              <button
                type="button"
                className="remove-image-button"
                onClick={removeImage}
              >
                X
              </button>
            </div>
          )}
        </div>
        <h3 className="sub-title">상품명</h3>
        <input
          type="text"
          name="title"
          placeholder="상품명을 입력해주세요"
          onChange={handleChange}
          className="form-input"
          value={formData.title}
        />
        <h3 className="sub-title">상품 소개</h3>
        <textarea
          name="description"
          placeholder="상품 소개를 입력해주세요"
          onChange={handleChange}
          className="form-input"
          value={formData.description}
        ></textarea>
        <h3 className="sub-title">판매가격</h3>
        <input
          type="number"
          name="price"
          placeholder="판매 가격을 입력해주세요"
          onChange={handleChange}
          className="form-input"
          value={formData.price}
        />
        <h3 className="sub-title">태그</h3>
        <input
          type="text"
          placeholder="태그를 입력해주세요"
          onKeyDown={handleTagChange}
          className="form-input"
        />
        <div className="tags-container">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}{" "}
              <button type="button" onClick={() => removeTag(index)}>
                X
              </button>
            </span>
          ))}
        </div>
      </form>
    </div>
  );
};

export default AddItemPage;
