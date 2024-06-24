import Item from "../Item.js";

function Best({ bests }) {
  return (
    <div className="best-section">
      <div>베스트 상품</div>
      <div className="best-products">
        <Item displays={bests} />
      </div>
    </div>
  );
}

export default Best;
