import React, { useEffect, useState } from "react";
import styled from "styled-components";

function PageButton({ onClickNum, pageNum, pageCount }) {
  const [pageArr, setPageArr] = useState([]);

  useEffect(() => {
    const newPageArr = [];
    for (let i = 0; i < pageCount; i++) {
      newPageArr.push(i + 1);
    }
    setPageArr(newPageArr);
  }, [pageCount]);

  return (
    <>
      {pageArr.map((num) => (
        <NumberButton
          key={num}
          onClick={() => {
            onClickNum(num);
          }}
          $pageNum={pageNum}
          $buttonNum={num}
        >
          {num}
        </NumberButton>
      ))}
    </>
  );
}

const NumberButton = styled.button`
  background-color: ${({ $buttonNum, $pageNum }) =>
    $pageNum === $buttonNum ? "var(--blue)" : "var(--gray-200)"};
  color: ${({ $buttonNum, $pageNum }) =>
    $pageNum === $buttonNum ? "#fff" : "var(--gray-500)"};
`;

export default PageButton;
