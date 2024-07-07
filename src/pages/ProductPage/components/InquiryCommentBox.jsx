import React, { useState } from "react";
import CommentCard from "./CommentCard";
import { getComments } from "../../../api/api";
import styled from "styled-components";
import inquiryEmptyImg from "../../../images/Img_inquiry_empty.png";
import useAsync from "../../../hooks/useAsync";

const InquiryCommentForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const InquiryCommentLabel = styled.label`
  align-self: flex-start;
  font-weight: 600;
  font-size: 1rem;
`;
const InquiryCommentTextArea = styled.textarea`
  margin: 1rem 0;
  height: 6rem;
  background-color: var(--gray-100);
  padding: 1rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.8rem;
  resize: none;

  &::placeholder {
    color: var(--gray-400);
  }
`;
const SubmitCommentBtn = styled.button`
  align-self: flex-end;
  font-size: 1rem;
  line-height: 1.2rem;
  padding: 0.8rem 1.3rem;
  /* background-color: var(--gray-400); */
  background-color: ${({ disabled }) =>
    !disabled ? "var(--brand-blue)" : "var(--gray-400)"};
  border-radius: 0.7rem;
  color: white;
`;
const InquiryEmptyBox = styled.div`
  text-align: center;
`;
const InquiryEmptyImg = styled.img`
  width: 12.5rem;
`;
const InquiryEmptyText = styled.p`
  font-size: 1rem;
`;

function InquiryCommentBox({ productId }) {
  const [fetchStatus, data] = useAsync(getComments, productId);
  const { getData: comments } = data;
  const [comment, setComment] = useState();

  const handleInputChange = (e) => {
    const commentValue = e.target.value;
    setComment(commentValue);
  };
  const handleCommentSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <InquiryCommentForm onSubmit={handleCommentSubmit}>
        <InquiryCommentLabel>문의하기</InquiryCommentLabel>
        <InquiryCommentTextArea
          value={comment}
          onChange={handleInputChange}
          placeholder="개인정보를 공유 및 요청하거나, 명예훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <SubmitCommentBtn type="submit" disabled={!comment}>
          등록
        </SubmitCommentBtn>
      </InquiryCommentForm>

      {fetchStatus === "완료" &&
        (comments.list.length === 0 ? (
          <InquiryEmptyBox>
            <InquiryEmptyImg src={inquiryEmptyImg} />
            <InquiryEmptyText>아직 문의가 없습니다.</InquiryEmptyText>
          </InquiryEmptyBox>
        ) : (
          comments.list.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))
        ))}
    </>
  );
}

export default InquiryCommentBox;
