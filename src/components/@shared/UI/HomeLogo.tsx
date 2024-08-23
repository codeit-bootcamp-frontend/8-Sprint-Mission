import { Link } from "react-router-dom";
import logo from "assets/images/logo_pandamarket.png";

interface HomeLogoProps {
  className?: string;
}

const HomeLogo = ({ className }: HomeLogoProps) => {
  return (
    <div className={`${className} flex justify-center`}>
      <Link to="/">
        <img src={logo} alt="판다마켓 로고" />
      </Link>
    </div>
  );
};

export default HomeLogo;
