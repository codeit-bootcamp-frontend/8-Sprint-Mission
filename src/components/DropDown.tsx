import { useState } from "react";
import S from "@/components/DropDown.module.css";

interface DropDownProps {
  className?: string;
  orderBy: string;
  handleOrderChange: (order: string) => void;
}

export default function DropDown({ className, orderBy, handleOrderChange }: DropDownProps) {
  const nowType = orderBy;
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState(nowType);
  const toggle = () => setIsOpen(!isOpen);
  const optionClick = (option: string) => {
    setSelect(option);
    setIsOpen(false);
  };

  const getApiRecent = () => {
    handleOrderChange("recent");
  };

  const getApiFavorite = () => {
    handleOrderChange("favorite");
  };

  return (
    <div className={S.selectOptions} onClick={toggle}>
      <div className={S.selectText}>{select === "recent" ? "최신순" : "좋아요순"}</div>
      {isOpen && (
        <ul className={S.selectOptionsBox}>
          <li
            className={S.selectOptionsRecent}
            onClick={() => {
              optionClick("recent");
              getApiRecent();
            }}
          >
            최신순
          </li>
          <li
            className={S.selectOptionsFavorite}
            onClick={() => {
              optionClick("favorite");
              getApiFavorite();
            }}
          >
            좋아요순
          </li>
        </ul>
      )}
    </div>
  );
}
