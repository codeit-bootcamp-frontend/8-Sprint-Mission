import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  customStyle?: string;
  shape?: "default" | "pill";
}

/**
 * 공통 스타일을 따로 빼서 만든 버튼 컴포넌트
 * @param customStyle 커스텀 스타일 (tailwind 적용)
 * @param shape default(0.5rem), pill(알약형) 중 한가지 선택
 * @returns 공통 스타일 버튼 컴포넌트
 */
export default function BlueButton({ customStyle, shape, children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`${customStyle} ${
        shape === "pill" ? "rounded-full" : "rounded-lg"
      } flex justify-center items-center gap-2 w-full h-full font-semibold bg-brand-blue text-gray-100 hover:bg-blue-hover active:bg-blue-active disabled:bg-gray-400 `}
    >
      {children}
    </button>
  );
}
