import { styled } from "styled-components";
import DetailAddComment from "./DetailAddComment";
import DetailCommentContentList from "./DetailCommentContentList";
import DetailCommentFallbackBtn from "./DetailCommentFallbackBtn";

interface DetailCommentsProps {
  productId: number;
}

const DetailCommentsWrap = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const DetailComments = ({ productId }: DetailCommentsProps) => {
  return (
    <DetailCommentsWrap>
      <DetailAddComment />
      <DetailCommentContentList productId={productId} />
      <DetailCommentFallbackBtn />
    </DetailCommentsWrap>
  );
};

export default DetailComments;
