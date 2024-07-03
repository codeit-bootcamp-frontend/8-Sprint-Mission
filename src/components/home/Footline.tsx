import {
  HeadFootLine,
  HeadFootLineContent,
  HeadFootLineTitle,
} from "./HeadFootLine";

import footlineImg from "core/assets/images/footline/footlineImage.png";
import { styled } from "styled-components";

const FootlineTitle = styled(HeadFootLineTitle)`
  max-width: 32rem;
  @media (width < 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
  }
`;

const FootlineContent = styled(HeadFootLineContent)`
  @media (width < 1200px) {
    & img {
      width: 120%;
    }
  }
  @media (width < 768px) {
    & img {
      width: 120%;
    }
  }
`;

const Footline = () => {
  return (
    <HeadFootLine>
      <FootlineContent>
        <FootlineTitle>
          <h3>믿을 수 있는 판다마켓 중고거래</h3>
        </FootlineTitle>
        <img src={footlineImg} alt="headline image" />
      </FootlineContent>
    </HeadFootLine>
  );
};

export default Footline;
