import '../ItemsOnSale/ItemsOnSale.css';
import favoriteIcon from '../../assets/images/icon/btn_icon/ic_favorite.png';
import searchIcon from '../../assets/images/icon/btn_icon/ic_search.png';
import DropDown from '../DropDown/DropDown';

function BestItems({ item }) {
  const { favoriteCount, images, price, name } = item;
  const won = price.toLocaleString('ko-KR');
  return (
    <div className="sale-item-box">
      <img className="sale-item-img" src={images} alt={name} />
      <div className="sale-item-title">{name}</div>
      <div className="sale-item-price">{won}원</div>
      <div className="sale-item-favorite">
        <img src={favoriteIcon} width="16" height="16" alt="favoriteIcon" />
        {favoriteCount}
      </div>
    </div>
  );
}

function ItemsOnSale({ items, orderBy, handleOrderChange }) {
  const cutItems = [...items.list];
  return (
    <div className="sale-item">
      <div className="mini-nav-bar">
        <h2 className="sale-title">판매 중인 상품</h2>
        <div className="mini-nav-bar-tools">
          <div className="search-box">
            <img
              className="serch-icon"
              src={searchIcon}
              alt="검색 돋보기 아이콘"
              width="24px"
              height="24px"
            />
            <input className="search" placeholder="검색할 상품을 입력해 주세요" />
          </div>
          <a className="add-item-btn" href="additem">
            상품 등록하기
          </a>
          <DropDown
            className="drop-down-btn"
            orderBy={orderBy}
            handleOrderChange={handleOrderChange}
          />
        </div>
      </div>
      <ul className="sale-item-container">
        {cutItems.map((item) => (
          <li key={item.id}>
            <BestItems item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ItemsOnSale;
