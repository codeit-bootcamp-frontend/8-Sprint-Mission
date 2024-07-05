import BtnSmall from "core/buttons/BtnSmall";
import { styled } from "styled-components";

interface DetailAddCommentBtnProps {
  disabled: boolean;
}

const DetailAddCommentBtnWrap = styled.div`
  align-self: end;
`;

const DetailAddCommentBtn = ({ disabled }: DetailAddCommentBtnProps) => {
  return (
    <DetailAddCommentBtnWrap>
      <BtnSmall onClick={() => {}} disabled={disabled}>
        등록
      </BtnSmall>
    </DetailAddCommentBtnWrap>
  );
};

export default DetailAddCommentBtn;
