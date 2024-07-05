import React, { useEffect } from "react";
import * as S from "../../../assets/styledComponents/DetailItemStyled";
import { howAgo } from "../../../util/agoCarculrator";
import emptyComments from "../../../assets/images/empty_comments.svg";

function CommentsList({ comments }) {
  return (
    <>
      {comments?.list.length ? (
        comments.list.map((e) => {
          return (
            <S.CommentsItem key={e.id}>
              <p className="content">{e.content}</p>
              <div>
                <S.WriterContainer>
                  <img className="image" src={e.writer.image} alt="writer" />
                  <S.WriterRight>
                    <span className="nickname">{e.writer.nickname}</span>
                    <span className="time">{howAgo(e.createdAt)}</span>
                  </S.WriterRight>
                </S.WriterContainer>
              </div>
            </S.CommentsItem>
          );
        })
      ) : (
        <S.EmptyCommentsContainer>
          <img src={emptyComments} />
          <p>아직 문의가 없습니다.</p>
        </S.EmptyCommentsContainer>
      )}
    </>
  );
}

export default CommentsList;
