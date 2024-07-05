import { styled } from "styled-components";
import DetailAddComment from "./DetailAddComment";
import DetailCommentContent from "./DetailCommentContent";
import DetailCommentFallbackBtn from "./DetailCommentFallbackBtn";

interface DetailCommentsProps {
  productId: number;
}

const DetailCommentsWrap = styled.section``;

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
