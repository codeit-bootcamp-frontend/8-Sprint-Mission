import React from "react";

import * as S from "../../../assets/styledComponents/DetailItemStyled";

import AddCommentsForm from "./AddCommentsForm";
import CommentsList from "./CommentsList";

function DetailItemComments({ comments }) {
  return (
    <S.CommentsContainer>
      <AddCommentsForm />
      <CommentsList comments={comments} />
    </S.CommentsContainer>
  );
}

export default DetailItemComments;
