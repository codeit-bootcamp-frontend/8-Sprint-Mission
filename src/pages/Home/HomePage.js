import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>일상의 모든 물건을 구경해보세요!</h1>
      <Link to="/market">
        <button>구경하러 가기</button>
      </Link>
    </div>
  );
}

export default HomePage;
