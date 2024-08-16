import React from "react";

interface GrayInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  customStyle?: string;
}

export default function GrayInput({ customStyle, children, ...props }: GrayInputProps) {
  return (
    <input
      {...props}
      className="block w-full h-[56px] px-[24px] py-[16px] text-gray-400 text-[16px] font-normal bg-gray-100 rounded-[12px] outline-none focus:border-[1px] focus:border-brand-blue placeholder:text-gray-400 valid:text-gray-800"
    >
      {children}
    </input>
  );
}
