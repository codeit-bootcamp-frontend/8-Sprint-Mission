import React from "react";
import useToggle from "@/hooks/useToggle";
import Image from "next/image";

type DropdownProps<T extends string> = {
  itemDict: Record<T, string>;
  currentItemValue: T;
  onItemChange: (value: T) => void;
};

/**
 * 드랍다운 공통 컴포넌트
 * @param itemDict value값을 key로 가지고 해당 값의 사용자 표시 값을 value로 가지는 객체
 * @param currentItemValue 현재 value값
 * @param onItemChange 드롭다운에서 item을 선택했을 때, 해당 value값을 파라미터로 해서 실행하는 함수
 */
export default function Dropdown<T extends string>({
  itemDict,
  currentItemValue,
  onItemChange,
}: DropdownProps<T>) {
  const [isOpen, toggleIsOpen] = useToggle();

  const handleItemClick = (value: T) => {
    onItemChange(value);
    toggleIsOpen();
  };

  return (
    <div className="relative">
      <button onClick={toggleIsOpen}>
        <div className="flex md:hidden justify-center items-center w-[42px] h-[42px] bg-gray border-gray-200 border-[1px] rounded-[8px]">
          <Image width={24} height={24} src="/images/ic_dropdown.png" alt="드롭다운 버튼" />
        </div>
        <div className="hidden md:flex justify-between items-center w-[130px] h-[42px] px-[20px] py-[9px] text-gray-800 bg-gray text-[16px] font-normal border-[1px] rounded-[12px]">
          {itemDict[currentItemValue]}
          <Image width={24} height={24} src="/images/ic_dropdown_arrow.png" alt="드롭다운 화살표" />
        </div>
      </button>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } absolute w-[130px] top-[46px] right-0 bg-gray border-gray-200 border-[1px] rounded-[12px] z-10  cursor-pointer`}
      >
        {Object.keys(itemDict).map((itemValue) => (
          <li
            className="flex justify-center items-center h-[42px] text-gray-800 text-[16px] font-normal hover:bg-gray-50 border-b-[1px] last:border-b-0"
            key={itemValue}
            onClick={() => handleItemClick(itemValue as T)}
          >
            {itemDict[itemValue as T]}
          </li>
        ))}
      </ul>
    </div>
  );
}
