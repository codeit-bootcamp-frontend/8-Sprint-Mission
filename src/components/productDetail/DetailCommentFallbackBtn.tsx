import BtnMedium from "core/buttons/BtnMedium";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import fallbackIcon from "core/assets/icons/fallbackIcon/ic_back.svg";

const DetailCommentFallbackBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
const BtnContent = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const DetailCommentFallbackBtn = () => {
  return (
    <DetailCommentFallbackBtnWrap>
      <Link to="/items">
        <BtnMedium>
          <BtnContent>
            목록으로 돌아가기
            <img src={fallbackIcon} alt="돌아가기 아이콘" />
          </BtnContent>
        </BtnMedium>
      </Link>
    </DetailCommentFallbackBtnWrap>
  );
};

export default DetailCommentFallbackBtn;
