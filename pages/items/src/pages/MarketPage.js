import "./itemListPage.css";
import ProductList from "../components/ProductList.js";
import BestList from "../components/BestList.js";
import Nav from "../components/Nav.js";

const LIMIT = 10;

function MarketPage() {
  return (
    <div className="full-body">
      <Nav />
      <div className="main">
        <div>
          <h1>베스트 상품</h1>
          <BestList items={sortedItems} />
        </div>
      </div>
    </div>
  );
}

export default MarketPage;
