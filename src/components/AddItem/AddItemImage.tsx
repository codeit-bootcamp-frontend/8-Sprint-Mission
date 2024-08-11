import React, { useEffect, useState, useRef, ChangeEvent } from "react";
import plusIc from "assets/icons/ic_plus.png";

interface AddItemImageProps {
  image: File | null;
  onImageChange: (file: File | null) => void;
}

const AddItemImage: React.FC<AddItemImageProps> = ({
  image,
  onImageChange,
}) => {
  const [previewImgUrl, setPreviewImgUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Resolve the error When the event object is null
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e && e.target && e.target.files) {
      const file = e.target.files[0];
      onImageChange(file);
    } else {
      onImageChange(null);
    }
  };

  const removeImage = () => {
    setPreviewImgUrl(null);
    onImageChange(null);
    if (inputRef.current) {
      inputRef.current.value = "";
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
      <label className="font-bold text-gray-800 text-lg">상품 이미지</label>
      <div className="item-img-wrap">
        <div className="upload-container">
          <div className="flex flex-col rounded-xl content-center justify-center gap-3 text-gray-400 bg-gray-100 h-[282px]">
            <img
              src={plusIc}
              className="w-12 h-12 mx-auto"
              alt="플러스 아이콘"
            />
            <span className="text-center">이미지 등록</span>
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
};

export default AddItemImage;
