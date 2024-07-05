import React from "react";
import * as S from "../../../assets/styledComponents/DetailItemStyled";

function InfoTags({ tags }) {
  return (
    <>
      {tags?.map((tag, i) => {
        return <S.TagButton key={Date.now() * i ** 2}>#{tag}</S.TagButton>;
      })}
    </>
  );
}

export default InfoTags;
