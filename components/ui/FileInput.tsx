import type { InputChangeEvent } from "@/types/alias";

import asd from "../../public/images/img_addfile.png";
import Image from "next/image";
import { ChangeEvent } from "react";

interface FileInputProps {
  image?: string;
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
}
export default function FileInput({
  name,
  label,
  value,
  image,
  onChange,
}: FileInputProps) {
  return (
    <div className="flex flex-col pb-6 relative">
      <label className="pb-4 text-lg font-bold" htmlFor={name}>
        {label}
      </label>
      <input
        onChange={onChange}
        className="w-[168px] h-[168px] lg:w-[282px] lg:h-[282px] "
        type="file"
        name={name}
        id={name}
        value={value}
      />
      <label
        htmlFor={name}
        className="absolute left-[-3px] bottom-[28px] bg-gray-100 bg-[url('/images/img_addfile.png')] bg-no-repeat bg-center w-[168px] h-[168px] lg:w-[282px] lg:h-[282px] rounded-xl"
      ></label>
      {image && (
        <Image
          className="w-[168px] h-[168px] absolute bottom-[28px] left-[200px] lg:w-[282px] lg:h-[282px] lg:left-[300px] rounded-xl"
          src={image}
          alt="사용자가 등록한 이미지"
          width={168}
          height={168}
        />
      )}
    </div>
  );
}
