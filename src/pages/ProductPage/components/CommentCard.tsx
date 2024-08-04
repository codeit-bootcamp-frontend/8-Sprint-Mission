import React from "react";
import styled from "styled-components";

const CommentCardContainer = styled.div``;
const CommentContent = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: var(--gray-800);
`;
const UserProfile = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  gap: 0.8rem;
`;
const UserImg = styled.img`
  width: 2.5rem;
`;
const UserName = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1rem;
  color: var(--gray-600);
`;
const UpdateAt = styled.p`
  font-size: 0.6rem;
  font-weight: 400;
  line-height: 0.8rem;
  color: var(--gray-400);
`;

const Boundary = styled.div`
  border: 1px solid var(--gray-200);
  margin: 1.5rem 0;
`;

function CommentCard({ comment }) {
  const { content } = comment;
  const { image, nickname } = comment.writer;

  return (
    <>
      <CommentCardContainer>
        <CommentContent>{content}</CommentContent>
        <UserProfile>
          <UserImg src={image} />
          <div>
            <UserName>{nickname}</UserName>
            <UpdateAt>1시간전</UpdateAt>
          </div>
        </UserProfile>
      </CommentCardContainer>
      <Boundary />
    </>
  );
}

export default CommentCard;
