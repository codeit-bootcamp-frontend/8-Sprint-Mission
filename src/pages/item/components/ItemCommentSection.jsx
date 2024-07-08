import { useState } from 'react';
import styled from 'styled-components';
import CommentThread from './CommentThread.jsx';

const COMMENT_PLACEHOLDER =
  '개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.';

const CommentInputSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionTitle = styled.h1`
  font-size: 16px;
  font-weight: 600;
`;

const TextArea = styled.textarea`
  background-color: var(--gray100);
  border: none;
  border-radius: 12px;
  padding: 16px 24px;
  height: 104px;
  resize: none;

  ::placeholder {
    color: var(--gray400);
    font-size: 14px;
    line-height: 24px;

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }

  :focus {
    outline-color: var(--blue);
  }
`;

const PostCommentButton = styled.button`
  background-color: var(--blue);
  color: #fff;
  padding: 11.5px 23px;
  border-radius: 8px;
  align-self: flex-end;
  font-weight: 600;
  font-size: 14px;

  :hover {
    background-color: var(--hover);
  }

  :focus {
    background-color: var(--click);
  }

  :disabled {
    background-color: var(--gray400);
    pointer-events: none;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

function ItemCommentSection({ productId }) {
  const [comment, setComment] = useState('');

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handlePostComment = () => {};

  return (
    <>
      <CommentInputSection>
        <SectionTitle>문의하기</SectionTitle>
        <TextArea placeholder={COMMENT_PLACEHOLDER} value={comment} onChange={handleInputChange} />
        <PostCommentButton onClick={handlePostComment} disabled={!comment.trim()}>
          등록
        </PostCommentButton>
      </CommentInputSection>

      <CommentThread productId={productId} />
    </>
  );
}

export default ItemCommentSection;
