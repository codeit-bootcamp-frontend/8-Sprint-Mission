import React, { useEffect, useState } from "react";
import styled from "styled-components";

function PageArrowButton({
  imgSrc,
  direction,
  onClickNum,
  pageNum,
  pageCount,
}) {
  const [pageValid, setPageValid] = useState(false);

  const onClickArrow = (page) => {
    const nextPage = direction === "left" ? page - 1 : page + 1;
    if (pageValid) {
      onClickNum(nextPage);
    }
  };
  useEffect(() => {
    if (direction === "left" && pageNum - 1) {
      setPageValid(true);
    } else if (direction === "right" && pageNum + 1 <= pageCount) {
      setPageValid(true);
    } else {
      setPageValid(false);
    }
  }, [pageNum, pageCount]);

  return (
    <>
      <ArrowButton
        onClick={() => {
          onClickArrow(pageNum);
        }}
        $pageValid={pageValid}
      >
        <img src={imgSrc} />
      </ArrowButton>
    </>
  );
}

const ArrowButton = styled.button`
  opacity: ${({ $pageValid }) => ($pageValid ? "1" : "0")};
  cursor: ${({ $pageValid }) => ($pageValid ? "pointer" : "default")};
`;
export default PageArrowButton;
