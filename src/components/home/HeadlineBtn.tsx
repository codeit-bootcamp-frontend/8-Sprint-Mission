import BtnLarge from "core/buttons/BtnLarge";
import { Link } from "react-router-dom";

const HeadlineBtn = () => {
  return (
    <Link to="/items">
      <BtnLarge color="var(--font-buton)" bgColor="var(--main-color)">
        구경하러 가기
      </BtnLarge>
    </Link>
  );
};

export default HeadlineBtn;
