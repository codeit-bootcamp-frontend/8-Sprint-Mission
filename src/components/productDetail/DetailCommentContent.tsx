import useDifferTime from "lib/hooks/useDifferTime";
import { styled } from "styled-components";

interface CommentWriter {
  id: number;
  nickname: string;
  image: string;
}

interface DetailCommentContentProps {
  content: string;
  updatedAt: string;
  writer: CommentWriter;
}

const DetailCommentContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  padding-bottom: 2.4rem;
  margin-bottom: 2.4rem;
  border-bottom: 0.1rem solid var(--gray-200);
  & p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.24rem;
    color: var(--gray-800);
  }

  @media (width < 1200px) {
    margin: 0 2.4rem 2.4rem;
  }
`;

const DetailCommentWriterWrap = styled.div`
  max-width: 10.9rem;
  max-height: 4rem;
  display: flex;
  gap: 0.8rem;

  & img {
    width: 4rem;
    heigth: 4rem;
  }
`;
const DetailCommentWriterInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  & .nickname {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.671rem;
    color: var(--gray-600);
  }

  & .updatedAt {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.432rem;
    color: var(--gray-400);
  }
`;

const DetailCommentContent = ({
  content,
  updatedAt,
  writer,
}: DetailCommentContentProps) => {
  const updatedTime = useDifferTime({ updatedAt });

  return (
    <DetailCommentContentWrap>
      <p>{content}</p>
      <DetailCommentWriterWrap>
        <img src={writer.image} alt="작성자 프로필" />
        <DetailCommentWriterInfoWrap>
          <p className="nickname">{writer.nickname}</p>
          <p className="updatedAt">{updatedTime ?? updatedAt}</p>
        </DetailCommentWriterInfoWrap>
      </DetailCommentWriterWrap>
    </DetailCommentContentWrap>
  );
};

export default DetailCommentContent;
