import { Dispatch, SetStateAction } from "react";
import arrowLeft from "../assets/arrow_left@3x.png";
import arrowRight from "../assets/arrow_right@3x.png";

type Props = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  pageCount: number;
};

function Pagination({ page, setPage, pageCount }: Props) {
  return (
    <ul className="pagination-container">
      <button
        className="pagination-btn"
        onClick={() => setPage((prev) => (prev === 1 ? prev : prev - 1))}
      >
        <img src={arrowLeft} alt="page prev" width={16} height={16} />
      </button>
      {Array.from({ length: pageCount }, (_, i) => (
        <button
          onClick={() => setPage(i + 1)}
          className={`pagination-btn ${
            i + 1 === page && "pagination-btn--active"
          }`}
          key={i}
        >
          <li>{i + 1}</li>
        </button>
      ))}
      <button
        className="pagination-btn"
        onClick={() =>
          setPage((prev) => (prev === pageCount ? prev : prev + 1))
        }
      >
        <img src={arrowRight} alt="page next" width={16} height={16} />
      </button>
    </ul>
  );
}

export default Pagination;
