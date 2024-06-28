import { Link } from "react-router-dom";
import BtnSmall from "../../core/buttons/BtnSmall";

interface LoginBtnProps {
  onClick: () => void;
}

const LoginBtn = ({ onClick }: LoginBtnProps) => {
  return (
    <Link to="/auth">
      <BtnSmall onClick={onClick} disabled={false}>
        로그인
      </BtnSmall>
    </Link>
  );
};

export default LoginBtn;
