import Image from "next/image";
import AddIcon from "../../../public/images/i-plus.png";
import CloseIcon from "../../../public/images/i-close.png";
import { useRef, useState } from "react";

export default function InputFileImage() {
  const FileInputRef = useRef<HTMLInputElement | null>(null);
  const [addImage, setAddImage] = useState<string | null>(null);

  const handleImageChange = () => {
    const file = FileInputRef.current?.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAddImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetClick = () => {
    if (FileInputRef.current) {
      FileInputRef.current.value = "";
    }
    setAddImage(null);
  };

  return (
    <div>
      <h2 className="text-[18px] font-bold mb-[12px]">이미지</h2>
      <div className="flex items-center gap-[20px]">
        <div>
          <label
            className="flex flex-col justify-center items-center w-[282px] h-[282px] rounded-[12px] bg-gray-100 cursor-pointer"
            htmlFor="image-file"
          >
            <Image
              className="mb-[13px]"
              width={48}
              height={48}
              src={AddIcon.src}
              alt="추가 아이콘"
            />
            <span className="text-[16px] font-normal text-gray-400">
              이미지 등록
            </span>
          </label>
          <input
            className="hidden"
            id="image-file"
            accept="image/*"
            ref={FileInputRef}
            type="file"
            onChange={handleImageChange}
          />
        </div>
        {addImage && (
          <div className="relative w-[282px] h-[282px]">
            <Image
              className="rounded-[12px]"
              width={282}
              height={282}
              src={addImage}
              alt="이미지 미리보기"
            />
            <button
              className="flex justify-center items-center absolute top-[14px] right-[14px] w-[24px] h-[24px] rounded-full bg-gray-400 cursor-pointer"
              onClick={handleResetClick}
            >
              <Image
                width={10}
                height={10}
                src={CloseIcon.src}
                alt="닫기 아이콘"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
