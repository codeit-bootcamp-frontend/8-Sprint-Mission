import { useState } from "react";
import { styled } from "styled-components";
import DetailAddCommentBtn from "./DetailAddCommentBtn";

const DetailAddCommentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  @media (width < 1200px) {
    margin: 0 2.4rem;
  }
`;

const DetailAddCommentInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  & label {
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.909rem;
    color: var(--gray-900);
  }

  & textarea {
    width: 100%;
    height: 10.4rem;
    font-size: 1.6rem;
    font-weight: 400;
    border: none;
    line-height: 2.4rem;
    border-radius: 1.2rem;
    padding: 1.6rem 2.4rem;
    background-color: var(--gray-100);
    resize: none;
    &::placeholder {
      text-wrap: pretty;
    }
  }
`;

const DetailAddComment = () => {
  const [detailComment, setDetailComment] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDetailComment(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <DetailAddCommentForm onSubmit={handleSubmit}>
      <DetailAddCommentInputWrap>
        <label htmlFor="detailComment">문의하기</label>
        <textarea
          id="detailComment"
          name="detailComment"
          value={detailComment}
          onChange={handleChange}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
      </DetailAddCommentInputWrap>
      <DetailAddCommentBtn disabled={detailComment ? false : true} />
    </DetailAddCommentForm>
  );
};

export default DetailAddComment;
