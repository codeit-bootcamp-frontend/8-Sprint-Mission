import React, { useEffect, useState } from "react";

function PageButton() {
  const [pageButtons, setPageButtons] = useState(5);
  const [pageArr, setPageArr] = useState([]);

  useEffect(() => {
    const newPageArr = [];
    for (let i = 0; i < pageButtons; i++) {
      newPageArr.push(i + 1);
    }
    setPageArr(newPageArr);
  }, [pageButtons]);

  return (
    <>
      {pageArr.map((ele, i) => (
        <button key={ele}>{ele}</button>
      ))}
    </>
  );
}

export default PageButton;
