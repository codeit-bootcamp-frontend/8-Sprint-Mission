import Image from "next/image";
import React from "react";

interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  previewImg: string | null;
  onDelBtnClick: () => void;
}

export default function FileInput({ previewImg, onDelBtnClick, ...props }: FileInputProps) {
  return (
    <>
      <div className="mb-[16px] md:mb-[24px]">
        <div className="text-[14px] font-bold text-gray-800 mb-[12px] md:text-[18px]">이미지</div>
        <div className="flex gap-[10px] xl:gap-[24px]">
          <label htmlFor="image" className="cursor-pointer">
            <div className="flex justify-center items-center w-[168px] h-[168px] rounded-[12px] bg-gray-100 xl:w-[282px] xl:h-[282px]">
              <Image
                width={74}
                height={86}
                src="/images/ic_register_img_file.png"
                alt="이미지등록"
              />
            </div>
          </label>
          <input {...props} className="hidden" id="image" type="file" />
          {previewImg && (
            <div className="relative rounded-[12px] w-[168px] h-[168px] xl:w-[282px] xl:h-[282px]">
              <Image className="rounded-[12px]" fill src={previewImg} alt="업로드 파일 미리보기" />
              <button
                type="button"
                onClick={onDelBtnClick}
                className="absolute rounded-full w-[22px] h-[24px] top-[12px] right-[12px]"
              >
                <Image
                  width={22}
                  height={24}
                  src="/images/img_del_btn_default.png"
                  alt="이미지 제거 버튼"
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
