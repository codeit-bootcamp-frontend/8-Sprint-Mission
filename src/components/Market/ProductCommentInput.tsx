import styled from "styled-components";
import BlueButton from "../@shared/BlueButton";
import GrayBgInput from "../@shared/GrayButton";
import { useState, useEffect, ChangeEvent } from "react";

// Styled components
const CommentInputContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 24px;
  border-top: 1px solid var(--cool-gray-200);

  @media screen and (max-width: 1199px) {
    width: auto;
    margin: 0 24px;
  }

  @media screen and (max-width: 767px) {
    margin: 0 16px;
    padding-top: 16px;
  }
`;

const CommentTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  color: var(--cool-gray-900);
`;

const CommentInput = styled(GrayBgInput)`
  height: 104px;
  padding: 16px 24px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

const CommentSubmitBtn = styled(BlueButton)`
  width: 74px;
  height: 42px;
  font-size: 16px;
  border-radius: 8px;
  margin-left: auto;
`;

// Define the component
function ProductCommentInput() {
  // Define state types
  const [comment, setComment] = useState<string | null>(null);
  const [isCommentValid, setIsCommentValid] = useState<boolean>(false);

  // Event handler types
  const handleChangeInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const commentValue = event.target.value;
    setComment(commentValue);
  };

  useEffect(() => {
    setIsCommentValid(comment ? true : false);
  }, [comment]);

  return (
    <CommentInputContainer>
      <CommentTitle>문의하기</CommentTitle>
      <CommentInput
        as="textarea"
        onChange={handleChangeInput}
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
      />
      <CommentSubmitBtn disabled={!isCommentValid}>등록</CommentSubmitBtn>
    </CommentInputContainer>
  );
}

export default ProductCommentInput;
