import { useEffect, useState } from "react";
import BtnCircle from "../../core/buttons/BtnCircle";

import LeftArrowIcon from "../../core/assets/icons/pagination/leftArrowIcon.svg";
import LeftArrowDisableIcon from "../../core/assets/icons/pagination/leftArrowDisableIcon.svg";
import RightArrowIcon from "../../core/assets/icons/pagination/rightArrowIcon.svg";
import RightArrowDisableIcon from "../../core/assets/icons/pagination/rightArrowDisableIcon.svg";

const PagiNation = ({ currentPage, handleCurrentPage, totalPage }) => {
  const [pages, setPages] = useState([1]);

  const handlePages = () => {
    const newPages = Array(totalPage)
      .fill()
      .map((_, i) => i + 1);
    setPages(newPages);
  };

  useEffect(() => {
    handlePages();
  }, [totalPage]);

  return (
    <ul className="pagination-container" onClick={handleCurrentPage}>
      <BtnCircle disabled={currentPage === totalPage}>
        <img
          src={currentPage === 1 ? LeftArrowDisableIcon : LeftArrowIcon}
          alt="왼쪽 화살표"
        />
      </BtnCircle>
      {pages?.map((page) => {
        return (
          <li key={page}>
            <BtnCircle isActive={currentPage === page}>{page}</BtnCircle>
          </li>
        );
      })}
      <BtnCircle>
        <img
          src={
            currentPage === totalPage ? RightArrowDisableIcon : RightArrowIcon
          }
          alt="오른쪽 화살표"
        />
      </BtnCircle>
    </ul>
  );
};

export default PagiNation;
