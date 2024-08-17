import React from "react";

interface GrayInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  customStyle?: string;
}

export default function GrayTextarea({ customStyle, children, ...props }: GrayInputProps) {
  return (
    <textarea
      {...props}
      className={`${customStyle} block w-full h-[200px] md:h-[282px] px-[24px] py-[16px] text-gray-400 text-[16px] font-normal bg-gray-100 rounded-[12px] outline-none focus:border-[1px] focus:border-brand-blue placeholder:text-gray-400 valid:text-gray-800`}
    >
      {children}
    </textarea>
  );
}
