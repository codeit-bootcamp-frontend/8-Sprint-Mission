import React from "react";

function PageArrowButton({ direction }) {
  return (
    <>
      <button>
        <img src={direction} />
      </button>
    </>
  );
}

export default PageArrowButton;
