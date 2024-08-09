import { useNavigate } from "react-router-dom";
import backIcon from "assets/images/ic_back.png";

interface ReturnButtonProps {
  buttonText: string;
  onClick?: () => void;
}

function ReturnButton({ buttonText, onClick }: ReturnButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick(); // onClick이 있을 경우 호출
    } else {
      navigate(-1); // 기본 동작
    }
  };

  return (
    <button
      className="w-[248px] bg-brand my-12 rounded-[40px] mx-auto flex content-center justify-center p-3 text-gray-100 text-lg gap-3"
      onClick={handleClick}
    >
      {buttonText}
      <img src={backIcon} className="h-6" alt="돌아가기 아이콘" />
    </button>
  );
}

export default ReturnButton;
