import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      페이지를 찾을 수 없습니다.
      <Link to="/">
        <button>돌아가기</button>{" "}
      </Link>
    </div>
  );
};

export default Page404;
