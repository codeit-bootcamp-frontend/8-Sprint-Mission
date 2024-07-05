import ItemCard from './ItemCard';

function OnSaleProducts() {
  return (
    <>
      <div>판매중인 상품</div>
      <form>
        <input placeholder="검색할 상품을 입력해주세요"></input>
        <button>상품 등록하기</button>
        <select>
          <option value="option1">최신순</option>
          <option value="option2">좋아요순</option>
        </select>
      </form>
      <div>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </>
  );
}

export default OnSaleProducts;
