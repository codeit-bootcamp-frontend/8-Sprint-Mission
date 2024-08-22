import React, { useEffect, useState, useRef, ChangeEvent } from "react";
import plusIc from "assets/icons/ic_plus.png";
import blueXIc from "assets/icons/ic_X_blue.png";
import defaultItemImg from "assets/images/img_item_default.png";
import checkIc from "assets/icons/ic_check.png";

interface AddImageProps {
  image: File | null;
  onImageChange: (file: File | null) => void;
  onSelectedImageChange: (imageUrl: string | null) => void;
  title: string;
  staticImageData?: string;
}

const AddImage = ({
  image,
  onImageChange,
  onSelectedImageChange,
  title,
  staticImageData = defaultItemImg,
}: AddImageProps) => {
  const [previewImgUrl, setPreviewImgUrl] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>(staticImageData);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      onImageChange(file);
      const objectUrl = URL.createObjectURL(file);
      setPreviewImgUrl(objectUrl);
      setSelectedImage(objectUrl);
    }
  };

  const handleRemoveImage = () => {
    setPreviewImgUrl(null);
    onImageChange(null);
    setSelectedImage(staticImageData);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  useEffect(() => {
    onSelectedImageChange(selectedImage);
  }, [selectedImage, onSelectedImageChange]);

  useEffect(() => {
    if (image) {
      const objectUrl = URL.createObjectURL(image);
      setPreviewImgUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreviewImgUrl(null);
      setSelectedImage(staticImageData); // image가 없을 때 staticImageData로 설정
    }
  }, [image, staticImageData]);

  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="image" className="font-bold text-gray-800 text-lg">
        {title}
      </label>
      <ul className="flex flex-row gap-4">
        <li className="relative w-[282px] max-xl:w-[168px] max-xl:h-[168px] flex flex-col rounded-xl content-center justify-center gap-3 text-gray-400 bg-gray-100 h-[282px]">
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            ref={inputRef}
            className="absolute inset-0 w-full h-full opacity-0"
          />
          <img
            src={plusIc}
            className="w-12 h-12 mx-auto"
            alt="플러스 아이콘"
            width={48}
            height={48}
          />
          <span className="text-center">이미지 등록</span>
        </li>
        {previewImgUrl && (
          <li
            onClick={() => handleImageClick(previewImgUrl)}
            className="relative w-[282px] h-[282px] max-xl:w-[168px] max-xl:h-[168px] rounded-xl"
          >
            <img
              src={previewImgUrl}
              alt="이미지 미리보기"
              width={282}
              height={282}
              className="w-full h-full object-cover rounded-xl"
            />
            <button onClick={handleRemoveImage}>
              <img
                src={blueXIc}
                alt="이미지 삭제 아이콘"
                width={40}
                height={40}
                className="z-30 absolute top-2 right-2 max-xl:w-6 max-xl:h-6"
              />
            </button>
            {selectedImage === previewImgUrl && (
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-2xl">
                <img
                  src={checkIc}
                  alt="체크 아이콘"
                  width={40}
                  height={40}
                  className="absolute"
                />
              </div>
            )}
          </li>
        )}
      </ul>
    </div>
  );
};

export default AddImage;
