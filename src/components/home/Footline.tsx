import {
  HeadFootLine,
  HeadFootLineContent,
  HeadFootLineTitle,
} from "./HeadFootLine";

import footlineImg from "core/assets/images/footline/footlineImage.png";

const Footline = () => {
  return (
    <HeadFootLine>
      <HeadFootLineContent>
        <HeadFootLineTitle>
          <h3>믿을 수 있는 판다마켓 중고거래</h3>
        </HeadFootLineTitle>
        <img src={footlineImg} alt="headline image" />
      </HeadFootLineContent>
    </HeadFootLine>
  );
};

export default Footline;
