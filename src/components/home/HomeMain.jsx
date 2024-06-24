import { Link } from "react-router-dom";

import HomeSections from "./HomeSections";

function HomeMain() {
  return (
    <main className="main-whole">
      <div className="main-top">
        <div className="top-inner">
          <p>
            일상의 모든 물건을&nbsp;
            <br className="br-tag banner-br" />
            거래해 보세요
          </p>
          <Link to="/items">
            <span className="top-btn">구경하러가기</span>
          </Link>
        </div>
      </div>
      <HomeSections />
      <div className="main-bottom">
        <p className="bottom-inner">
          믿을 수 있는
          <br />
          판다마켓 중고거래
        </p>
      </div>
    </main>
  );
}

export default HomeMain;
