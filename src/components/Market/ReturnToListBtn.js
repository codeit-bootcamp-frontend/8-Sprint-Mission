import styled from "styled-components";
import BlueButton from "../@shared/BlueButton";

import ReturnImgUrl from "../../assets/images/ic_back.png";

const ListLinkBtn = styled(BlueButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  font-size: 18px;
  width: 240px;
  height: 48px;
  margin: 0 auto 60px;
`;

const ReturnImg = styled.img`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-left: 10px;
`;

function ReturnToListBtn() {
  return (
    <ListLinkBtn>
      목록으로 돌아가기
      <ReturnImg src={ReturnImgUrl} alt="돌아가기 이미지" />
    </ListLinkBtn>
  );
}

export default ReturnToListBtn;
