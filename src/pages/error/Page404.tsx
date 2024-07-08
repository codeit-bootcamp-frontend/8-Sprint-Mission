import { Link } from "react-router-dom";
import { styled } from "styled-components";

import emptyImg from "core/assets/images/empty/Img_inquiry_empty@3x.png";

import BtnMedium from "core/buttons/BtnMedium";

const NotFound = styled.div`
  margin: 10rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
`;

const Page404 = () => {
  return (
    <NotFound>
      <img src={emptyImg} alt="페이지를 찾을 수 없습니다" />
      페이지를 찾을 수 없습니다.
      <Link to="/">
        <BtnMedium>돌아가기</BtnMedium>{" "}
      </Link>
    </NotFound>
  );
};

export default Page404;
