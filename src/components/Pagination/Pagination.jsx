import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./Pagination.css";

function Pagination(props) {
  return (
    <div className="pagination">
      <div className="pagination-btn">
        <IoIosArrowBack />
      </div>
      <div className="pagination-btn">
        <IoIosArrowForward />
      </div>
    </div>
  );
}

export default Pagination;
