import React, { useEffect, useState, useRef } from "react";

function AddItemImage({ image, onImageChange }) {
  const [previewImgUrl, setPreviewImgUrl] = useState(null);
  const inputRef = useRef(null);

  // Resolve the error When the event object is null
  const handleImageChange = (eventObject) => {
    if (eventObject && eventObject.target && eventObject.target.files) {
      const file = eventObject.target.files[0];
      onImageChange(file);
    } else {
      onImageChange(null);
    }
  };

  const removeImage = () => {
    setPreviewImgUrl(null);
    onImageChange(null);
    if (inputRef.current) {
      inputRef.current.value = null;
    }
  };

  useEffect(() => {
    if (image) {
      const objectUrl = URL.createObjectURL(image);
      setPreviewImgUrl(objectUrl);

      // Prevent URL memory leaks
      return () => {
        URL.revokeObjectURL(objectUrl);
      };
    }
  }, [image]);

  return (
    <section className="item-img-upload">
      <label className="section-title">상품 이미지</label>
      <div className="item-img-wrap">
        <div className="upload-container">
          <div className="upload-content">
            <div className="ic-plus" />
            <span>이미지 등록</span>
          </div>
          <input
            type="file"
            id="ImgUpload"
            name="ImgUpload"
            accept="image/*"
            onChange={handleImageChange}
            ref={inputRef}
          />
        </div>
        {previewImgUrl && (
          <div className="img-preview-container">
            <img
              className="img-preview"
              src={previewImgUrl}
              alt="이미지 미리보기"
            />
            <button onClick={removeImage} className="ic-delete-blue" />
          </div>
        )}
      </div>
    </section>
  );
}

export default AddItemImage;
