import { styled } from "styled-components";
import DetailAddComment from "./DetailAddComment";
import DetailCommentContent from "./DetailCommentContent";
import DetailCommentFallbackBtn from "./DetailCommentFallbackBtn";

interface DetailCommentsProps {
  productId: number;
}

const DetailCommentsWrap = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const DetailComments = ({ productId }: DetailCommentsProps) => {
  return (
    <DetailCommentsWrap>
      <DetailAddComment />
      <DetailCommentContent />
      <DetailCommentFallbackBtn />
    </DetailCommentsWrap>
  );
};

export default DetailComments;
