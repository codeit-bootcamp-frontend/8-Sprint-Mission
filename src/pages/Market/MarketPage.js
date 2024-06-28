import "./itemListPage.css";
import ProductList from "./ProductList.js";
import BestList from "./BestList.js";
import Nav from "../../components/Nav.js";

const LIMIT = 10;

function MarketPage() {
  return (
    <div className="full-body">
      <Nav />
      <div className="main">
        <div>
          <BestList items={sortedItems} />
          <ProductList items={sortedItems} />
        </div>
      </div>
    </div>
  );
}

export default MarketPage;
