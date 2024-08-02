import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h2>존재하지 않는 페이지 입니다.</h2>
      <p>주소를 다시 한번 확인해주세요.</p>
      <Link to="/">메인 페이지로 가기</Link>
    </div>
  );
}

export default NotFoundPage;
