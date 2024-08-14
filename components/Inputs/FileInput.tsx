import { useState } from "react";

import Image from "next/image";
import plusIcon from "@/assets/images/ic_plus.png";

interface FileInputProps {
  name: string;
  label: string;
}

function FileInput({ name, label }: FileInputProps) {
  const [preview, setPreview] = useState("");

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selectedImg = e.target.files[0];
    const previewImg = URL.createObjectURL(selectedImg);

    // onChange(name, selectedImg);
    setPreview(previewImg);
  };

  return (
    <div className="file-input-wrapper">
      <div className="mb-3 text-lg font-bold text-gray-800">{label}</div>
      <label
        className="relative inline-block h-72 w-72 cursor-pointer rounded-xl bg-gray-100"
        htmlFor={name}
      >
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center">
          <Image
            className="mb-3"
            src={plusIcon}
            alt="이미지 파일 등록 버튼"
            width={48}
            height={48}
          />
          <div className="text-base font-normal text-gray-400">이미지 등록</div>
        </div>
      </label>

      <input
        className="hidden"
        id={name}
        name={name}
        type="file"
        onChange={handleFileInputChange}
      />

      {preview && (
        <Image
          className="ml-6 inline-block h-72 w-72 rounded-xl object-cover align-baseline"
          src={preview}
          alt="업로드한 이미지 미리보기"
          width={282}
          height={282}
        />
      )}
    </div>
  );
}

export default FileInput;
