import ItemList from "./ItemList.js";
import BestList from "./BestList.js";
import Nav from "../../components/Nav";

function MarketPage() {
  return (
    <div className="full-body">
      <Nav />
      <div className="main">
        <div>
          <BestList />
          <ItemList />
        </div>
      </div>
    </div>
  );
}

export default MarketPage;
