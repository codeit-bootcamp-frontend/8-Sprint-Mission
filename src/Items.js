import './items.css';

function Items() {
  return (
    <>
      <div className="main">
        <h2>베스트 상품</h2>
        <div className="best-wrapper">상품들</div>
        <div className="onsale-bar">
          <h2>판매 중인 상품</h2>
          <input />
          <a href="/#">상품 등록하기</a>
          <select>
            <option>최신순</option>
            <option>좋아요순</option>
          </select>
        </div>
        <div className="onsale-wrapper">상품들</div>
      </div>
      <ul className="pagination-container">
        <li>좌</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>우</li>
      </ul>
    </>
  );
}

export default Items;
